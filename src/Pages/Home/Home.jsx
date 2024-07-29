import React from 'react';
import HeroSection from '../../Components/HomeCompo/HeroSection/HeroSection';
import OurClients from '../../Components/HomeCompo/OurClients/OurClients';
import Spatiality from '../../Components/HomeCompo/Spatiality/Spatiality';
import DocumentTitle from 'react-document-title';

const Home = () => {
    return (
        <>
        <DocumentTitle title='Oli Ullah'>
        </DocumentTitle>
        <div className=''>
            <HeroSection></HeroSection>
            <Spatiality></Spatiality>
            <OurClients></OurClients>

        </div>
        </>
    );
};

export default Home;