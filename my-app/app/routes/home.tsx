import { useRef, useState } from "react";
import Header from "../components/Header";
import NoteForm from "../components/NoteForm";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import ThemeToggle from "../components/ThemeToggle";
import { useTheme } from "../context/ThemeContext";
import { useLocalStorage } from "../hooks/useLocalStorage";

type Note = {
  id: string | number;
  title: string;
  description: string;
};

export default function Home() {
  const [notes, setNotes] = useLocalStorage<Note[]>("notes", []);
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const [searchText, setSearchText] = useState("");

  const searchInputRef = useRef<HTMLInputElement>(null);
  const { theme } = useTheme();

  function handleAddNote(newNote: Note) {
    setNotes((prev: any) => [...prev, newNote]);
  }

  function handleDelete(id: string | number) {
    setNotes((prev: any[]) => prev.filter((note) => note.id !== id));
  }

  function handleEditStart(id: string | number) {
    const note = notes.find((note: { id: string | number; }) => note.id === id);

    if (note) {
      setEditingNote(note);
    }
  }

  function handleEditSave(updatedNote: Note) {
    setNotes((prev: any[]) =>
      prev.map((note: { id: string | number; }) =>
        note.id === updatedNote.id ? updatedNote : note
      )
    );

    setEditingNote(null);
  }

  function handleFocusSearch() {
    searchInputRef.current?.focus();
  }

  const normalizedSearch = searchText.toLowerCase();

  const filteredNotes = notes.filter(
    (note: { title: string; description: string; }) =>
      note.title.toLowerCase().includes(normalizedSearch) ||
      note.description.toLowerCase().includes(normalizedSearch)
  );

  return (
    <div className={theme}>
      <div className="max-w-3xl mx-auto p-6 min-h-screen dark:bg-gray-900 dark:text-white">
        <div className="flex justify-between items-center mb-4">
          <Header />
          <ThemeToggle />
        </div>

        <NoteForm onAddNote={handleAddNote} />

        <div className="flex gap-2 mt-6 items-start">
          <SearchBar
            ref={searchInputRef}
            searchText={searchText}
            onSearchChange={setSearchText}
          />

          <button
            type="button"
            onClick={handleFocusSearch}
            className="bg-gray-200 px-3 py-2 rounded whitespace-nowrap"
          >
            Focus Search
          </button>
        </div>

        <div className="mt-4">
          <NoteList
            notes={filteredNotes}
            onDelete={handleDelete}
            onEdit={handleEditStart}
            editingNote={editingNote}
            onEditSave={handleEditSave}
          />
        </div>

        <button
          type="button"
          onClick={() => setNotes([])}
          className="bg-red-100 text-red-700 px-3 py-1 rounded mt-4"
        >
          Clear All Notes
        </button>
      </div>
    </div>
  );
}
