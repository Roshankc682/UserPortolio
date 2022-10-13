import React from 'react'
import { useRouter } from 'next/router'
import ReactTypingEffect from 'react-typing-effect';

import Skills from './skills/Skills'

const FirstSection = () => {
    let router = useRouter();
  return (
    <>
     <div className="grid items-center justify-center gap-4 p-4 bg-[#011627] md:grid-cols-2">

        <div className="mt-4 border-l-4 border-indigo-500 text-yellow-50">

            <h1 className="m-3 text-[20px] font-semibold font-permanent_marker">
            <ReactTypingEffect
                    speed={90}
                    text={["Hello Earthling !! 👽 ➡️ 🌌 ➡️ ", "MySelf Roshan kc"]}
                    cursorRenderer={cursor => <p>{cursor}</p>}
                    displayTextRenderer={(text, i) => {
                    return (
                        <h1>
                        {text.split('').map((char, i) => {
                            const key = `${i}`;
                            return (
                            <span
                                key={key}
                                style={i%3 === 0 ? { color: 'aqua'} : {}}
                            >{char}</span>
                            );
                        })}
                        </h1>
                    );
                    }}
                />
            </h1>

            <h1 className="m-3 font-semibold text-[24px] font-mono">
                I love to build amazing web apps.
            </h1>
            <p className="m-3 font-serif text-[24px]">
                I am a positive, enthusiastic and competent Web Developer
                who, over the years, has built up a diverse range of skills,
                qualities and attributes.
            </p>
            <p className="m-3 text-[25px] text-cyan-100 font-creep_cursive">
                A Passoniate Front-End and Back-End Developer
            </p>
            <div className="flex">
                <div>
                    <button
                        onClick={()=>{
                            router.push("/#contact")
                        }}
                        className="px-4 py-2 m-4 font-bold text-white bg-green-500 border-b-4 border-blue-700 rounded hover:bg-blue-400 hover:border-blue-500">
                            Work with Me
                    </button>
                </div>
                <div>
                <button
                    onClick={()=>{
                        router.push("/#project")
                    }}
                    className="px-4 py-2 m-4 font-bold text-white bg-gray-500 border-b-4 border-blue-700 rounded hover:bg--400 hover:border-blue-500">
                        See My Post Work
                    </button>
                </div>
            </div>
        </div>
        <div className="hidden mt-4 border-l-4 border-indigo-500 text-yellow-50 md:flex ml-[20%]">
        {/* <div className="mt-4 text-yellow-50 md:flex" style={{marginLeft:"20%"}}> */}
            <img  src="side_image.png" className="object-fill w-[60%] h-[60%]" alt="image of rosn"/>
            {/* <img className="rounded-2xl md:h-[50%]" src="https://media1.giphy.com/media/USV0ym3bVWQJJmNu3N/giphy.gif?cid=ecf05e479ixfti6kgdcefiufr24n3n77ak0rz5gnxbdh11wq&rid=giphy.gif&ct=g" alt="image of rosn"/> */}

            {/* <iframe src="https://giphy.com/embed/USV0ym3bVWQJJmNu3N" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> */}
        </div>
    </div>

        <div className="bg-[#011627] ">
            <Skills/>
        </div>

    </>
  )
}

export default FirstSection;