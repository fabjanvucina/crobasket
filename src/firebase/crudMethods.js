import moment from "moment";
import app from "./firebase.js";
const db = app.firestore();

export async function getCities() {
  try {
    const snapshot = await db
      .collection("cities")
      .orderBy("populationRank")
      .get();
    return snapshot.docs;
  } catch (e) {
    console.log(e.message);
  }
}

export async function addUser(name, surname, phoneNumber, uid) {
  try {
    await db
      .collection("users")
      .doc(uid)
      .set({
        displayName: name + " " + surname,
        phoneNumber: phoneNumber,
        uid: uid
      });
  } catch (e) {
    console.log(e.message);
  }
}

export async function getUser(uid) {
  try {
    const user = await db.collection("users").doc(uid).get();
    return user.data();
  } catch (e) {
    console.log(e.message);
  }
}

export async function createInvite(
  hometown,
  neighbourhood,
  invitees,
  dateTime,
  phoneNumber,
  uid,
  organizer
) {
  try {
    await db.collection("users").doc(uid).collection("createdInvites").add({
      city: hometown,
      neighbourhood: neighbourhood,
      invitees: invitees,
      dateTime: dateTime,
      phoneNumber: phoneNumber,
      organizer: organizer,
      uid: uid
    });
  } catch (e) {
    console.log(e.message);
  }
}

export async function acceptInvite(organizerUID, inviteID, invitees) {
  const userUID = localStorage.getItem("uid");
  try {
    await db
      .collection("users")
      .doc(organizerUID)
      .collection("createdInvites")
      .doc(inviteID)
      .update({
        invitees: invitees - 1
      });
    await db
      .collection("users")
      .doc(userUID)
      .collection("acceptedInvites")
      .add({
        organizerUID: organizerUID,
        inviteID: inviteID
      });
  } catch (e) {
    console.log(e.message);
  }
}

export async function getAcceptedInvites(uid) {
  try {
    const snapshot = await db
      .collection("users")
      .doc(uid)
      .collection("acceptedInvites")
      .get();
    return snapshot.docs;
  } catch (e) {
    console.log(e.message);
  }
}

export async function getNeighbourhoods(hometown) {
  try {
    const snapshot = await db
      .collection("cities")
      .doc(hometown)
      .collection("regions")
      .get();
    return snapshot.docs;
  } catch (e) {
    console.log(e.message);
  }
}

export async function getAllInvites(hometown) {
  try {
    const snapshot = await db
      .collectionGroup("createdInvites")
      .where("city", "==", hometown)
      .orderBy("dateTime")
      .get();
    return snapshot.docs;
  } catch (e) {
    console.log(e.message);
  }
}

export async function getEligibleInvites(hometown) {
  try {
    const now = moment();
    const uid = localStorage.getItem("uid");
    const acceptedInvites = (await getAcceptedInvites(uid)).map(
      (acceptedInvite) => {
        return acceptedInvite.data().inviteID;
      }
    );
    const fetchedInvites = await getAllInvites(hometown);
    const eligibleFetchedInvites = fetchedInvites.filter((invite) => {
      return (
        uid != invite.data().uid &&
        invite.data().invitees > 0 &&
        !acceptedInvites.includes(invite.id) &&
        moment(invite.data().dateTime).isAfter(now)
      );
    });
    return eligibleFetchedInvites;
  } catch (e) {
    console.log(e.message);
  }
}

export async function getFilteredInvites(
  hometown,
  neighbourhoods,
  dateRange,
  timeRange
) {
  try {
    let filteredInvites = await getEligibleInvites(hometown);

    if (neighbourhoods != "") {
      const neighbourhoodsArray = neighbourhoods.split(",");
      filteredInvites = filteredInvites.filter((invite) => {
        return neighbourhoodsArray.includes(invite.data().neighbourhood);
      });
    }

    if (dateRange != "") {
      const dateRangeArray = dateRange.split(",");
      let startDateString = moment(dateRangeArray[0]).format("DD/MM/YYYY");
      let endDateString = moment(dateRangeArray[1]).format("DD/MM/YYYY");
      filteredInvites = filteredInvites.filter((invite) => {
        return (
          startDateString <
            moment(invite.data().dateTime).format("DD/MM/YYYY") &&
          endDateString > moment(invite.data().dateTime).format("DD/MM/YYYY")
        );
      });
    }

    if (timeRange != "") {
      const timeRangeArray = timeRange.split(",");

      let startTimeString = moment(timeRangeArray[0]).format("HH:mm");
      let endTimeString = moment(timeRangeArray[1]).format("HH:mm");
      filteredInvites = filteredInvites.filter((invite) => {
        return (
          startTimeString <= moment(invite.data().dateTime).format("HH:mm") &&
          endTimeString >= moment(invite.data().dateTime).format("HH:mm")
        );
      });
    }

    return filteredInvites;
  } catch (e) {
    console.log(e.message);
  }
}
