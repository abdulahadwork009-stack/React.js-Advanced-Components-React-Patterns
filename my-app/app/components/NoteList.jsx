import NoteCard from "./NoteCard";
import EditNoteForm from "./EditNoteForm";
import EmptyState from "./EmptyState";

export default function NoteList({ notes, onDelete, onEdit, editingNote, onEditSave, onEditCancel }) {
  if (notes.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {notes.map((note) =>
        editingNote && editingNote.id === note.id ? (
          <EditNoteForm key={note.id} note={note} onSave={onEditSave} onCancel={onEditCancel} />
        ) : (
          <NoteCard key={note.id} note={note} onDelete={onDelete} onEdit={onEdit} />
        )
      )}
    </div>
  );
}