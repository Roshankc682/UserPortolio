import React from 'react'
import Pojectcard from './Pojectcard'

const MyProject = () => {
  return (
    <>
        <div className="bg-[#011627] text-center w-[100%] text-white font-semibold font-permanent_marker">
            <p
              className="font-permanent_marker text-[30px]"
              >{"</>"}</p>
            <p
              className="font-permanent_marker text-[30px]"
              >
                Apps I{"'"}ve Built
            </p>
        </div>
        <div className="bg-[#011627]">
              <Pojectcard />
        </div>
    </>
  )
}

export default MyProject