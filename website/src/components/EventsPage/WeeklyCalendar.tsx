'use client';
import { FaUsers, FaCode, FaGamepad, FaLaptopCode } from 'react-icons/fa';
const UserIcon = FaUsers as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
const CodeIcon = FaCode as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
const GamepadIcon = FaGamepad as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
const LaptopIcon = FaLaptopCode as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//for monthly recurring events be sure to have isMonthly: true, monthlyWeek: week#
const weeklyEvents = [
  { icon: <CodeIcon className="text-xl" />, 
    title: 'Coding Hangout', 
    description: 'Lets hangout while we work on projects, leetcode, or homework.', 
    day: 'Wednesday', time: '16:30', endTime: '18:00' 
  },
  // { icon: <FaGamepad className="text-xl" />, 
  //   title: 'Game Night', 
  //   description: 'we gamin', 
  //   day: 'Thursday', time: '17:00', endTime: '23:00', isMonthly: true, monthlyWeek: 1 
  // },
  { icon: <UserIcon className="text-xl" />, 
    title: 'General Meeting', 
    description: 'Monthly update and discussion.', 
    day: 'Thursday', time: '17:00', endTime: '18:00', isMonthly: true, monthlyWeek: 2 
  },
  { icon: <LaptopIcon className="text-xl" />, 
    title: 'Leetcode Practice', description: 'Algorithm problem solving sessions.', 
    day: 'Monday', time: '17:00', endTime: '18:00' 
  },
];

//test variable use 'yyyy-mm-dd' or leave it as Date(); to use current date
const STATIC_DATE = new Date();

const getMonthlyWeekOfDate = (date: Date) => {
  const targetDay = date.getDay();
  let weekCount = 0;
  for (let day = 1; day <= date.getDate(); day++) {
    const current = new Date(date.getFullYear(), date.getMonth(), day);
    if (current.getDay() === targetDay) weekCount++;
  }
  return weekCount;
};

const getCurrentWeek = () => {
  const startOfWeek = new Date(STATIC_DATE);
  startOfWeek.setDate(STATIC_DATE.getDate() - STATIC_DATE.getDay());

  return [...Array(7)].map((_, i) => {
    const d = new Date(startOfWeek);
    d.setDate(startOfWeek.getDate() + i);
    return {
      day: weekDays[i],
      date: d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
      fullDate: d,
    };
  });
};

const formatTime = (time24: string) => {
  const [hourStr, minute] = time24.split(":");
  const hour = parseInt(hourStr, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 || 12;
  return `${hour12}:${minute} ${ampm}`;
};

const getEventsForDay = (day: string, fullDate: Date) => {
  const monthlyWeek = getMonthlyWeekOfDate(fullDate);
  return weeklyEvents.filter(ev => ev.day === day && (!ev.isMonthly || ev.monthlyWeek === monthlyWeek)).sort((a, b) => a.time.localeCompare(b.time));
};

export default function WeeklyCalendar() {
  const week = getCurrentWeek();

  return (
    <section className="mb-12">
      <div className="w-full bg-black text-white py-4 px-6">
        <h2 className="text-2xl font-semibold">Weekly Calendar</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {week.map((dayObj, idx) => (
          <div key={idx} className="border rounded-lg p-4 bg-[#f2f2f2] shadow">
            <div className="font-bold text-lg mb-2">{dayObj.day} – {dayObj.date}</div>
            <div className="space-y-4">
              {getEventsForDay(dayObj.day, dayObj.fullDate).map((event, i) => (
                <div key={i} className="bg-[#f2f2f2]">
                  <div className="flex items-center gap-2 mb-1">
                    {event.icon}
                    <span className="font-bold">{event.title}</span>
                  </div>
                  <p className="text-sm">{event.description}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {formatTime(event.time)} - {event.endTime ? formatTime(event.endTime) : ''}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
