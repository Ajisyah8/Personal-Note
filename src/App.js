import "./App.css";
import { useState } from "react";
import { getInitialData } from "./main";

function App() {
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [notes, setNotes] = useState(getInitialData());
  const [state, setState] = useState({
    title: "",
    note: "",
    id: Math.random() * 10,
  });

  const handleDelete = (id, fromArchive) => {
    if (fromArchive) {
      const leftArchivedNotes = archivedNotes.filter((note) => note.id !== id);
      setArchivedNotes(leftArchivedNotes);
    } else {
      const leftNotes = notes.filter((note) => note.id !== id);
      setNotes(leftNotes);
    }
  };

  const handleArchive = (id) => {
    const noteToArchiveIndex = notes.findIndex((note) => note.id === id);

    if (noteToArchiveIndex !== -1) {
      const noteToArchive = notes[noteToArchiveIndex];
      setArchivedNotes([...archivedNotes, noteToArchive]);
      setNotes((prevNotes) => {
        const updatedNotes = [...prevNotes];
        updatedNotes.splice(noteToArchiveIndex, 1);
        return updatedNotes;
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "title" && value.length > 50) {
      return;
    }

    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.title.length > 50) {
      alert("Judul harus memiliki 50 karakter atau kurang.");
      return;
    }

    setNotes([...notes, state]);
    setState({
      title: "",
      note: "",
    });
  };

  const moveFromArchiveToNotes = (id) => {
    const noteToMoveIndex = archivedNotes.findIndex((note) => note.id === id);
    if (noteToMoveIndex !== -1) {
      const noteToMove = archivedNotes[noteToMoveIndex];
      setNotes([...notes, noteToMove]);
      setArchivedNotes((prevNotes) => {
        const updatedArchivedNotes = [...prevNotes];
        updatedArchivedNotes.splice(noteToMoveIndex, 1);
        return updatedArchivedNotes;
      });
    }
  };

  return (
    <div className="App">
      <h1 className="text-center text-5xl p-5">Personal Note</h1>
      <div className="create-note w-[400px] mx-auto">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="title (max 50 characters)"
            name="title"
            className="border-2 border-blue-200 p-2 mb-2"
            onChange={handleChange}
            value={state.title}
            required
          />
          <textarea
            name="note"
            id=""
            cols="30"
            rows="5"
            placeholder=""
            className="border-2 border-blue-200 p-2"
            onChange={handleChange}
            value={state.note}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 px-5 py-3 text-white mt-4"
          >
            Add Note
          </button>
        </form>
      </div>

      <div className="notes-container border-t-2 border-blue-300 m-10 flex flex-wrap">
        {notes.length > 0 ? (
          notes.map((note, i) => {
            return (
              <div
                className="note bg-white mt-5 mr-5 w-[300px] p-4 py-10 relative"
                key={i}
              >
                <button
                  className="delete-note absolute right-2 top-0 font-bold text-2xl text-red-500"
                  onClick={() => handleDelete(note.id, false)}
                >
                  x
                </button>
                <h3 className="font-bold text-1xl pb-2">{note.title}</h3>
                <p>{note.note}</p>

                <button
                  className="archive-note absolute left-2 top-2 font-bold text-1xl text-blue-500 ml-2"
                  onClick={() => handleArchive(note.id)}
                >
                  Archive
                </button>
              </div>
            );
          })
        ) : (
          <p className="py-5">No notes available.</p>
        )}
      </div>

      <div className="archived-notes-container">
        <h2 className="text-2xl text-blue-500 mb-4 ml-10">Archive Note</h2>
        {archivedNotes.length > 0 ? (
          archivedNotes.map((note, i) => (
            <div className="archived-note bg-white mt-5 ml-10 w-[300px] p-4 py-10 relative" key={i}>
              <button
                className="delete-note absolute right-2 top-0 font-bold text-2xl text-red-500"
                onClick={() => handleDelete(note.id, true)}
              >
                x
              </button>
              <h3 className="font-bold text-1xl pb-2">{note.title}</h3>
              <p>{note.note}</p>

              <button
                className="move-note absolute left-2 bottom-2 font-bold text-1xl text-blue-500 ml-2"
                onClick={() => moveFromArchiveToNotes(note.id)}
              >
                Pindahkan
              </button>
            </div>
          ))
        ) : (
          <p className="py-5 ml-10">No archived notes available.</p>
        )}
      </div>
    </div>
  );
}

export default App;
