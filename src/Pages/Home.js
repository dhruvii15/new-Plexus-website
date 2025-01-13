import React, { useState, useEffect, lazy, Suspense } from 'react';
import Loading from '../Component/Loading';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCirclePlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Header = lazy(() => import('../Component/Header'));
const About = lazy(() => import('../Component/Home/About'));
const Hero = lazy(() => import('../Component/Home/HeroSection'));

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(false);

    const getData = () => {
        axios.get('https://plexus-technology.in/api/admin/read')
            .then((res) => {
                setData(res.data.data[0].hiringStatus);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                toast.error("Failed to fetch data.");
                setLoading(false);
            });
    };


    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <Suspense fallback={<Loading />}>
                    <Header />
                    <Hero />
                    <About />
                </Suspense>
            )}
            {data === "true" && (
                <div className="fixed-button">
                    <button className='animation' style={{ fontSize: "18px" }}>
                        <FontAwesomeIcon icon={faPersonCirclePlus} className="fs-5 pe-2" />
                        We're Hiring
                    </button>
                </div>
            )}

        </>
    );
};

export default Home;