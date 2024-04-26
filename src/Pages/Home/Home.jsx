import React from 'react';
import HeroCompo from '../../Components/Home Compo/HeroCompo';
import HomeTestimonial from '../../Components/Home Compo/HomeTestimonial';
import HomeAbout from '../../Components/Home Compo/HomeAbout';
import HomeServices from '../../Components/Home Compo/HomeServices';
import DocumentTitle from 'react-document-title';

const Home = () => {
    return (
        <div>
            <DocumentTitle title='Graphicaloy'>
                
            </DocumentTitle>

            <HeroCompo></HeroCompo>
            <HomeServices></HomeServices>
            <div className='lg:mx-40 md:mx-24'>
                <HomeAbout></HomeAbout>
            </div>
            <HomeTestimonial></HomeTestimonial>
        </div>
    );
};

export default Home;