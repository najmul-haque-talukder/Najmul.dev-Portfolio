import React, { useState } from 'react';
import { Link } from 'react-router';

const Header2 = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className="bg-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3">
        
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="text-white flex items-center font-bold text-2xl sm:text-3xl">
            <Link to={"/"}>
                <img src="/src/assets/najmuls.png" className="w-14 sm:w-20 cursor-pointer" />
                <p className='cursor-pointer'>Najmul.dev</p>
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex text-white items-center gap-8 text-lg">
            <Link to={"/"}><li>Home</li></Link>
            <Link to={"/about"}><li>About</li></Link>
            <Link to={"/contacts"}><li>Contacts</li></Link>
            <Link to={"/blog"}><li>Blog</li></Link>
            <Link to={"/projects"}><li>Projects</li></Link>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Menu */}
        {open && (
          <ul className="md:hidden text-white flex flex-col gap-4 mt-4 text-lg pb-4">
            <Link to={"/"} onClick={() => setOpen(false)}><li>Home</li></Link>
            <Link to={"/about"} onClick={() => setOpen(false)}><li>About</li></Link>
            <Link to={"/contacts"} onClick={() => setOpen(false)}><li>Contacts</li></Link>
            <Link to={"/blog"} onClick={() => setOpen(false)}><li>Blog</li></Link>
            <Link to={"/projects"} onClick={() => setOpen(false)}><li>Projects</li></Link>
          </ul>
        )}

      </div>
    </div>
  );
};

export default Header2;
