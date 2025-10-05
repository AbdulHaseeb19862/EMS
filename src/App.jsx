import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const [loginUserData, SetLoginUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loginUser = localStorage.getItem("loginUser");
    if (loginUser) {
      const parsedUser = JSON.parse(loginUser);
      setUser(parsedUser.role);
      if (parsedUser.role === "employee") {
        SetLoginUserData(parsedUser.data);
      }
    }
  }, []);
  function handleLogin(email, password) {
    if (email === "admin@gmail.com" && Number(password) === 123) {
      setUser("admin");
      localStorage.setItem("loginUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employeesData.find(
        (e) => e.email === email && e.password === password
      );

      if (employee) {
        setUser("employee");
        SetLoginUserData(employee);

        localStorage.setItem(
          "loginUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        console.log("invalid credentials");
      }
    } else {
      console.log("invalid credentials");
    }
  }

  return (
    <div>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard />
      ) : user === "employee" ? (
        <EmployeeDashboard data={loginUserData} />
      ) : null}
    </div>
  );
}

export default App;
