import JoinFAQ from "../components/MembershipPage/JoinFAQ";
import JoinSection from "../components/MembershipPage/JoinSection";

export default function MembershipPage() {
    return (
    <>
      <div className="bg-white text-black">
        <JoinSection />
        <JoinFAQ />
      </div>
    </>
    );
  }