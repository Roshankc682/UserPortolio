import React from 'react'
import {Programming_Languages, Front_End, Back_End, Infrastructure} from './skill_data'


const Skills = () => {
  return (
      <>
        <div className="flex text-center justify-evenly">
          <div className="mt-12">
          <div >
              <img src="processor.png"
                    className="w-[60px] h-[60px] inline-block"
              />
            </div>
            <div >
              <h2 className="text-gray-50 text-[30px] font-main_topics">
                Skills & Technologies
              </h2>
              </div>
              </div>
            </div>

            <div className="mt-6 flex w-[60%] m-[auto] text-white font-main_topics">
              <div className="w-[100%]">
                <p className="sm:text-3xl font-bold text-[25px]">Skills</p>
              </div>
            </div>
            <p className="text-[19px] text-white m-auto w-[60%] sm:text-[20px] p-3 font-skills_second_text">Programming Languages</p>
            <hr className="bg-slate-200 m-auto w-[57%]"></hr>
            <div className="grid grid-cols-2 m-auto w-[60%]">
            {Programming_Languages.map((language_data,index)=>{
                return (
                  <div key={index} className="p-3 m-4 text-white break-all bg-slate-800">
                  <div className="flex gap-4 ">
                        <img src="/badger.png" alt="badger" className="w-[25px] h-[25px] sm:h-[27px] sm:w-[27px] sm:rounded-md rounded-md"/>
                        <p className="font-serif sm:text-[19px] text-[17px]">{language_data.name}</p>
                      </div>
                        <span>
                          <div className="w-full h-1 mt-2 bg-gray-200">
                            <div className="h-1" style={{width:`${language_data.know}`,backgroundColor:`${language_data.know>="50%"?"green":"red"}`}}>
                            </div>
                          </div>
                        </span>
                    </div>
              )})}
            </div>

            <p className="text-[19px] text-white m-auto w-[60%] sm:text-[20px] p-3 font-skills_second_text">Front-End</p>
            <hr className="bg-slate-200 m-auto w-[57%]"></hr>
            <div className="grid grid-cols-2 m-auto w-[60%]">
              {Front_End.map((language_data,index)=>{
                return (
                  <div key={index} className="p-3 m-4 text-white break-all bg-slate-800 ">
                  <div className="flex gap-4 ">
                        <img src="/badger.png" alt="badger" className="w-[25px] h-[25px] sm:h-[27px] sm:w-[27px] sm:rounded-md rounded-md"/>
                        <p className="font-serif sm:text-[20px] text-[17px]">{language_data.name}</p>
                      </div>
                        <span>
                          <div className="w-full h-1 mt-2 bg-gray-200">
                            <div className="h-1" style={{width:`${language_data.know}`,backgroundColor:`${language_data.know>="50%"?"green":"red"}`}}>
                            </div>
                          </div>
                        </span>
                    </div>
              )})}
            </div>



            <p className="text-[19px] text-white m-auto w-[60%] sm:text-[20px] p-3 font-skills_second_text">Back-End</p>
            <hr className="bg-slate-200 m-auto w-[57%]"></hr>
            <div className="grid grid-cols-2 m-auto w-[60%]">
              {Back_End.map((language_data,index)=>{
                return (
                    <div key={index} className="p-3 m-4 text-white break-all bg-slate-800 ">
                      <div className="flex gap-4 ">
                        <img src="/badger.png" alt="badger" className="w-[25px] h-[25px] sm:h-[27px] sm:w-[27px] sm:rounded-md rounded-md"/>
                        <p className="font-serif sm:text-[20px] text-[17px]">{language_data.name}</p>
                      </div>
                        <span>
                          <div className="w-full h-1 mt-2 bg-gray-200">
                            <div className="h-1" style={{width:`${language_data.know}`,backgroundColor:`${language_data.know>="50%"?"green":"red"}`}}>
                            </div>
                          </div>
                        </span>
                    </div>
              )})}
            </div>

            <p className="text-[19px] text-white m-auto w-[60%] sm:text-[20px] p-3 font-skills_second_text">Infrastructure</p>
            <hr className="bg-slate-200 m-auto w-[57%]"></hr>
            <div className="grid grid-cols-2 m-auto w-[60%]">
              {Infrastructure.map((language_data,index)=>{
                return (
                    <div key={index} className="p-3 m-4 text-white break-all bg-slate-800 ">
                      <div className="flex gap-4 ">
                        <img src="/badger.png" alt="badger" className="w-[25px] h-[25px] sm:h-[27px] sm:w-[27px] sm:rounded-md rounded-md"/>
                        <p className="font-serif sm:text-[20px] text-[17px]">{language_data.name}</p>
                      </div>
                        <span>
                          <div className="w-full h-1 mt-2 bg-gray-200">
                            <div className="h-1" style={{width:`${language_data.know}`,backgroundColor:`${language_data.know>="50%"?"green":"red"}`}}>
                            </div>
                          </div>
                        </span>
                    </div>
              )})}
            </div>
      </>
  )
}

export default Skills