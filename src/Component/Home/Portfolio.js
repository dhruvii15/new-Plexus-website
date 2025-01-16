import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Counter from './Counter';

// IMG
import playstore from "../../img/playstore.svg";
import appstore from "../../img/appstore.svg";

const Portfolio = ({ portfolio }) => {
    const [activeTab, setActiveTab] = useState('2');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    };


    // Implement Read More / Read Less logic
    const DescriptionWithReadMore = ({ description }) => {
        const [isExpanded, setIsExpanded] = useState(false);
        const maxWords = 60;

        const toggleReadMore = (e) => {
            e.preventDefault();
            setIsExpanded(!isExpanded);
        };

        const words = description.split(' ');

        return (
            <div className='pb-2'>
                <p className='pe-sm-5'>
                    {isExpanded ? description : words.slice(0, maxWords).join(' ') + (words.length > maxWords ? '...' : '')}
                    {words.length > maxWords && (
                        <button
                            onClick={toggleReadMore}
                            className='btn btn-link text-black text-decoration-none fw-bold'
                            style={{ cursor: 'pointer', display: 'inline', padding: '0 15px' }}
                        >
                            {isExpanded ? 'Read Less' : 'Read More'}
                        </button>
                    )}
                </p>
            </div>
        );
    };

    return (
        <>
            <div className="about-bg mt-1 d-flex align-items-center justify-content-center" style={{ height: "260px" }}>
                <h1 className="hero-title w-100 h-100 m-0 text-center" style={{ background: 'rgba(193, 195, 195, 0.63)', lineHeight: "260px" }}>Portfolio</h1>
            </div>
            <Container className="py-5">
                <p className="text-center fs-2 pt-5">"Transforming Ideas into Reality through <br></br>Innovation and Technology"</p>
                <div className="pb-5">
                    {portfolio && portfolio.length > 0 ? (
                        portfolio.map((item, i) => (
                            <Row
                                key={i}
                                className={`border rounded-4 overflow-hidden d-flex align-items-center ${i % 2 === 1 ? "flex-md-row-reverse" : "flex-column-reverse flex-md-row"
                                    }`}
                                style={{ backgroundColor: "#F3F7F7", margin: "90px 0px" }}
                            >
                                <Col xs={12} md={6} className="h-100 mx-auto ps-5 py-4">
                                    <h2 className="fw-bold pb-3">{item.title}</h2>
                                    <DescriptionWithReadMore description={item.description} />

                                    <div className="d-flex mb-2">
                                        <div
                                            className="text-center my-2 pe-4"
                                            style={{ borderRight: "1px solid #c1c1c1" }}
                                        >
                                            <h5 className="fw-bold m-0">
                                                <Counter end={item.playstoreDownloads} duration={500} />+
                                            </h5>
                                            <p className="m-0">Downloads</p>
                                        </div>
                                        <div className="text-center my-2 ps-4">
                                            <h5 className="fw-bold m-0">
                                                <Counter end={item.country} duration={1000} /> million
                                            </h5>
                                            <p className="m-0">Country</p>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-3 pt-2">
                                        <a href={item.playstoreLink} target="_blank" rel="noreferrer">
                                            <img src={playstore} alt="playstore" className="img-fluid" />
                                        </a>
                                        <a href={item.appstoreLink} target="_blank" rel="noreferrer">
                                            <img src={appstore} alt="appstore" className="img-fluid" />
                                        </a>
                                    </div>
                                </Col>
                                <Col xs={12} md={6} className="p-0">
                                    <div className={`portfolio-box ${i % 2 === 1 ? "image-box-reverse" : "image-box"} d-none d-md-block`}>
                                        <Row className="d-flex align-items-center justify-content-center h-100">
                                            {[...Array(3)].map((_, colIndex) => (
                                                <Col xs={4} className={`h-100 ${i % 2 === 1 ? "animation-col-reverse" : "animation-col"}`} key={colIndex}>
                                                    <div className="slider-container">
                                                        <div
                                                            className={`${colIndex === 1 ? "slider-content2" : "slider-content"} ${colIndex === 2 ? "slider-content3" : "slider-content"
                                                                } align-items-center justify-content-center d-flex flex-column gap-4`}
                                                        >
                                                            {[...Array(2)].map((_, index) =>
                                                                item.image.map((img, imgIndex) => (
                                                                    <img
                                                                        key={`${index}-${imgIndex}`}
                                                                        src={img}
                                                                        alt={`portfolio-image-${index}-${imgIndex}`}
                                                                        style={{ width: "95%" }}
                                                                        className="img-fluid rounded-4"
                                                                    />
                                                                ))
                                                            )}
                                                        </div>
                                                    </div>
                                                </Col>
                                            ))}
                                        </Row>
                                    </div>
                                    <div className="portfolio-box2 image-box2 d-block d-md-none overflow-hidden shadow">
                                        <Row className="d-flex align-items-center justify-content-center h-100">
                                            {[...Array(3)].map((_, colIndex) => (
                                                <Col xs={4} className="h-100 animation-col" key={colIndex}>
                                                    <div className="slider-container">
                                                        <div
                                                            className={`${colIndex === 1 ? "slider-content2" : "slider-content"} ${colIndex === 2 ? "slider-content3" : "slider-content"
                                                                } align-items-center justify-content-center d-flex flex-column gap-4`}
                                                        >
                                                            {[...Array(2)].map((_, index) =>
                                                                item.image.map((img, imgIndex) => (
                                                                    <img
                                                                        key={`${index}-${imgIndex}`}
                                                                        src={img}
                                                                        alt={`portfolio-image-${index}-${imgIndex}`}
                                                                        style={{ width: "95%" }}
                                                                        className="img-fluid rounded-4"
                                                                    />
                                                                ))
                                                            )}
                                                        </div>
                                                    </div>
                                                </Col>
                                            ))}
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        ))
                    ) : (
                        <p>No portfolio item available.</p>
                    )}
                </div>;

            </Container>
        </>
    );
};

export default Portfolio;
