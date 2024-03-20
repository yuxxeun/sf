"use client"

import GeoLocation from "@/components/common/Location";
import Clock from "@/components/core/Clock";
import MusicPlayer from "@/components/core/Music";
import ScreenWidthDetector from "@/components/core/ScreenDetect";

const Home = () => {
  return (
    <>
      <div className="text-center">
          <MusicPlayer/>
          <GeoLocation />
      </div>
    </>
  );
}

export default Home
