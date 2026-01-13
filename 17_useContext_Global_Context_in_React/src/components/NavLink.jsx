import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeDataContext";
import { Moon, Sun } from "./SVGComponents";

export default function NavLinks() {
  const [theme] = useContext(ThemeDataContext);
  return (
    <ul className="links">
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li className="svg-container">{theme === "dark" ? <Moon width={20} height={20} /> : <Sun width={20} height={20} />}</li>
    </ul>
  );
}
