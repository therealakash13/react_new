import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeDataContext";

export default function Button() {
  const [theme, setTheme] = useContext(ThemeDataContext);

  const toggle = () => {
    if (theme === "dark") return setTheme("light");
    return setTheme("dark");
  };

  return (
    <button className="btn" onClick={toggle}>
      Change Theme
    </button>
  );
}
