import Card from "./Card";

export default function NoteCard({ note, onDelete, onEdit }) {
  return (
    <Card>
      <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-100">{note.title}</h3>
      <p className="text-slate-500 dark:text-slate-300 mt-1">{note.description}</p>
      <div className="flex gap-2 mt-3">
        <button
          onClick={() => onEdit(note.id)}
          className="bg-amber-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-amber-600 transition-colors"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(note.id)}
          className="bg-rose-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-rose-600 transition-colors"
        >
          Delete
        </button>
      </div>
    </Card>
  );
}