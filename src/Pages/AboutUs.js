import React, { lazy, Suspense, useEffect, useState } from 'react';
import Loading from '../Component/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Header = lazy(() => import('../Component/Header'));
const About = lazy(() => import('../Component/Home/About'));
const Footer = lazy(() => import('../Component/Footer'));
const Touch = lazy(() => import('../Component/Home/Touch'));

const AboutUs = () => {

    const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsScrollTopVisible(true);
            } else {
                setIsScrollTopVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Suspense fallback={<Loading />}>
                <Header />
                <About />
                <Touch />
                <Footer />
            </Suspense>

            {isScrollTopVisible && (
                <p className='fixed-top-btn cursor' onClick={scrollToTop}>
                    <FontAwesomeIcon icon={faArrowUp} className='px-2' />
                </p>
            )}
        </>
    );
};

export default AboutUs;