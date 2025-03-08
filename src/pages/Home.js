import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Services from '../components/Services';
import Dispatch from '../components/Dispatch';
import Haul from '../components/Haul';

const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <Services />
            <Dispatch />
            <Haul />
            <Clients />
            <Cta/>
            <Footer />
        </>

    )
}

export default Home;

