import { addUser, getUser } from "./crudMethods";
import app from "./firebase.js";
const auth = app.auth();

export async function register(
  name,
  surname,
  phoneNumber,
  email,
  password,
  setEmail,
  setPassword,
  setUser,
  history
) {
  const displayName = name + " " + surname;

  try {
    await auth.createUserWithEmailAndPassword(email, password);
    await addUser(name, surname, phoneNumber, auth.currentUser.uid);

    localStorage.setItem("isAuthenticated", true);
    localStorage.setItem("displayName", displayName);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("uid", auth.currentUser.uid);

    setUser({
      isAuthenticated: true,
      displayName: displayName,
      phoneNumber: phoneNumber,
      uid: auth.currentUser.uid
    });

    history.push("/gradovi");
  } catch (e) {
    setEmail("");
    setPassword("");
    alert(e.message);
  }
}

export async function login(
  email,
  password,
  setEmail,
  setPassword,
  setUser,
  history
) {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    const currUser = await getUser(auth.currentUser.uid);
    localStorage.setItem("isAuthenticated", true);
    localStorage.setItem("displayName", currUser.displayName);
    localStorage.setItem("phoneNumber", currUser.phoneNumber);
    localStorage.setItem("uid", currUser.uid);

    setUser({
      isAuthenticated: true,
      displayName: currUser.displayName,
      phoneNumber: currUser.phoneNumber,
      uid: currUser.uid
    });

    history.push("/gradovi");
  } catch (e) {
    setEmail("");
    setPassword("");
    alert(e.message);
  }
}

export async function logout() {
  try {
    await auth.signOut();
    console.log("User has been logged out");
  } catch (e) {
    alert(e.message);
  }
}
