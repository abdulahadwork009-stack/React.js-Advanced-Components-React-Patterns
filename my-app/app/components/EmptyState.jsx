import Card from "./Card";

export default function EmptyState({ message = "No notes found." }) {
  return (
    <Card className="text-center text-gray-400">
      <p>{message}</p>
    </Card>
  );
}