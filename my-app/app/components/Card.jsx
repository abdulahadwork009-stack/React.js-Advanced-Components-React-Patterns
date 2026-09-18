export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-lg shadow p-4 dark:bg-gray-800 ${className}`}>
      {children}
    </div>
  );
}