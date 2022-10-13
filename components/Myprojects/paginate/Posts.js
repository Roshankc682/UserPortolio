import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
        <div className="container ite mx-auto md:px-12">
            <div className="flex flex-wrap -mx-1 lg:-mx-4  ">

                {posts.map((data,index)=>{

                return (
                        <div key={index} className="w-[100%] m-[10px] sm:p-[2px] sm:m-0 p-0  px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 ">
                        <article className="overflow-hidden rounded-lg shadow-lg bg-gray-600 h-[100%]">

                            {/* <img alt="Placeholder" className="block w-full h-auto" src="https://picsum.photos/600/400/?random"/> */}

                            <header className="flex items-center justify-between p-2 leading-tight md:p-4">
                                <h1 className="p-2  text-[#13cce8] no-underline font-mono font-bold hover:text-red-500  hover:text-[31px] text-[30px]">
                                        {data.title}
                                </h1>
                                {/* <p className="text-sm text-grey-darker text-white">
                                    11/1/19
                                </p> */}
                            </header>
                            <p className="text-center m-2 text-stone-50 font-combo_cursive font-bold text-[20px]">
                                    {data.description}
                            </p>

                            <div className="flex items-center text-center leading-tight md:p-4">
                                <div className="text-white hover:underline  font-bold text-[15px]">
                                        <a   href={data.githubUrl} className="bg-gray-400 m-2 p-1 rounded-lg">
                                            Github
                                        </a>
                                </div>
                                <div className="text-teal-400 hover:underline  font-bold text-[20px]">
                                        {data.sampleUrl?
                                            <a href={data.sampleUrl} className="bg-gray-400  m-2 p-1 rounded-lg">
                                                sampleUrl
                                            </a>
                                        :
                                            null
                                        }
                                </div>
                            </div>
                            <div>
                                <div className="text-blue-200 bg-slate-600 m-2 font-semibold text-[17px]">
                                        <p className="p-1">
                                        {data.skills + " "}
                                        </p>
                                </div>
                            </div>


                            <footer className="flex items-center leading-none md:p-4">
                                    <img alt="Placeholder" className="block rounded-full w-[20px] h-[20px]" src="https://avatars.githubusercontent.com/u/25656200?s=400&u=2c18c86007d2242548502e2f4285e04789584b4f&v=4"/>
                                    <div className="ml-2 text-sm">
                                        <a href="https://github.com/Roshankc682" className="m-2 flex items-center text-white no-underline hover:underline font-bold">
                                            {data.name}
                                        </a>
                                    </div>
                            </footer>
                        </article>
                        </div>
                    )
                })
            }
            </div>
        </div>

        </>
  );
};

export default Posts;