import React, { useState, useEffect, lazy, Suspense } from 'react';
import Loading from '../Component/Loading';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faPersonCirclePlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Header = lazy(() => import('../Component/Header'));
const Hero = lazy(() => import('../Component/Home/HeroSection'));
const Footer = lazy(() => import('../Component/Footer'));
const Touch = lazy(() => import('../Component/Home/Touch'));
const Stack = lazy(() => import('../Component/Home/Stack'));
const WhyUs = lazy(() => import('../Component/Home/WhyUs'));

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(() => {
        const storedData = sessionStorage.getItem('hiringStatus');
        return storedData ? JSON.parse(storedData) : false;
    });
    const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);

    const handleClick = () => {
        window.location.href = '/hiring';
    };

    const getData = () => {
        axios.get('https://plexus-technology.in/api/admin/read')
            .then((res) => {
                const hiringStatus = res.data.data[0].hiringStatus;
                setData(hiringStatus);
                sessionStorage.setItem('hiringStatus', JSON.stringify(hiringStatus));
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                toast.error("Failed to fetch data.");
                setLoading(false);
            });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        getData();

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
            {loading ? (
                <Loading />
            ) : (
                <Suspense fallback={<Loading />}>
                    <Header />
                    <Hero />
                    <WhyUs />
                    <Stack />
                    <Touch />
                    <Footer />
                </Suspense>
            )}
            {data === "true" && (
                <div className="fixed-button">
                    <button className='animation' style={{ fontSize: "18px" }} onClick={handleClick}>
                        <FontAwesomeIcon icon={faPersonCirclePlus} className="fs-5 pe-2" />
                        We're Hiring
                    </button>
                </div>
            )}

            {isScrollTopVisible && (
                <p className='fixed-top-btn cursor' onClick={scrollToTop}>
                    <FontAwesomeIcon icon={faArrowUp} className='px-2' />
                </p>
            )}
        </>
    );
};

export default Home;