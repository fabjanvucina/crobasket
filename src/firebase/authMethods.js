import app from "./firebase.js";
const auth = app.auth();

export async function register(
  name,
  surname,
  phoneNumber,
  email,
  password,
  setEmail,
  setPassword
) {
  const displayName = name + " " + surname;

  try {
    await auth.createUserWithEmailAndPassword(email, password);
    await auth.currentUser.updateProfile({
      displayName: displayName,
      phoneNumber: phoneNumber
    });
    localStorage.setItem("isAuthenticated", true);
    localStorage.setItem("displayName", auth.currentUser.displayName);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("uid", auth.currentUser.uid);
    return auth.currentUser.uid;
  } catch (e) {
    setEmail("");
    setPassword("");
    alert(e.message);
  }
}

export async function login(email, password, setEmail, setPassword) {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    localStorage.setItem("isAuthenticated", true);
    localStorage.setItem("displayName", auth.currentUser.displayName);
    console.log(
      "auth.currentUser.displayName in login crudMethods is",
      auth.currentUser.displayName
    );
    localStorage.setItem("phoneNumber", auth.currentUser.phoneNumber);
    localStorage.setItem("uid", auth.currentUser.uid);
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
