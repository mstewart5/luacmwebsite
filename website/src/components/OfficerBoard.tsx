import { Officer } from "@/types/index";

/**
 * Component for displaying officer headshots in a grid.
 */
export function OfficerBoard({ officers }: { officers: Officer[] }) {
  return (
    <div className="ma-w-7xl mx-auto mt-2 mb-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 gap-4 p-4">
      {officers.map(({ name, position, positionDesc, image }, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
          <img src={image} alt={`${name}'s photo`} className="max-h-full m-auto h-64 object-cover rounded-[50%] mb-2" />
          <h3 className="font-semibold text-xl">{name}</h3>
          <p className="text-gray-600 text-lg group relative inline-block underline duration-300">
            {position}
            <span className="absolute hidden group-hover:flex left-1/2 -translate-x-1/2 -top-2 top-full mt-2 w-64 px-2 py-1 bg-gray-700 rounded-lg text-center text-white font-medium">{positionDesc}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
