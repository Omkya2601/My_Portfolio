export default function Tags({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((t) => (
        <li key={t} className="tag">{t}</li>
      ))}
    </ul>
  );
}
