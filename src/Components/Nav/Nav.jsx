import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <nav>
        <div className=" mx-auto">
          <div className="flex mx-auto justify-between w-5/6 ">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-2">
              {/* logo */}
              <div>
                <Link
                  href="/"
                  className="flex gap-1 font-bold text-gray-700 items-center "
                >
                  <span>Graphicaloy.com</span>
                </Link>
              </div>
              {/* primary */}
              <div className="hidden lg:flex items-center gap-8 ">
                <Link to='/'> <h1 className="text-lg">Home </h1></Link>
                <Link to='/About'> <h1 className="text-lg">About </h1></Link>
                <Link to="/Services">
                <button id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" data-dropdown-trigger="hover" className=" w-fit m-0 p-0 pb-2  focus:ring-4 focus:outline-none focus:ring-blue-300   text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 " type="button" >
                  <span className="flex">
                  <h1 className="text-lg">Services   </h1>
                  <svg className="w-6" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z"/></svg>
                  </span>
                </button>
                </Link>

                <div id="dropdownDelay" className="z-10 top-10 hidden bg-white divide-y divide-gray-100  rounded-lg shadow w-44 dark:bg-gray-700">
                  <ul className=" text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
                    <li>
                      <Link to="/Graphic_Design" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Graphic Design</Link>
                    </li>
                    <li>
                      <Link to="/Digital_Marketing" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Digital Marketing</Link>
                    </li>
                    <li>
                      <Link to="/Presentation_Design" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Presentation Design</Link>
                    </li>
                    <li>
                      <Link to="/Textile_Graphic_Design" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Textile Graphic Design</Link>
                    </li>
                    <li>
                      <Link to="/Textile_Graphic_Design" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Textile Graphic Design</Link>
                    </li>
                    <li>
                      <Link to="/Web_design" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Web Design</Link>
                    </li>
                    <li>
                      <Link to="/Video_Editing" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Video Editing</Link>
                    </li>
                  </ul>
                </div>
                <Link to="/Portfolio"> <h1 className="text-lg">Portfolio </h1></Link>
                <Link to="/Pricing"> <h1 className="text-lg">Pricing </h1></Link>
                <Link to="/Contact"> <h1 className="text-lg">Contact </h1></Link>

              </div>
            </div>

            {/* secondary */}
            <div className="flex gap-6">

              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  {
                    toggleMenu ?
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                          <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>

                      </div> :
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                          <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                        </svg>


                      </div>
                  }
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${!toggleMenu ? "h-0" : "h-full"
            }`}
        >
          <div className="px-8 flex justify-center text-xl">
            <div className="flex flex-col gap-8  font-bold tracking-wider">
              <Link onClick={() => setToggleMenu()} className="mt-4" to='/'>Home</Link>
              <Link onClick={() => setToggleMenu()} to='/About'>About</Link>
              <Link onClick={() => setToggleMenu()} to="/Services">Services</Link>
              <Link onClick={() => setToggleMenu()} to="/Portfolio">Portfolio</Link>
              <Link onClick={() => setToggleMenu()} to="/Pricing">Pricing</Link>
              <Link onClick={() => setToggleMenu()} to="/Contact">Contact</Link>
            </div>
          </div>
          <div className="flex justify-center">
            <Link className="group relative inline-block focus:outline-none focus:ring" target='_blank' to="http://google.com">
              <span
                className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
              ></span>

              <span
                className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
              >

                Book a Meeting
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
