"use client"

import Clock from "../core/Clock"
import ScreenSizeDetector from "../core/ScreenDetect"

const Navigation = () => {
  return (
    <>
      <div className="p-5 text-green-500 flex justify-between items-center">
        <Clock/>
        <ScreenSizeDetector/>
      </div>
    </>
  )
}

export default Navigation