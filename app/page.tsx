"use client"

import GeoLocation from "@/components/common/Location";
import MusicPlayer from "@/components/core/Music";

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
