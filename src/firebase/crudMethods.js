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

export async function addUser(name, surname, uid) {
  try {
    await db.collection("users").doc(uid).set({
      name: name,
      surname: surname
    });
  } catch (e) {
    console.log(e.message);
  }
}
