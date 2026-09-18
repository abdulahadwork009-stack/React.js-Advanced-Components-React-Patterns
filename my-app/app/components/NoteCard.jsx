import Card from "./Card";

export default function NoteCard({ note, onDelete, onEdit }) {
  return (
    <Card>
      <h3 className="font-semibold text-lg">{note.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{note.description}</p>
      <div className="flex gap-2 mt-2">
        <button onClick={() => onEdit(note.id)} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
          Edit
        </button>
        <button onClick={() => onDelete(note.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
          Delete
        </button>
      </div>
    </Card>
  );
}