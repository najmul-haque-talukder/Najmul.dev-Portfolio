import { Link } from "react-router"
import DarkVeil from "../Components/DarkVeli"
import Header from "../Components/Header"
import Section2 from "./PagesComponent/Section2"
import Section3 from "./PagesComponent/Section3"
import Section4 from "./PagesComponent/Section4"
import Section5 from "./PagesComponent/Section5"



const Home = () => {
  return (
    <div>
        
    <div className="-translate-y-25 relative h-screen" style={{ width: '100%', minHeight: '100vh', position: 'relative' }}>
        <DarkVeil />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
    </div>


    








    <div className="absolute top-0 mx-auto w-full">
        <div>
            <div>
                <div className='flex items-center justify-between px-50 py-3 '>
                    <div className='text-white flex items-center font-bold text-3xl'>
                        <img src="/src/assets/najmuls.png" className='w-20' />
                        <p>Najmul.dev</p>
                    </div>

                    <div>
                        <ul className='text-white flex items-center gap-8'>
                            <Link to={"/"}><li>Home</li></Link>
                            <Link to={"/about"}><li>About</li></Link>
                            <Link to={"/contacts"}><li>Contacts</li></Link>
                            <Link to={"/blog"}><li>Blog</li></Link>
                            <Link to={"/projects"}><li>Projects</li></Link>         
                        </ul>
                    </div>

                    
                </div>
            </div>
        </div>
    </div>




    <div className="absolute top-50 right-1/2 translate-x-1/2 text-white ">
        <div className="flex gap-2 items-center justify-center text-center text-white pb-5 ">
            <p className="px-4 py-1 rounded-full text-blue-400 bg-blue-950">Hello</p>
            <p>I tell stories through code. Come see my work.</p>
        </div>



        <div>
            <div>
                <div className="flex gap-4 items-center justify-center">
                    <img src="/src/assets/naj-dp.jpg" className="rounded-full w-20 border-5 border-white" />

                    <div>
                        <p className="font-semibold text-3xl">Najmul Haque Talukder</p>
                        <p className="">Frontend Developer</p>
                    </div>

                </div>
                <p className="pt-5 text-center text-gray-200">I’m Najmul Haque Talukder — a Frontend Developer who builds fast, scalable, and visually modern web interfaces using React, Next.js, JavaScript, Tailwind CSS, and Redux. I focus on crafting clean UI, smooth user experiences, and reusable component architectures. My goal is to create modern, high-performance websites that look great and feel effortless to use.</p>
            </div>
        </div>

        <div className="text-white flex gap-5 pt-10 items-center justify-center">
            <button className="bg-white text-black px-5 py-2 rounded-full hover:scale-101 duration-500 hover:bg-white/80"><a href="https://drive.google.com/drive/folders/1TcZZQ2z7IuSq-csqez64Xd9uveK9hH9d?usp=sharing" target="_blank">Download Resume  <i class="fa-solid fa-arrow-up-right-from-square"></i></a></button>
            <button className="border border-gray-200 rounded-full px-5 py-2"><a href="https://github.com/najmul-haque-talukder" target="_blank">Find out More  <i class="fa-solid fa-arrow-up-right-from-square"></i> </a></button>
        </div>


    </div>

    </div>
  )
}

export default Home