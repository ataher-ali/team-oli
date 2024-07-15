import React from 'react';
import { Link } from 'react-router-dom';

const BookMeeting = () => {
    return (
        <>
                            <div className="flex justify-center">
            <Link className="group my-2 relative inline-block focus:outline-none focus:ring" target='_blank' to="http://google.com">
              <span
                className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
              ></span>

              <span
                className="relative inline-block border-2 border-current px-8 py-3 text-sm font-semibold  uppercase tracking-widest text-black group-active:text-opacity-75"
              >

                Book a Meeting
              </span>
            </Link>
          </div>
        </>
    );
};

export default BookMeeting;