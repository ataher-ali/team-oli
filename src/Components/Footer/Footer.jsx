import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="bg-white lg:grid lg:grid-cols-5">
  <div className="relative block h-32 lg:col-span-2 lg:h-full">
    <img
      src="https://cqsacademy.com/wp-content/uploads/2021/10/graphic-designer-job-description.jpg"
      alt=""
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>

  <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div>
        <p>
          <span className="text-xs uppercase tracking-wide text-gray-500"> Call us </span>

          <Link to="http://wa.me/+8801785809246" target='_blank' className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl">
          +8801785809246
          </Link>
          <Link to='mailto:graphicaloyagency@gmail.com' target='_blank' className="block text-base mx-2  text-gray-900 hover:opacity-75 ">
          graphicaloyagency@gmail.com
          </Link>
        </p>

        <ul className="mt-8 space-y-1 text-sm text-gray-700">
         
        </ul>

        <ul className="mt-8 flex gap-6">
          <li>
            <Link
              to="https://www.facebook.com/graphicaloy"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75"
            >
              <span className="sr-only">Facebook</span>

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
            </Link>
          </li>

          <li>
            <Link
              to="https://www.instagram.com/graphicaloy"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75"
            >
              <span className="sr-only">Instagram</span>

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </Link>
          </li>

          <li>
            <Link
              to="https://twitter.com/graphicaloy"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75"
            >
              <span className="sr-only">Twitter</span>

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </Link>
          </li>

          <li>
            <Link
              to="https://pin.it/6LAm1ISE6"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75"
            >
              <span className="sr-only">Pintrast </span>

                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" fill-rule="evenodd" clip-rule="evenodd"/></svg>                                                                                                                                                                                                                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                                                                                                                                                                                                                              </Link>
          </li>

          <li>
            <Link
              to="https://www.linkedin.com/company/graphicaloy/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75"
            >
              <span className="sr-only">Linkdin</span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></Link>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className="font-medium text-gray-900">Services</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <Link href="/Graphic_Design" className="text-gray-700 transition hover:opacity-75"> Graphic Design </Link>
            </li>

            <li>
              <Link to="/Digital_Marketing" className="text-gray-700 transition hover:opacity-75"> Digital Marketing </Link>
            </li>

            <li>
              <Link href="/Presentation_Design" className="text-gray-700 transition hover:opacity-75"> Presentation Design</Link>
            </li>

            <li>
              <Link href="/Web_Design" className="text-gray-700 transition hover:opacity-75"> Web Design </Link>
            </li>
            <li>
              <Link href="/Video_Editing" className="text-gray-700 transition hover:opacity-75"> Video Editing </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-gray-900">Company</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <Link to="/About" className="text-gray-700 transition hover:opacity-75"> About </Link>
            </li>

            <li>
              <Link to="/Team"  className="text-gray-700 transition hover:opacity-75"> Meet the Team </Link>
            </li>

            <li>
              <Link to="/Reviews" className="text-gray-700 transition hover:opacity-75"> Accounts Review </Link>
            </li>
            <li>
              <Link to="/Contact" className="text-gray-700 transition hover:opacity-75"> Contact </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-12 border-t border-gray-100 pt-12">
      <div className="sm:flex sm:items-center sm:justify-between">
        <ul className="flex flex-wrap gap-4 text-xs">
          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75"> Terms & Conditions </a>
          </li>

          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75"> Privacy Policy </a>
          </li>

          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75"> Cookies </a>
          </li>
        </ul>

        <p className="mt-8 text-xs text-gray-500 sm:mt-0">
          &copy; 2022. Company Name. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;
