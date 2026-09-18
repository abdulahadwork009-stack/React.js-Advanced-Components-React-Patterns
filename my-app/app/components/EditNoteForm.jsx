import { useState } from "react";
import Card from "./Card";

export default function EditNoteForm({ note, onSave, onCancel }) {
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim() === "" || description.trim() === "") {
      setError("Title and description cannot be empty.");
      return;
    }
    onSave({ ...note, title, description });
  }

  return (
    <Card className="ring-2 ring-indigo-400 dark:ring-indigo-500">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          value={title}
          onChange={(e) => { setTitle(e.target.value); setError(""); }}
          className="border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <textarea
          value={description}
          onChange={(e) => { setDescription(e.target.value); setError(""); }}
          className="border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        {error && (
          <p className="text-sm text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/30 px-3 py-2 rounded-lg">
            {error}
          </p>
        )}
        <div className="flex gap-2 mt-1">
          <button
            type="submit"
            className="flex-1 bg-emerald-600 text-white rounded-lg px-4 py-2 font-medium hover:bg-emerald-700 transition-colors"
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-100 rounded-lg px-4 py-2 font-medium hover:bg-slate-300 dark:hover:bg-slate-500 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </Card>
  );
}