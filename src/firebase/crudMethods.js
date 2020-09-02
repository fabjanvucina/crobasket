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
    await db.collection("users").doc(uid).set({
      name: name,
      surname: surname,
      phoneNumber: phoneNumber
    });
  } catch (e) {
    console.log(e.message);
  }
}

export async function createInvite(
  hometown,
  neighbourhood,
  invitees,
  date,
  timeSlot,
  phoneNumber,
  uid
) {
  try {
    await db.collection("cities").doc(hometown).collection("invites").add({
      neighbourhood: neighbourhood,
      invitees: invitees,
      date: date,
      timeSlot: timeSlot,
      phoneNumber: phoneNumber,
      uid: uid
    });
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

export async function getTimeSlots() {
  let slots = [];
  let hour = 6;
  for (; hour < 10; hour++) {
    slots.push("0" + hour + ":" + "00", "0" + hour + ":" + "30");
  }
  for (; hour < 23; hour++) {
    slots.push(hour + ":" + "00", hour + ":" + "30");
  }
  return slots;
}
