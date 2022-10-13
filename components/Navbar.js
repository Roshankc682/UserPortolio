import {useState,useEffect} from 'react'
import { FaBars,FaCompressAlt } from 'react-icons/fa';
import Link from 'next/link'
import { useRouter } from "next/router";

const NavBar = () => {

	const [navbar,setnavbar] = useState(false);
	const [path,setpath] = useState("/");

    const router = useRouter();
	let url = [
		{name:"Home",link:""},
		{name:"Project",link:"#project"},
		{name:"Contact",link:"#contact"},
	]
	useEffect(()=>{
		setpath(router.asPath)
	})

	return (
			<>
			<div className="flex items-center justify-between p-1 bg-gray-700 shadow-xl">
			  <div>
			    <ul>
			      <li>
					<Link href="/">
			          <img src="https://avatars.githubusercontent.com/u/25656200?s=400&u=2c18c86007d2242548502e2f4285e04789584b4f&v=4" alt="profile_data" className="h-16 ml-3 rounded-full"/>
					</Link>
			      </li>
			    </ul>
			  </div>
			  <div>
			    <ul className="decoration-none gap-20 text-[16px] m-4  hidden sm:flex">
					{url?.length>0
					?
						url.map((item,index)=>{
                            // console.log("Router path : "+router.asPath)
                            // console.log("Link item : " +item.link)
							return (
								<li key={index} className={`${path == "/"+item.link ? "bg-teal-500 p-2 rounded-r-lg" : ""} text-white  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 `}>
									<Link href={item.link}>
										<a href={item.link}>{item.name}</a>
									</Link>
								</li>
							)
						})
					:
						<p className="text-white">Loading Menu...</p>
					}
			    </ul>
				<ul
					onClick={()=>{
						setnavbar(!navbar)
					}}
					className="flex decoration-none sm:hidden">
			        <li>
						{(navbar)
						?
							<FaCompressAlt className="text-3xl text-white"/>
						:
							<FaBars className="text-3xl text-white"/>
						}
			        </li>
			    </ul>
			  </div>
			</div>
			<div className={`${navbar?"flex justify-center":"-translate-x-full"} transform absolute z-[100] w-[100%] h-[100%] flex justify-center duration-500 bg-gray-700`}>
				<ul className="decoration-none font-extrabold text-[16px]  sm:hidden text-lg ">
					{url?.length>0
					?
						url.map((item,index)=>{
							return (
								<li key={index} className={`${path == "/"+item.link ? "bg-teal-500 p-2 rounded-r-lg" : ""} text-white hover:text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 m-6`}>
									<Link href={item.link}>
										<a href={item.link}>{item.name}</a>
									</Link>
								</li>
							)
						})
					:
						<p className="text-white">Loading Menu...</p>
					}
					</ul>
			</div>
		</>
	)
}


export default NavBar;