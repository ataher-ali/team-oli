import React from 'react';

const Home = () => {
    return (
        <div>
              <section className="relative bg-gray-100 py-20">
      {/* Background vector graphics */}
      {/* <img src={vectorGraphic1} alt="Vector Graphic 1" className="absolute top-0 left-0 h-64 w-64 transform translate-x-20 -translate-y-20 opacity-25" /> */}
      {/* <img src={vectorGraphic2} alt="Vector Graphic 2" className="absolute bottom-0 right-0 h-64 w-64 transform -translate-x-20 translate-y-20 opacity-25" /> */}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="md:col-span-1">
            <img src={"https://shorturl.at/qKrwQ"} alt="Portfolio Hero" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:col-span-1">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Welcome to My Portfolio</h2>
              <p className="text-lg text-gray-600 mb-12">Explore my work and skills.</p>
              <div className="flex justify-center md:justify-start">
                <a href="#projects" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg">View Projects</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default Home;