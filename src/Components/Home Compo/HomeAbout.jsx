import React from 'react';
import { Link } from 'react-router-dom';

const HomeAbout = () => {
    return (
        <div>
            <section>
                <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                        <div className="relative z-10 lg:py-16">
                            <div className="relative h-64 sm:h-80 lg:h-full">
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="relative flex items-center bg-yellow-50">
                            <span
                                className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-yellow-50"
                            ></span>

                            <div className="p-8 sm:p-16 lg:p-24">
                                <h2 className="text-2xl font-bold sm:text-3xl">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.
                                </h2>

                                <p className="mt-4 text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est
                                    esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam
                                    architecto eius quis quibusdam fugiat dicta.
                                </p>

                                <Link className=" my-5 group relative inline-block focus:outline-none focus:ring" to="/About">
                                    <span
                                        className="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"
                                    ></span>

                                    <span
                                        className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest"
                                    >
                                        Know More
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeAbout;