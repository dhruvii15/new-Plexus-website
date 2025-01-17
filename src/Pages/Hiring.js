import React, { useState, useEffect, lazy, Suspense } from 'react';
import Loading from '../Component/Loading';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faPersonCirclePlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Header = lazy(() => import('../Component/Header'));
const Footer = lazy(() => import('../Component/Footer'));
const Touch = lazy(() => import('../Component/Home/Touch'));
const Hiring = lazy(() => import('../Component/Home/Hiring'));

const HiringPage = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);

    const handleClick = () => {
        window.location.href = '/hiring';
    };


    const getData = () => {
        axios.get('http://localhost:5001/api/position/read')
            .then((res) => {
                const data = res.data.data;
                setData(data);
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
        <div style={{background:"#FAFAFA"}}>
            {loading ? (
                <Loading />
            ) : (
                <Suspense fallback={<Loading />} >
                    <Header />
                    <Hiring data={data}/>
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
        </div>
    );
};

export default HiringPage;