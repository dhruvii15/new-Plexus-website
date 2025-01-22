import React, { useState, useEffect, lazy, Suspense } from 'react';
import Loading from '../Component/Loading';
import { toast } from 'react-toastify';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faPersonCirclePlus } from '@fortawesome/free-solid-svg-icons';

const Header = lazy(() => import('../Component/Header'));
const Footer = lazy(() => import('../Component/Footer'));
const Portfolio = lazy(() => import('../Component/Home/Portfolio'));

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [portfolio, setPortfolio] = useState(false);
    const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);
    const [data, setData] = useState(null);

    const handleClick = () => {
        window.location.href = '/hiring';
    };

    useEffect(() => {
        // Retrieve data from sessionStorage
        const storedData = sessionStorage.getItem('hiringStatus');
        if (storedData) {
            setData(JSON.parse(storedData)); // Parse the JSON string
        }
    }, []);


    const getData = () => {
        axios.get('https://plexus-technology.in/api/portfolio/read')
            .then((res) => {
                setPortfolio(res.data.data);
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
                    <Portfolio portfolio={portfolio} />
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