import Image from "next/image";
import HeroBanner from "./components/HeroBanner";
import Description from "./components/Description";

export default function Home() {
  return (
        <>
          <div className="bg-white text-black p-6">
            <h1 className="text-4xl font-bold mb-6">Events</h1>
            <HeroBanner />
            <Description />
          </div>
        </>
  );
}
