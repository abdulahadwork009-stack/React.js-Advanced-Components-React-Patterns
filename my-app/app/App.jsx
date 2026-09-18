import { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import ThemeToggle from "./components/ThemeToggle";
import { useTheme } from "./context/ThemeContext";

function App() {
  const [notes, setNotes] = useState([]);
  const { theme } = useTheme();

  function handleAddNote(newNote) {
    setNotes((prev) => [...prev, newNote]);
  }

  function handleDelete(id) {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  }

  return (
    <div className={theme}>
      <div className="max-w-3xl mx-auto p-6 min-h-screen dark:bg-gray-900 dark:text-white">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Notes Manager</h1>
          <ThemeToggle />
        </div>

        <NoteForm onAddNote={handleAddNote} />

        <div className="mt-6">
          <NoteList
            notes={notes}
            onDelete={handleDelete}
            onEdit={() => {}}
          />
        </div>

        <button
          onClick={() => setNotes([])}
          className="bg-red-100 text-red-700 px-3 py-1 rounded mt-4"
        >
          Clear All Notes
        </button>
      </div>
    </div>
  );
}

export default App;
