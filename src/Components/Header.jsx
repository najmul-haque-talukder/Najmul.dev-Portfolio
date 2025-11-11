import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div className='bg-black'>
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
  )
}

export default Header