import app from "./firebase.js";
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
    await auth.currentUser.updateProfile({ displayName: displayName });
  } catch (e) {
    setEmail("");
    setPassword("");
    alert(e.message);
  }
}

export async function login(email, password, setEmail, setPassword) {
  try {
    await auth.signInWithEmailAndPassword(email, password);
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
