import superHeroes from "../superhero.json";
import Card from "./components/Card";
export default function App() {
  return (
    <>
      <h1>Superhero Profiles({superHeroes.length})</h1>
      <div className="card-container">
        {superHeroes.map((hero) => (
          <Card hero={hero} key={hero.id} />
        ))}
      </div>
    </>
  );
}
