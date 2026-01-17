import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { getLocalStorage } from "../utils/LocalStorage";

export default function AuthProvider(props) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const sort = user?.sortBy ?? "default";

  const [employeesData, setEmployeesData] = useState(() => {
    const storedEmployees = localStorage.getItem("employees");
    return storedEmployees ? JSON.parse(storedEmployees) : null;
  });

  const loginHandler = (email, password) => {
    const { employees, admin } = getLocalStorage();

    const adminData = admin.find(
      (a) => a.email === email && a.password === password
    );

    if (adminData) {
      const userData = { role: "admin", data: adminData };
      setUser(userData);
      localStorage.setItem("loggedInUser", JSON.stringify(userData));
      return;
    }

    const employeeData = employees.find(
      (e) => e.email === email && e.password === password
    );

    if (employeeData) {
      const userData = { role: "employee", data: employeeData, sortBy: sort };
      setUser(userData);
      localStorage.setItem("loggedInUser", JSON.stringify(userData));
      return;
    }

    alert("Incorrect email or password");
  };

  const logoutHandler = () => {
    setUser(null);
    localStorage.removeItem("loggedInUser");
    return;
  };

  const changeSort = (value) => {
    setUser((prev) => ({ ...prev, sortBy: value }));
  };

  useEffect(() => {
    if (!user) return;
    localStorage.setItem("loggedInUser", JSON.stringify(user));
  }, [user]);

  return (
    <div>
      <AuthContext.Provider
        value={{
          user,
          loginHandler,
          logoutHandler,
          employeesData,
          setEmployeesData,
          changeSort,
        }}
      >
        {props.children}
      </AuthContext.Provider>
    </div>
  );
}

// Modify, Delete and Per task handlers like accept, decline task, appeal removal and more