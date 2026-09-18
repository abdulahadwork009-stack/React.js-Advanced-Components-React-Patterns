import { useState } from "react";

export default function NoteForm({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (title.trim() === "" || description.trim() === "") {
      setError("Title and description cannot be empty.");
      return;
    }

    onAddNote({ id: Date.now(), title, description });
    setTitle("");
    setDescription("");
    setError("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 p-5 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700"
    >
      <input
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) => { setTitle(e.target.value); setError(""); }}
        className="border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <textarea
        placeholder="Note Description"
        value={description}
        onChange={(e) => { setDescription(e.target.value); setError(""); }}
        className="border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      {error && (
        <p className="text-sm text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/30 px-3 py-2 rounded-lg">
          {error}
        </p>
      )}
      <button
        type="submit"
        className="bg-indigo-600 text-white rounded-lg px-4 py-2 font-medium hover:bg-indigo-700 transition-colors"
      >
        Add Note
      </button>
    </form>
  );
}