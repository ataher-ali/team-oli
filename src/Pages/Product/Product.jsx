import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div className='mt-20 mx4 min-h-min lg:mx-40'>
            Product
            <div className='grid sm:grid-cols-1 gap-4 md:grid-cols-3'>
                    <Link to={"/"} >
                    <div className='bg-amber-400 m-2  p-4 rounded-lg h-60'>
                            <h2 className='text-4xl my-20 text-center m-2'>
                                Course
                            </h2>
                    </div>
                    </Link>

                    <Link to={"/"}>
                    <div className='bg-blue-500 m-2  p-4 rounded-lg h-60'>
                            <h2 className='text-4xl my-20 text-center m-2'>
                                E-book
                            </h2>
                    </div>
                    </Link>
                    <Link to={"/"}>
                    <div className='bg-deep-orange-200 m-2  p-4 rounded-lg h-60'>
                            <h2 className='text-4xl my-20 text-center m-2'>
                                Chui Moi
                            </h2>
                    </div>
                    </Link>
                
            </div>
        </div>
    );
};

export default Product;