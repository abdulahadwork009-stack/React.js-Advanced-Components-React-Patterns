import { useRef, useState } from "react";
import Header from "../components/Header";
import NoteForm from "../components/NoteForm";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import ThemeToggle from "../components/ThemeToggle";
import { useTheme } from "../context/ThemeContext";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function Home() {
  const [notes, setNotes] = useLocalStorage("notes", []);
  const [editingNote, setEditingNote] = useState(null);
  const [searchText, setSearchText] = useState("");
  const searchInputRef = useRef(null);
  const { theme } = useTheme();

  function handleAddNote(newNote) {
    setNotes((prev) => [...prev, newNote]);
  }

  function handleDelete(id) {
    setNotes((prev) => prev.filter((n) => n.id !== id));
    if (editingNote && editingNote.id === id) setEditingNote(null);
  }

  function handleEditStart(id) {
    const note = notes.find((n) => n.id === id);
    setEditingNote(note);
  }

  function handleEditSave(updatedNote) {
    setNotes((prev) =>
      prev.map((n) => (n.id === updatedNote.id ? updatedNote : n))
    );
    setEditingNote(null);
  }

  function handleEditCancel() {
    setEditingNote(null);
  }

  function handleFocusSearch() {
    searchInputRef.current.focus();
  }

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchText.toLowerCase()) ||
      note.description.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className={theme}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="max-w-3xl mx-auto p-6">
          <div className="flex justify-between items-center mb-6">
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
              onClick={handleFocusSearch}
              className="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 px-3 py-2 rounded-lg whitespace-nowrap hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              Focus Search
            </button>
          </div>

          <div className="mt-6">
            <NoteList
              notes={filteredNotes}
              onDelete={handleDelete}
              onEdit={handleEditStart}
              editingNote={editingNote}
              onEditSave={handleEditSave}
              onEditCancel={handleEditCancel}
            />
          </div>

          <button
            onClick={() => setNotes([])}
            className="mt-6 text-sm text-rose-600 dark:text-rose-400 hover:underline"
          >
            Clear All Notes
          </button>
        </div>
      </div>
    </div>
  );
}