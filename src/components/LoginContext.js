import { createContext } from "react";

const LoginContext = createContext([
  {
    isLoggedIn: false,
    displayName: "Prijavi se"
  },
  () => {}
]);

export default LoginContext;
