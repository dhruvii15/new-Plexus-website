import React, { useState, useEffect, lazy, Suspense } from 'react';
import Loading from '../Component/Loading';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCirclePlus } from '@fortawesome/free-solid-svg-icons';

const Header = lazy(() => import('../Component/Header'));
const About = lazy(() => import('../Component/Home/About'));

const Home = () => {
    const [portfolioData, setPortfolioData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(false);
    const [worker, setWorker] = useState(null);

    console.log(portfolioData, data);


    useEffect(() => {
        // Initialize Web Worker
        const newWorker = new Worker(new URL('../Worker/worker.js', import.meta.url));
        setWorker(newWorker);

        // Set up message handlers
        newWorker.onmessage = (event) => {
            const { type, data: responseData, error } = event.data;

            switch (type) {
                case 'PORTFOLIO_DATA':
                    setPortfolioData(responseData);
                    setLoading(false);
                    break;
                case 'ADMIN_DATA':
                    setData(responseData);
                    break;
                case 'ERROR':
                    console.error('Worker error:', error);
                    toast.error("Failed to fetch data.");
                    setLoading(false);
                    break;
                default:
                    break;
            }
        };

        // Start fetching data in background
        newWorker.postMessage({ type: 'FETCH_PORTFOLIO' });
        newWorker.postMessage({ type: 'FETCH_ADMIN' });

        // Cleanup worker on component unmount
        return () => {
            if (newWorker) {
                newWorker.terminate();
            }
        };
    }, []);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <Suspense fallback={<Loading />}>
                    <Header />
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