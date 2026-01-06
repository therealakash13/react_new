import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import Section1 from "./components/Sections/Section1/Section1";
import Section2 from "./components/Sections/Section2/Section2";

export default function App() {
  return (
    <div className="max-w-11/12 mx-auto w-full h-screen flex flex-col gap-6 font-lexend">
      <Navbar />
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
}
