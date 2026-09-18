import { useState } from "react";

export default function NoteForm({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim() === "" || description.trim() === "") return;
    onAddNote({ id: Date.now(), title, description });
    setTitle("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-4 bg-white rounded-lg shadow dark:bg-gray-800">
      <input
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border rounded px-3 py-2"
      />
      <textarea
        placeholder="Note Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border rounded px-3 py-2"
      />
      <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700">
        Add Note
      </button>
    </form>
  );
}