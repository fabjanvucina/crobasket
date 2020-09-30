import moment from "moment";
import app from "./firebase.js";
const db = app.firestore();

//cities methods

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

//user methods

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

//invite methods

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
    await db
      .collection("users")
      .doc(uid)
      .collection("createdInvites")
      .add({
        city: hometown,
        neighbourhood: neighbourhood,
        invitees: invitees,
        dateTime: moment(dateTime).toDate(),
        displayDate: moment(dateTime).format("DD/MM/YYYY"),
        displayTime: moment(dateTime).format("HH:mm"),
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
      .doc(inviteID)
      .set({
        organizerUID: organizerUID,
        inviteID: inviteID
      });
  } catch (e) {
    console.log(e.message);
  }
}

export async function cancelAcceptedInvite(inviteID, invitees, organizerUID) {
  const userUID = localStorage.getItem("uid");

  try {
    await db
      .collection("users")
      .doc(userUID)
      .collection("acceptedInvites")
      .doc(inviteID)
      .delete();

    await db
      .collection("users")
      .doc(organizerUID)
      .collection("createdInvites")
      .doc(inviteID)
      .update({
        invitees: invitees + 1
      });
  } catch (e) {
    console.log(e.message);
  }
}

export async function increaseInvitees(inviteID, invitees) {
  const userUID = localStorage.getItem("uid");

  try {
    await db
      .collection("users")
      .doc(userUID)
      .collection("createdInvites")
      .doc(inviteID)
      .update({
        invitees: invitees + 1
      });
  } catch (e) {
    console.log(e.message);
  }
}

export async function decreaseInvitees(inviteID, invitees) {
  const userUID = localStorage.getItem("uid");

  try {
    await db
      .collection("users")
      .doc(userUID)
      .collection("createdInvites")
      .doc(inviteID)
      .update({
        invitees: invitees - 1
      });
  } catch (e) {
    console.log(e.message);
  }
}

//display invites

export async function getAllInvites(hometown) {
  const NOW = moment().toDate();
  try {
    const snapshot = await db
      .collectionGroup("createdInvites")
      .where("city", "==", hometown)
      .where("dateTime", ">", NOW)
      .orderBy("dateTime")
      .get();

    return snapshot.docs;
  } catch (e) {
    console.log(e.message);
  }
}

export async function getEligibleInvites(hometown) {
  const uid = localStorage.getItem("uid");

  try {
    const allInvites = await getAllInvites(hometown);

    return allInvites.filter((invite) => {
      return uid != invite.data().organizerUID && invite.data().invitees > 0;
    });
  } catch (e) {
    console.log(e.message);
  }
}

function convertTimeRange(dateRange, timeRange) {
  if (dateRange.length && timeRange.length) {
    let dateFrom = moment(dateRange[0], "DD/MM/YYYY");
    let timeFrom = moment(timeRange[0], "HH:mm");
    dateFrom = dateFrom.hour(timeFrom.hour()).minute(timeFrom.minute());

    let dateTo = moment(dateRange[1], "DD/MM/YYYY");
    let timeTo = moment(timeRange[1], "HH:mm");
    dateTo = dateTo.hour(timeTo.hour()).minute(timeTo.minute());

    return {
      dateTimeFrom: dateFrom.toDate(),
      dateTimeTo: dateTo.toDate(),
      justTime: false
    };
  } else if (dateRange.length) {
    let dateFrom = moment(dateRange[0], "DD/MM/YYYY").hour(0).minute(0);
    let dateTo = moment(dateRange[1], "DD/MM/YYYY").hour(23).minute(59);

    return {
      dateTimeFrom: dateFrom.toDate(),
      dateTimeTo: dateTo.toDate(),
      justTime: false
    };
  } else if (timeRange.length) {
    let timeFrom = moment(timeRange[0]).format("HH:mm");
    let timeTo = moment(timeRange[1]).format("HH:mm");

    return {
      timeFrom: timeFrom,
      timeTo: timeTo,
      justTime: true
    };
  } else {
    return null;
  }
}

export async function getFilteredInvites(
  hometown,
  neighbourhoods,
  dateRange,
  timeRange
) {
  try {
    const NOW = moment().toDate();
    const uid = localStorage.getItem("uid");

    let filteredInvites = db
      .collectionGroup("createdInvites")
      .where("city", "==", hometown)
      .where("dateTime", ">", NOW)
      .orderBy("dateTime");

    if (neighbourhoods.length) {
      filteredInvites = filteredInvites.where(
        "neighbourhood",
        "in",
        neighbourhoods
      );
    }

    const dateTimeRange = convertTimeRange(dateRange, timeRange);

    if (dateTimeRange) {
      if (!dateTimeRange.justTime) {
        filteredInvites = filteredInvites
          .where("dateTime", ">=", dateTimeRange.dateTimeFrom)
          .where("dateTime", "<=", dateTimeRange.dateTimeTo);

        return (await filteredInvites.get()).docs.filter((invite) => {
          return (
            invite.data().organizerUID !== uid && invite.data().invitees > 0
          );
        });
      } else {
        return (await filteredInvites.get()).docs.filter((invite) => {
          return (
            invite.data().organizerUID !== uid &&
            invite.data().invitees > 0 &&
            invite.data().displayTime > dateTimeRange.timeFrom &&
            invite.data().displayTime < dateTimeRange.timeTo
          );
        });
      }
    } else {
      return (await filteredInvites.get()).docs.filter((invite) => {
        return invite.data().organizerUID !== uid && invite.data().invitees > 0;
      });
    }
  } catch (e) {
    console.log(e.message);
  }
}

//accepted status - display invites

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

//profile page

export async function getActiveCreatedInvites(city) {
  const uid = localStorage.getItem("uid");
  const NOW = moment().toDate();
  try {
    const snapshot = await db
      .collection("users")
      .doc(uid)
      .collection("createdInvites")
      .where("city", "==", city)
      .where("dateTime", ">=", NOW)
      .get();

    return snapshot.docs;
  } catch (e) {
    console.log(e.message);
  }
}

export async function getExpiredCreatedInvites(city) {
  const uid = localStorage.getItem("uid");
  const NOW = moment().toDate();
  try {
    const snapshot = await db
      .collection("users")
      .doc(uid)
      .collection("createdInvites")
      .where("city", "==", city)
      .where("dateTime", "<", NOW)
      .get();

    return snapshot.docs;
  } catch (e) {
    console.log(e.message);
  }
}

export async function getActiveAcceptedInvites(city) {
  const uid = localStorage.getItem("uid");
  const NOW = moment().toDate();
  try {
    const acceptedInvitesIdentifiers = (await getAcceptedInvites(uid)).map(
      (acceptedInvite) => {
        return acceptedInvite.id;
      }
    );

    const expandedAcceptedInvites = await db
      .collectionGroup("createdInvites")
      .where("city", "==", city)
      .where("dateTime", ">", NOW)
      .get();

    return expandedAcceptedInvites.docs.filter((expandedAcceptedInvite) => {
      return acceptedInvitesIdentifiers.includes(expandedAcceptedInvite.id);
    });
  } catch (e) {
    console.log(e.message);
  }
}

export async function getExpiredAcceptedInvites(city) {
  const uid = localStorage.getItem("uid");
  const NOW = moment().toDate();
  try {
    const acceptedInvitesIdentifiers = (await getAcceptedInvites(uid)).map(
      (acceptedInvite) => {
        return acceptedInvite.id;
      }
    );

    const expandedAcceptedInvites = await db
      .collectionGroup("createdInvites")
      .where("city", "==", city)
      .where("dateTime", "<", NOW)
      .get();

    return expandedAcceptedInvites.docs.filter((expandedAcceptedInvite) => {
      return acceptedInvitesIdentifiers.includes(expandedAcceptedInvite.id);
    });
  } catch (e) {
    console.log(e.message);
  }
}
