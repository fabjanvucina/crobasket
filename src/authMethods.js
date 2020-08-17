import app from "./firebase";
const auth = app.auth();

export async function register() {
  const name = document.getElementById("nameSignup").value;
  const surname = document.getElementById("surnameSignup").value;
  const email = document.getElementById("emailSignup").value;
  const password = document.getElementById("passwordSignup").value;

  const displayName = name + " " + surname;
  console.log(displayName);
  console.log(email, password);

  await auth
    .createUserWithEmailAndPassword(email, password)
    .then("Registration succesful")
    .catch((e) => {
      console.log(e.message);
    });

  await auth.currentUser.updateProfile({ displayName: displayName });
}

export async function login() {
  const email = document.getElementById("emailLogin").value;
  const password = document.getElementById("passwordLogin").value;
  console.log(email, password);

  auth
    .signInWithEmailAndPassword(email, password)
    .then("Login succesful")
    .catch((e) => {
      console.log(e.message);
    });
}

export async function logout() {
  console.log("User has been logged out");
  auth.signOut();
}

/* export async function getCurrentUser() {
  return auth.currentUser.displayName;
} */
