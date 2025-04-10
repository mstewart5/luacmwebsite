import { FaDiamond } from "react-icons/fa6";
const DiamondIcon = FaDiamond as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

export function DiamondList({ items }: { items: string[] | React.ReactNode[]}) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-2">
          <DiamondIcon className="text-blue-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
