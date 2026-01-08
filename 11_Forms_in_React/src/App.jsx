export default function App() {
  const handleForm = (e) => {
    e.preventDefault();
    console.log("Form Submitted...");
  };

  return (
    <>
      <div className="main">
        <form onSubmit={handleForm}>
          <input type="text" />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
