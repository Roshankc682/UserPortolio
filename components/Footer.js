import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="p-4 text-white shadow md:px-6 md:py-8 bg-[#011627]">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="https://www.linkedin.com/in/roshan-kc-261245164/" className="flex items-center mb-4 sm:mb-0">
                    <img src="favicon.ico" className="mr-3 h-8 rounded-lg" alt="Roshan_kc"/>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Roshan Kc</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#about" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    {/* <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li> */}
                    {/* <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                    </li> */}
                    <li>
                        <a href="#contact" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://roshankkc.com.np/" className="hover:underline">roshankkc.com.np</a>. All Rights Reserved.
            </span>
        </footer>

    </>
  )
}

export default Footer