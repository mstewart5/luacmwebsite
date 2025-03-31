'use client';
import { FaUsers } from 'react-icons/fa';

//use for events that happen less then once per month
const specialEvents = [
  {
    icon: <FaUsers className="text-xl" />,
    title: 'ACM Banquet',
    description: 'Lamar University CICE Building Room 113 A & B, 5091 Rolfe Christopher DR, Beaumont, TX 77710. Tickets $5 off until March.',
    datetime: 'Friday April 11, 2025 at 5:00 PM'
  }
];

export default function SpecialEvents() {
  return (
    <section className="mb-12">
      <div className="w-full bg-black text-white py-4 px-6">
        <h2 className="text-2xl font-semibold">Special Events</h2>
      </div>
      {specialEvents.map((event, index) => (
        <div key={index} className="border rounded-lg p-4 bg-[#f2f2f2] shadow-md mb-4">
          <div className="flex items-center gap-2 mb-2">
            {event.icon}
            <span className="text-xl font-bold">{event.title}</span>
          </div>
          <p className="text-sm">{event.description}</p>
          <p className="text-xs text-gray-500 mt-1">{event.datetime}</p>
        </div>
      ))}
    </section>
  );
}
