import { createContext } from "react";

const UserContext = createContext([
  { isAuthenticated: false, displayName: "", uid: "" }
]);

export default UserContext;
