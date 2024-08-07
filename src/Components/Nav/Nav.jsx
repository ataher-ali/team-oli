import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900  fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <nav>
        <div className=" mx-auto ">
          <div className="flex mx-auto gap-16 justify-center w-5/6  ">
            {/* Primary menu and logo */}
            
            <div className="flex items-center gap-16 my-2">
              {/* logo */}
              <div>
                <Link
                  to="/"
                  className="flex gap-1 font-bold text-gray-700 items-center "
                > 
                <img className="h-10" src="../../../public/Sah Oliullah fainal.png" alt="" />
                </Link>
              </div>
              {/* primary */}
              <div className="">
              <div className="hidden lg:flex items-center gap-8 ">
                
                <Link to='/Product'> <h1 className="text-lg hover:font-bold">Product </h1></Link>
                <Link to='/Service'> <h1 className="text-lg hover:font-bold">Service </h1></Link>
                <Link to="/Team_Member"> <h1 className="text-lg hover:font-bold"> Team Member </h1></Link>
                <Link to="/Archive"> <h1 className="text-lg hover:font-bold">Archive </h1></Link>
                <Link to='/About'> <h1 className="text-lg hover:font-bold">About </h1></Link>
                <Link to="/Contact"> <h1 className="text-lg hover:font-bold">Contact </h1></Link>
              </div>
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
          <div className="px-8 flex justify-center  text-xl">
            <div className="flex flex-col gap-8 items-center font-bold tracking-wider">
              <Link onClick={() => setToggleMenu()} className="mt-4" to='/'>Home</Link>
              <Link onClick={() => setToggleMenu()} to="/Product">Product</Link>
              <Link onClick={() => setToggleMenu()} to="/Service">Service</Link>
              <Link onClick={() => setToggleMenu()} to="/Team_Member">Team Member</Link>
              <Link onClick={() => setToggleMenu()} to="/Archive">Archive</Link>
              <Link onClick={() => setToggleMenu()} to='/About'>About</Link>
              <Link onClick={() => setToggleMenu()} to="/Contact">Contact</Link>
            </div>
          </div>
            
        </div>
      </nav>
    </div>
  );
}

export default Nav;