import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="app z-10">
      <nav>
        <div className="max-w-7xl mx-auto">
          <div className="flex mx-auto justify-between w-5/6 ">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-12">
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
              <div className="hidden lg:flex gap-8 ">
                <Link to='/'>Home</Link>
                <Link to='/About'>About</Link>
                <a href="/#Services">Services</a>
                <Link to="/Portfolio">Portfolio</Link>
                <Link to="/Pricing">Pricing</Link>
                <Link to="/Contact">Contact</Link>

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
              <Link onClick={() => setToggleMenu()} to="#Services">Services</Link>
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
