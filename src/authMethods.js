import { navigate } from "@reach/router";
import app from "./firebase";
const auth = app.auth();

export async function register() {
  const name = document.getElementById("nameSignup");
  const surname = document.getElementById("surnameSignup");
  const email = document.getElementById("emailSignup");
  const password = document.getElementById("passwordSignup");

  const displayName = name.value + " " + surname.value;

  await auth
    .createUserWithEmailAndPassword(email.value, password.value)
    .then(() => {
      console.log("Registration successful");
      navigate("/");
    })
    .catch((e) => {
      email.value = "";
      password.value = "";
      alert(e.message);
    });

  await auth.currentUser.updateProfile({ displayName: displayName });
}

export async function login() {
  const email = document.getElementById("emailLogin");
  const password = document.getElementById("passwordLogin");

  await auth
    .signInWithEmailAndPassword(email.value, password.value)
    .then(() => {
      console.log("login successful");
      navigate("/");
    })
    .catch((e) => {
      email.value = "";
      password.value = "";
      alert(e.message);
    });
}

export async function logout() {
  console.log("User has been logged out");
  auth.signOut();
}
