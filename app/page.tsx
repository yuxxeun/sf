"use client"

import BarcodeCard from "@/components/common/BarcodeCard";
import GeoLocation from "@/components/common/Location";
import MusicPlayer from "@/components/core/Music";

const Home = () => {
  return (
    <>
      <div className="text-center">
          <MusicPlayer/>
          <GeoLocation />
          <BarcodeCard/>
      </div>
    </>
  );
}

export default Home
