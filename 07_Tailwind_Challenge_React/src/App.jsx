import Section1 from "./components/Section_1/Section1";
import Section2 from "./components/Section_2/Section2";

export default function App() {
  const cardData = [
    {
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Satisfied",
      intro:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusamus libero esse, quod autem, omnis veniam illo rerum nemo officiis beatae laboriosam dignissimos temporibus veritatis pariatur maxime? Repellat, magni ut?",
    },
    {
      img: "https://images.unsplash.com/photo-1483389127117-b6a2102724ae?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Unsatisfied",
      intro:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio expedita dolore tenetur. Repudiandae voluptatem, aspernatur obcaecati ex exercitationem ducimus hic?",
    },
    {
      img: "https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Undeserved",
      intro:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsam officia nostrum ullam? Nesciunt impedit qui veniam modi repellat! Quasi dignissimos a labore quia praesentium.",
    },
    {
      img: "https://images.unsplash.com/photo-1581464647110-26e129ce2d02?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Reserved",
      intro:
        "Lorem quod natus, ea alias nobis cupiditate, omnis neque quae. Eligendi repellendus quis maiores dolor, voluptas consequuntur vero commodi optio repudiandae repellat.",
    },
  ];

  return (
    <div className="h-screen w-full font-inter">
      <Section1 />
      <Section2 cards={cardData} />
    </div>
  );
}
