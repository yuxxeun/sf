"use client"

import Clock from "@/components/core/Clock"
import ScreenSizeDetector from "@/components/core/ScreenDetect"

const Navigation = () => {
  return (
    <>
      <div className="p-5 text-md text-green-500 flex justify-between items-center">
        <Clock/>
        <ScreenSizeDetector/>
      </div>
    </>
  )
}

export default Navigation