import app from "./firebase.js";
const db = app.firestore();

export async function getCities() {
  try {
    let snapshot = [];
    snapshot = await db.collection("cities").get();
    console.log("Fetched cities");
    return snapshot.docs;
  } catch (e) {
    console.log(e.message);
  }
}
