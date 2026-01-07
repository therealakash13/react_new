import BlogArticle from "./BlogArticle";
import Card from "./Card";
import LearnMore from "./LearnMore";

export default function Section4(props) {
  const cardData = props.blogs;

  return (
    <div className="flex flex-col my-10">
      <LearnMore />
      <BlogArticle />
      <div className="flex w-full justify-between my-3 gap-2">
        {cardData.map((card, idx) => (
          <Card
            key={idx}
            image={card.image}
            heading={card.heading}
            subHeading={card.subHeading}
            tag={card.tag}
            date={card.date}
          />
        ))}
      </div>
    </div>
  );
}
