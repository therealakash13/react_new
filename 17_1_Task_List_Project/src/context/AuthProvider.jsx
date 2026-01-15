import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { getLocalStorage } from "../utils/LocalStorage";

export default function AuthProvider(props) {
  const [user, setUser] = useState(null);

  const loginHandler = (email, password) => {
    const { employees, admin } = getLocalStorage();

    const adminData = admin.find(
      (a) => a.email === email && a.password === password
    );

    if (adminData) {
      return setUser({ role: "admin", data: adminData });
    }

    const employee = employees.find(
      (e) => e.email === email && e.password === password
    );

    if (employee) {
      return setUser({ role: "employee", data: employee });
    }

    alert("Incorrect email or password");
  };

  const logoutHandler = () => {
    setUser(null);
    return;
  };

  return (
    <div>
      <AuthContext.Provider value={{ user, loginHandler, logoutHandler }}>
        {props.children}
      </AuthContext.Provider>
    </div>
  );
}
