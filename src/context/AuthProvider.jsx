import { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const { employeesData, adminData } = getLocalStorage();
    setUserData({ employeesData, adminData });
  }, []);
  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
