import { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import FirstSection from '../components/FirstSection'
import MyProject from '../components/Myprojects/MyProject'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

// import Paginatetest from '../components/Myprojects/paginate/Paginate_Data'

const Home = () => {
  // const [divblack, setdivblack] = useState("")
  // useEffect(() => {
  // }, [])

  // const set_div_black = () => {
  //   setdivblack("black")
  // }
  return (
    <>
    {/* <div classNameName=''> */}
    <Head>
        <link
           rel="preconnect" href="https://fonts.googleapis.com"
        />
        <link
           rel="preconnect" href="https://fonts.gstatic.com"
        />
        <link
           href="https://fonts.googleapis.com/css2?family=Creepster&display=swap" rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Creepster&family=Permanent+Marker&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Changa&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Kanit:ital@1&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Combo&display=swap" rel="stylesheet"></link>
        <title>Roshan kc | Portfolio</title>
    </Head>
    <div id="">
        <Navbar/>
    </div>
    <div id="intro" className="bg-[#011627] ">
        <FirstSection/>
    </div>
    <div id="project" >
        <MyProject/>
    </div>
    <div id="contact">
        <Contact/>
    </div>
    <div id="footer">
        <Footer/>
    </div>
    </>
  )
}

export default Home
