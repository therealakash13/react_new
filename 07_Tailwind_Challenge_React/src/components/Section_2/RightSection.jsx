import Card from "./Card";

export default function RightSection(props) {
  return (
    <div id="overflown" className="col-span-4 p-4 flex flex-nowrap justify-start items-center gap-6 overflow-x-auto">
      {props.cards.map((card, idx) => {
        return (
          <Card key={idx} id={idx} img={card.img} tag={card.tag} intro={card.intro} />
        );
      })}
    </div>
  );
}
