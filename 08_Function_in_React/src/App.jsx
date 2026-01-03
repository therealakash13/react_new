export default function App() {
  function handleChange(val) {
    console.log(val);
  }
  return (
    <div>
      <input
        type="text"
        name="inputText"
        id="input_text"
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}
