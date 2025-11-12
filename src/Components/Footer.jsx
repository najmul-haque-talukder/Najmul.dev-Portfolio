import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <div className='text-white bg-black'>
      <div className='px-5 sm:px-10 md:px-20 py-10'>
        <div className='flex flex-col md:flex-row md:justify-between md:items-start gap-10 border-b border-gray-700 pb-5'>

          {/* Logo & About */}
          <div className='flex-1'>
            <div className='flex items-center gap-3'>
              <img src="/public/najmuls-min.png" className='w-16 sm:w-20' />
              <p className='text-2xl sm:text-3xl font-bold'>Najmul.dev</p>
            </div>

            <p className='text-gray-200 w-full sm:w-80 mt-3 pb-3'>
              Coding, designing, and creating websites that feel alive and approachable.
            </p>

            <a
              href="https://www.linkedin.com/in/najmul-haque-talukder/"
              target="_blank"
              className="inline-block bg-white text-black px-5 py-2 rounded-full hover:scale-105 duration-500 hover:bg-white/80"
            >
              Let's Connect <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>

          {/* Socials */}
          <div className='flex-1'>
            <p className='font-semibold text-xl sm:text-2xl pb-2'>Socials</p>
            <ul className='space-y-1'>
              <li className='hover:text-yellow-300 duration-500'><a href="https://www.facebook.com/najmul.9341/">Facebook</a></li>
              <li className='hover:text-yellow-300 duration-500'><a href="https://www.instagram.com/najmul_exits/">Instagram</a></li>
              <li className='hover:text-yellow-300 duration-500'><a href="https://www.linkedin.com/in/najmul-haque-talukder/">Linkedin</a></li>
              <li className='hover:text-yellow-300 duration-500'><a href="https://github.com/najmul-haque-talukder">Github</a></li>
              <li className='hover:text-yellow-300 duration-500'><a href="https://x.com/najmul_41">X</a></li>
              <li className='hover:text-yellow-300 duration-500'><a href="https://www.behance.net/robiulahsan">Behance</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className='flex-1'>
            <p className='font-semibold text-xl sm:text-2xl pb-2'>Quick Links</p>
            <ul className='space-y-1'>
              <Link to="/"><li className='hover:text-yellow-300 duration-500'>Home</li></Link>
              <Link to="/about"><li className='hover:text-yellow-300 duration-500'>About</li></Link>
              <Link to="/contacts"><li className='hover:text-yellow-300 duration-500'>Contacts</li></Link>
              <Link to="/blog"><li className='hover:text-yellow-300 duration-500'>Blog</li></Link>
              <Link to="/projects"><li className='hover:text-yellow-300 duration-500'>Projects</li></Link>
            </ul>
          </div>

          {/* Quick Contacts */}
          <div className='flex-1'>
            <p className='font-semibold text-xl sm:text-2xl pb-2'>Quick Contacts</p>
            <ul className='space-y-1'>
              <li className='hover:text-yellow-300 duration-500'>Location: <span className='font-semibold'>Rampura, Dhaka</span></li>
              <li className='hover:text-yellow-300 duration-500'>Email: <span className='font-semibold'>talukderrobiulhasan@gmail.com</span></li>
              <li className='hover:text-yellow-300 duration-500'>Phone: <span className='font-semibold'>+880161103945</span></li>
            </ul>
          </div>

        </div>

        <p className='text-center text-gray-300 pt-5 text-sm sm:text-base'>
          All Rights & Reversed by &copy; Najmul H. Talukder
        </p>
      </div>
    </div>
  )
}

export default Footer
