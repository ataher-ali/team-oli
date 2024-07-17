import React from 'react';
import { MdMail } from "react-icons/md";
import { Link } from 'react-router-dom';
import Type from './Type/Type';
import { FaBehanceSquare, FaFacebookSquare, FaInfoCircle, FaLinkedin } from 'react-icons/fa';
import { RiTeamFill } from 'react-icons/ri';


const HeroSection = () => {
    return (
        <div className=' bg-gray-100 py-20 '>
                          <section className="relative    lg:px-40">
      {/* Background vector graphics */}
      {/* <img src={vectorGraphic1} alt="Vector Graphic 1" className="absolute top-0 left-0 h-64 w-64 transform translate-x-20 -translate-y-20 opacity-25" /> */}
      {/* <img src={vectorGraphic2} alt="Vector Graphic 2" className="absolute bottom-0 right-0 h-64 w-64 transform -translate-x-20 translate-y-20 opacity-25" /> */}
      
      <div className="container mx-auto px-4 relative ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="md:col-span-1">
            <img src={"https://shorturl.at/qKrwQ"} alt="Portfolio Hero" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:col-span-1">
            <div className="text-center md:text-left">
            <h3 className='font-bold text-2xl'>Hello, I'm</h3>
              <h2 className="text-7xl font-bold text-gray-800 mb-8"> Sah Oli Ullah</h2>

              <div className='h-10'>

                <Type/>
              </div>
              
              {/* <p className="text-lg text-gray-600 mb-12">Explore my work and skills.</p> */}
              <div className="flex justify-center gap-3 my-10 md:justify-start">

                <Link to="/about" className="bg-slate-900 w-fit flex justify-center items-center gap-2 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg">
                <FaInfoCircle />
                <span>About</span>
                </Link>

                <Link to="/about" className="border border-slate-900 flex items-center justify-center w-fit gap-2 hover:text-white hover:bg-slate-600 text-slate-800 font-bold py-3 px-6 rounded-lg shadow-lg">
                <RiTeamFill />
                <span> Meet Team</span>
                </Link>
              </div>
              <div className='m-4 gap-6 mt-8 flex items-center '>
                <Link to=""className='  hover:opacity-80' ><FaLinkedin size={36}/></Link>
                <Link to=""className='  hover:opacity-80' ><FaFacebookSquare size={36}/></Link>
                <Link to=""className='  hover:opacity-80' ><FaBehanceSquare size={36}/></Link>
                <Link to=""className='   hover:opacity-80' ><MdMail size={38}/></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default HeroSection;