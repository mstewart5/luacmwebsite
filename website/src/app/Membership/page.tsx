import JoinFAQ from "../components/MembershipPage/JoinFAQ";
import JoinSection from "../components/MembershipPage/JoinSection";

export default function MembershipPage() {
    return (
    <>
      <div className="bg-white text-black p-6">
        <h1 className="text-4xl font-bold mb-6">Events</h1>
        <JoinSection />
        <JoinFAQ />
      </div>
    </>
    );
  }