import React, { lazy, Suspense } from 'react';
import Loading from '../Component/Loading';

const Header = lazy(() => import('../Component/Header'));
const About = lazy(() => import('../Component/Home/About'));
const Footer = lazy(() => import('../Component/Footer'));
const Touch = lazy(() => import('../Component/Home/Touch'));

const AboutUs = () => {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <Header />
                <About />
                <Touch />
                <Footer />
            </Suspense>
        </>
    );
};

export default AboutUs;