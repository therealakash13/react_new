import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import Section1 from "./components/Sections/Section1/Section1";
import Section2 from "./components/Sections/Section2/Section2";
import Section3 from "./components/Sections/Section3/Section3";
import Section4 from "./components/Sections/Section4/Section4";
import Section5 from "./components/Sections/Section5";

export default function App() {
  const blogs = [
    {
      image:
        "https://images.unsplash.com/photo-1683381660400-d43b7a1cffda?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Uncategorized",
      heading: "Security Solutions",
      subHeading:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, tempore?",
      date: "26 Jan",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1674935666597-bae13a70fd69?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Categorized",
      heading: "Monitor the workplace",
      subHeading:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, tempore?",
      date: "14 Feb",
    },
    {
      image:
        "https://images.unsplash.com/photo-1515432085503-cabf2fbcd690?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Uncategorized",
      heading: "Why choose us",
      subHeading:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, tempore?",
      date: "15 Aug",
    },
  ];

  return (
    <div className="max-w-11/12 mx-auto w-full h-screen flex flex-col gap-6 font-lexend">
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 blogs={blogs} />
      <Section5 />
      <Footer />
    </div>
  );
}
