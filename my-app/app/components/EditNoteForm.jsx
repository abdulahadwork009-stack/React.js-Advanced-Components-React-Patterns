import { useState } from "react";
import Card from "./Card";

export default function EditNoteForm({ note, onSave }) {
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim() === "" || description.trim() === "") return;
    onSave({ ...note, title, description });
  }

  return (
    <Card>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input value={title} onChange={(e) => setTitle(e.target.value)} className="border rounded px-3 py-2" />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="border rounded px-3 py-2" />
        <button type="submit" className="bg-green-600 text-white rounded px-4 py-2 hover:bg-green-700">
          Save Changes
        </button>
      </form>
    </Card>
  );
}