import React from 'react';
import HeroCompo from '../../Components/Home Compo/HeroCompo';
import HomeTestimonial from '../../Components/Home Compo/HomeTestimonial';
import HomeAbout from '../../Components/Home Compo/HomeAbout';
import HomeServices from '../../Components/Home Compo/HomeServices';
import DocumentTitle from 'react-document-title';
import HomeGallery from '../../Components/Home Compo/HomeGallery';
import HomeFaq from '../../Components/Home Compo/HomeFaq';
import HeroCompo2 from '../../Components/Home Compo/HeroCompo2';

const Home = () => {
    return (
        <div>
            <DocumentTitle title='Graphicaloy'>
                
            </DocumentTitle>
            <HeroCompo2></HeroCompo2>
            {/* <HeroCompo></HeroCompo> */}
            <HomeServices></HomeServices>
            <div className='lg:mx-40 md:mx-24'>
                <HomeAbout></HomeAbout>
                <HomeGallery></HomeGallery>
                <HomeFaq></HomeFaq>
            </div>
            <HomeTestimonial></HomeTestimonial>
        </div>
    );
};

export default Home;