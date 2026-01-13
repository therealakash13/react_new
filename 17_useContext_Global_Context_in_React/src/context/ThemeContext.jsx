import { useState } from "react";
import { ThemeDataContext } from "./ThemeDataContext";

export default function ThemeContext(props) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeDataContext.Provider value={[theme, setTheme]}>
      {props.children}
    </ThemeDataContext.Provider>
  );
}
