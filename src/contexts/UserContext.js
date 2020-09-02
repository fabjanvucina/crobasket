import { createContext } from "react";

const UserContext = createContext([
  { isAuthenticated: false, displayName: "", phoneNumber: "", uid: "" }
]);

export default UserContext;
