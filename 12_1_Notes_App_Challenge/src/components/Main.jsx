import Card from "./Card";

export default function Main(props) {
  const notes = props.notes;

  return (
    <div className="p-6 bg-surface rounded-2xl flex-1 font-outfit overflow-y-auto">
      <div className="flex flex-col gap-3">
        {/* <h2 className="text-4xl font-semibold">Notes</h2> */}
        <ul className="note-nav gap-6 text-lg">
          <li>Today</li>
          <li>This Week</li>
          <li>This Month</li>
        </ul>
      </div>
      <div className="py-7 flex flex-wrap gap-7">
        {notes.map((note, idx) => (
          <Card
            key={idx}
            created={note.dateCreated}
            title={note.title}
            content={note.content}
            updated={note.timeLastUpdated}
          />
        ))}
      </div>
    </div>
  );
}
