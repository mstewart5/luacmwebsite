import WeeklyCalendar from "../../components/WeeklyCalendar";
import SpecialEvents from "../../components/SpecialEvents";
import EventGallery from "../../components/EventGallery";


export default function EventsPage() {
  return (
    <>
      
      <div className="bg-white text-black p-6">
        <h1 className="text-4xl font-bold mb-6">Events</h1>
        <WeeklyCalendar />
        <SpecialEvents />
        <EventGallery />
      </div>
    </>
  );
}
