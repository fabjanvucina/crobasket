import { navigate } from "@reach/router";
import app from "./firebase";
const auth = app.auth();

export async function register(name, surname, email, password) {
  const displayName = name.value + " " + surname.value;

  try {
    await auth.createUserWithEmailAndPassword(email.value, password.value);
    console.log("Registration successful");
    await auth.currentUser.updateProfile({ displayName: displayName });
    navigate("/");
  } catch (e) {
    email.value = "";
    password.value = "";
    alert(e.message);
  }
}

export async function login(email, password) {
  try {
    await auth.signInWithEmailAndPassword(email.value, password.value);
    console.log("Login successful");
    navigate("/");
  } catch (e) {
    email.value = "";
    password.value = "";
    alert(e.message);
  }
}

export async function logout() {
  console.log("User has been logged out");
  auth.signOut();
}
