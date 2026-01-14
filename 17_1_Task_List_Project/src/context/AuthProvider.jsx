import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { getLocalStorage } from "../utils/LocalStorage";

export default function AuthProvider(props) {
  const [usersData, setUsersData] = useState(null);

  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    setUsersData({ employees, admin });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={usersData}>
        {props.children}
      </AuthContext.Provider>
    </div>
  );
}
