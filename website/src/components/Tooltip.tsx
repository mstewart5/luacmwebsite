import { ReactNode } from "react";

export enum TooltipPosition {
  TOP = "top",
  BOTTOM = "bottom",
  LEFT = "left",
  RIGHT = "right",
  CENTER = "center",
}

interface TooltipProps {
  text: string;
  position?: TooltipPosition;
  children: ReactNode;
  className?: string; 
}

/* Example:
<Tooltip text="Opens to the right" position={TooltipPosition.RIGHT}>
  <span className="p-2 bg-blue-500 text-white rounded cursor-pointer">Hover me</span>
</Tooltip>
*/

export default function Tooltip({ text, position = TooltipPosition.TOP, children }: TooltipProps) {
  const positionClasses = {
    [TooltipPosition.TOP]: "left-1/2 -translate-x-1/2 bottom-full mb-2",
    [TooltipPosition.BOTTOM]: "left-1/2 -translate-x-1/2 top-full mt-2",
    [TooltipPosition.LEFT]: "right-full mr-2 top-1/2 -translate-y-1/2",
    [TooltipPosition.RIGHT]: "left-full ml-2 top-1/2 -translate-y-1/2",
    [TooltipPosition.CENTER]: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  return (
    <div className="relative inline-flex w-full group">
      {children}
      <span className={`absolute hidden group-hover:flex px-2 py-1 bg-gray-700 rounded-lg text-center text-white font-medium z-10 ${positionClasses[position]}`}>
        {text}
      </span>
    </div>
  );
}
