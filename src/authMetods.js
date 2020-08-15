import app from "./firebase";
const auth = app.auth();

export async function signup() {
  /* const name = document.getElementById("nameSignup").value;
    const surname = document.getElementById("surnameSignup").value; */
  const email = document.getElementById("emailSignup").value;
  const password = document.getElementById("passwordSignup").value;
  console.log(email, password);

  const promise = auth.createUserWithEmailAndPassword(email, password);
  promise.catch((e) => console.log(e.message));
}
