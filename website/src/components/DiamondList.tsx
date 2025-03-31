import { FaDiamond } from "react-icons/fa6";

export function DiamondList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-2">
          <FaDiamond className="text-blue-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
