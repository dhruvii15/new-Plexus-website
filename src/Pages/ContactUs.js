import React, { useState, useEffect, lazy, Suspense } from 'react';
import Loading from '../Component/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faPersonCirclePlus } from '@fortawesome/free-solid-svg-icons';

const Header = lazy(() => import('../Component/Header'));
const Footer = lazy(() => import('../Component/Footer'));
const ContactUs = lazy(() => import('../Component/Home/ContactUs'));

const ContactusPage = () => {
    const [data, setData] = useState();
    const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);


    const handleClick = () => {
        window.location.href = '/hiring';
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const storedData = sessionStorage.getItem('hiringStatus');
        if (storedData) {
            setData(JSON.parse(storedData));
        }

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
        <div>
            <Suspense fallback={<Loading />} >
                <Header />
                <ContactUs />
                <Footer />
            </Suspense>
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

export default ContactusPage;