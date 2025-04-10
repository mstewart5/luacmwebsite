import WeeklyCalendar from "../../components/EventsPage/WeeklyCalendar";
import SpecialEvents from "../../components/EventsPage/SpecialEvents";
import EventGallery from "../../components/EventsPage/EventGallery";

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
