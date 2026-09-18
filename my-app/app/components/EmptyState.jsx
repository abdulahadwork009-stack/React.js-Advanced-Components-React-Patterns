import Card from "./Card";

export default function EmptyState({ message = "No notes found." }) {
  return (
    <Card className="text-center text-slate-400 dark:text-slate-500 py-8">
      <p>{message}</p>
    </Card>
  );
}