import { Officer } from "@/types/";
import Tooltip from "@/components/Tooltip";

/**
 * Component for displaying officer headshots in a grid.
 *
 * 1 column on mobile screens
 * 2 columns on small screens
 * 3 columns on medium screens and above
 */
export function OfficerBoard({ officers }: { officers: Officer[] }) {
  return (
    <div className="max-w-7xl mx-auto mt-2 mb-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 p-4">
      {officers.map(({ name, position, positionDesc, image }, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
          <img src={image} alt={`${name}'s photo`} className="max-h-full m-auto h-64 object-cover rounded-[50%] mb-2" />
          <h3 className="font-semibold text-xl text-center">{name}</h3>
          <Tooltip text={positionDesc} className="w-full">
            <p className="text-gray-600 text-lg text-center mx-auto block underline duration-300">
              {position}
            </p>
          </Tooltip>
        </div>
      ))}
    </div>
  );
}
