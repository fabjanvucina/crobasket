import { createContext } from "react";

const UserContext = createContext([
  { isAuthenticated: false, displayName: "" }
]);

export default UserContext;
