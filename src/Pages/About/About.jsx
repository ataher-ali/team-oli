import React from 'react';
import DocumentTitle from 'react-document-title';
import OurClients from '../../Components/HomeCompo/OurClients/OurClients';

const About = () => {
    return (
        <div className='pt-10 '>
            <DocumentTitle title='Graphicaloy | About'>

            </DocumentTitle>
            
            <div className='mx-2 md:mx-20 lg:mx-44 my-10'>

            
            <div className='md:flex'>
            <img className='w-1/2 m-4' src="https://i.ibb.co/tPHMLh6/graphic-designer-equipment-doodle-style-6997-3239.jpg" alt="" />
           <span>
           <h2 className='my-6 text-center font-bold text-4xl'>About</h2>
            <p className='text-justify text-xl font-extralight '>
                Graphicaloy provides industry-leading strategic, creative, and technological solutions to help you overcome business challenges and develop a successful brand. We design full-service solutions that meet all of your requirements.
                Outsourcing your social media design needs will save you time and money!
                We offer appealing, high-quality, and reasonably priced social media design and website building services to small marketing firms and startups!
                <br /> <br />
                Without social media graphic design, Print Design it is nearly impossible to expand on the internet!
                Concentrate on creating excellent and eye-catching graphic design for social media in order to attract your target client or industry.
                We will provide you with a complete social media graphic solution at an affordable price!!
                Undertake you want to do social media graphic design for your company?
            </p>
            </span> 
            </div>  
            </div>

            <OurClients></OurClients>
        </div>
    );
};

export default About;