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

export async function getCityIdFromDisplayName(displayName) {
  try {
    const snapshot = await db
      .collection("cities")
      .where("displayName", "==", displayName)
      .get();
    return snapshot.docs[0].id;
  } catch (e) {
    console.log(e.message);
  }
}

export async function getNeighbourhoods(cityDisplayName) {
  try {
    const cityID = await getCityIdFromDisplayName(cityDisplayName);
    const snapshot = await db
      .collection("cities")
      .doc(cityID)
      .collection("regions")
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
      organizerUID: uid
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
    const NOW = moment();
    const uid = localStorage.getItem("uid");

    return (await getAllInvites(hometown)).filter((invite) => {
      return (
        uid != invite.data().organizerUID &&
        invite.data().invitees > 0 &&
        moment(invite.data().dateTime).isAfter(NOW)
      );
    });
  } catch (e) {
    console.log(e.message);
  }
}

function convertTimeRange(dateRange, timeRange) {
  if (dateRange.length === 2 && timeRange.length === 2) {
    let dateFrom = moment(dateRange[0], 'DD/MM/YYYY')

    let timeParsed = moment(timeRange[0], 'HH:mm');
    if (timeParsed.isValid() == true) {
      dateFrom = dateFrom.hour(timeParsed.hour())
        .minute(timeParsed.minute());
    }

    let dateTo = moment(dateRange[1], 'DD/MM/YYYY')

    timeParsed = moment(timeRange[1], 'HH:mm');
    if (timeParsed.isValid() == true) {
      dateTo = dateTo.hour(timeParsed.hour())
        .minute(timeParsed.minute());
    }

    return {
      dateTimeFrom: dateFrom.toDate(),
      dateTimeTo: dateTo.toDate()
    }
  } else if (dateRange.length === 0 && timeRange.length === 0) {
    return null
  }

  throw new Error('DateTimeRange not set correctly')
}

export async function getFilteredInvites(
  hometown,
  neighbourhoods,
  dateRange,
  timeRange
) {
  try {
    const uid = localStorage.getItem("uid");

    let filteredInvites = db.collectionGroup("createdInvites")
      .where("city", "==", hometown)

    if (neighbourhoods.length) {
      filteredInvites = filteredInvites.where("neighborhood", "in", neighbourhoods)
    }

    const dateTimeRange = convertTimeRange(dateRange, timeRange)

    if (dateTimeRange) {
      console.log(dateTimeRange)
      filteredInvites = filteredInvites
        .orderBy("dateTime")
        .where("dateTime", ">=", dateTimeRange.dateTimeFrom)
        .where("dateTime", "<=", dateTimeRange.dateTimeTo)
    }

    return (await filteredInvites.get()).docs.filter(invite => {
      return invite.data().organizerUID !== uid && invite.data().invitees > 0
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

export async function isInviteAccepted(inviteID) {
  const uid = localStorage.getItem("uid");
  try {
    const acceptedInvitesIdentifiers = (
      await db.collection("users").doc(uid).collection("acceptedInvites").get()
    ).map((acceptedInvite) => {
      return acceptedInvite.data().inviteID;
    });

    console.log(acceptedInvitesIdentifiers);
    console.log(inviteID);
    return acceptedInvitesIdentifiers.includes(inviteID);
  } catch (e) {
    console.log(e.message);
  }
}

export async function generateInviteAcceptedStatusMap(invites) {
  const uid = localStorage.getItem("uid");

  try {
    let inviteAcceptedStatusMap = new Map();
    invites.forEach((invite) => {
      inviteAcceptedStatusMap.set(invite.id, false);
    });
    (await getAcceptedInvites(uid)).forEach((acceptedInvite) => {
      inviteAcceptedStatusMap.set(acceptedInvite.data().inviteID, true);
    });

    return inviteAcceptedStatusMap;
  } catch (e) {
    console.log(e.message);
  }
}
