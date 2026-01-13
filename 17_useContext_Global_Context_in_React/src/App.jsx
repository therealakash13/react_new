import { useContext } from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import { ThemeDataContext } from "./context/ThemeDataContext";

export default function App() {
  const [theme] = useContext(ThemeDataContext);
  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <Button />
    </div>
  );
}
