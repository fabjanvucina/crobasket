import { navigate } from "@reach/router";
import app from "./firebase";
const auth = app.auth();

export async function register(
  name,
  surname,
  email,
  password,
  setEmail,
  setPassword
) {
  const displayName = name + " " + surname;

  try {
    await auth.createUserWithEmailAndPassword(email, password);
    console.log("Registration successful");
    await auth.currentUser.updateProfile({ displayName: displayName });
    navigate("/");
  } catch (e) {
    setEmail("");
    setPassword("");
    alert(e.message);
  }
}

export async function login(email, password, setEmail, setPassword) {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    console.log("Login successful");
    navigate("/");
  } catch (e) {
    setEmail("");
    setPassword("");
    alert(e.message);
  }
}

export async function logout() {
  console.log("User has been logged out");
  auth.signOut();
}
