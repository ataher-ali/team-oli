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
                <Link to="/Services">Services</Link>
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
                  xx
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
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
              <Link to='/'>Home</Link>
              <Link to='/About'>About</Link>
              <Link to="/Services">Services</Link>
              <Link to="/Portfolio">Portfolio</Link>
              <Link to="/Pricing">Pricing</Link>
              <Link to="/Contact">Contact</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
