import React, { useState, useEffect, lazy, Suspense, useCallback } from 'react';
import Loading from '../Component/Loading';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faPersonCirclePlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Header = lazy(() => import('../Component/Header'));
const Footer = lazy(() => import('../Component/Footer'));
const Touch = lazy(() => import('../Component/Home/Touch'));
const JobDetails = lazy(() => import('../Component/Home/JobDetails'));

const JobDetailsPage = () => {
    const [loading, setLoading] = useState(true);
    const [jobDetails, setJobDetails] = useState();
    const [data, setData] = useState();
    const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);
    const { id } = useParams();

    const handleClick = () => {
        window.location.href = '/hiring';
    };
    
    const getData = useCallback(() => {
        axios.get(`https://plexus-technology.in/api/position/read/${id}`)
            .then((res) => {
                const data = res.data.data;
                setJobDetails(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                toast.error("Failed to fetch data.");
                setLoading(false);
            });
    }, [id]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        getData();

        const storedData = sessionStorage.getItem('hiringStatus');
        if (storedData) {
            setData(JSON.parse(storedData)); // Parse the JSON string
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
    }, [getData]);

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <Suspense fallback={<Loading />} >
                    <Header />
                    <JobDetails data={jobDetails}/>
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

export default JobDetailsPage;