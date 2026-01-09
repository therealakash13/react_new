import { useState } from "react";
import { Close, ColorCircle } from "../assets/SVGComponents";

export default function AddNoteModal(props) {
  const modalState = props.modalState;
  const [modalColor, setModalColor] = useState("hsl(240, 6%, 16%)");
  //   const [activeColor,setActiveColor] = useState()
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [accent, setAccent] = useState("");

  const colorOptions = [
    "#26262b",
    "#18181b",
    "#387567",
    "#c3a622",
    "#e9560c",
    "#605463",
    "#ebebeb",
    "#c91d81",
  ];

  const handleColorChange = (color) => {
    setModalColor(color);
    setAccent(color);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title && !content) alert("Title or Content field cant be empty");
    props.handleData({
      title,
      content,
      dateCreated: new Date().toISOString(),
      timeLastUpdated: new Date().toISOString(),
      accent,
    });
    setTitle("");
    setContent("");
    props.handleModal();
  };

  const handleClose = () => {
    props.handleModal();
  };

  return (
    <div
      className={`modal ${
        modalState ? "block" : "hidden"
      } h-full w-full font-outfit relative backdrop-blur-xs bg-opacity-10`}
    >
      <div
        style={{ backgroundColor: modalColor }}
        className="flex items-center justify-center w-fit h-fit border border-border inner-modal px-7 py-5 rounded-2xl"
      >
        <Close
          className="icon absolute right-2.5 top-2.5 cursor-pointer"
          onClick={handleClose}
        />
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl">Add Note</h1>
          <input
            type="text"
            placeholder="Title"
            className="text-2xl bg-secondary text-bg border-0 outline-0 px-4 py-1 rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="bg-secondary border-0 outline-0 rounded-md text-bg px-4 py-1"
            placeholder="Note content..."
            rows={10}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="flex justify-between pt-4 items-center">
            <div className="flex justify-center gap-2">
              {colorOptions.map((color, idx) => {
                return (
                  <div
                    key={idx}
                    className="w-6 h-6 rounded-full cursor-pointer"
                    onClick={() => handleColorChange(color)}
                  >
                    <ColorCircle fill={color} />
                  </div>
                );
              })}
            </div>
            <button
              className="bg-accent px-5 py-2 rounded-md font-semibold text-xl w-fit cursor-pointer"
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
