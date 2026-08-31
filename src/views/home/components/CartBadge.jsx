export default function CartBadge({ count }) {
  if (!count || count <= 0) return null;

  return (
    <div className="flex items-center justify-center w-7 h-7 bg-primary text-black text-xs font-bold rounded-full">
      {count}
    </div>
  );
}