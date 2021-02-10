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
