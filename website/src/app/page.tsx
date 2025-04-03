import Image from "next/image";
import HeroBanner from "./components/HeroBanner";
import Description from "./components/Description";

export default function Home() {
  return (
        <>
          <div className="bg-white text-black p-6">
            <HeroBanner />
            <Description />
          </div>
        </>
  );
}
