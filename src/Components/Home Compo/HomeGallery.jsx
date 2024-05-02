import React from 'react';
import { Link } from 'react-router-dom';

const HomeGallery = () => {
    return (
        <div className='sm:mx-4 p-4'>
                        <h2 className="my-4 md:my-6 text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
       Our  
       <span className='ms-2 text-yellow-500'>
         Projects
       </span>
    </h2>
            <Link target='_blank' to="/">

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/4397b6183097475.6539617bcad64.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt=""/>
    </div>
</div>

            </Link>

            <div className=' w-100 flex justify-center'>

                        <Link className=" my-3 md:my-10 group relative inline-block focus:outline-none focus:ring" target='_blank' to="https://www.behance.net/graphicaloy">
                            <span
                                className="absolute inset-0 translate-x-0 translate-y-0 rounded-lg bg-yellow-300 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"
                            ></span>

                            <span
                                className=" flex justify-center relative align-middle border-2 border-current rounded-lg px-8 py-3 text-sm font-bold uppercase tracking-widest"
                            >
                                <span> More</span>

                                 <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className=" mt-1 ms-2 size-4 rtl:rotate-180"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                            </span>
                        </Link>
                    </div>
        </div>
    );
};

export default HomeGallery;
