import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Counter from './Counter';

// IMG
import playstore from "../../img/googleplay.webp";
import appstore from "../../img/appstore.webp";

const Portfolio = ({ portfolio }) => {

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
            <div className="portfolio-bg mt-1 d-flex align-items-center justify-content-center" style={{ height: "280px" }}>
                <h1 className="hero-title w-100 h-100 m-0 text-center text-white" style={{  background: 'rgba(0, 0, 0, 0.20)', lineHeight: "280px" ,color: "#132028", fontWeight: "600" }}>Portfolio</h1>
            </div>
            <Container className="pt-5">
                {/* <p className="text-center fs-2 pt-5">"Transforming Ideas into Reality through <br></br>Innovation and Technology"</p> */}
                <div className="pb-5">
                    {portfolio && portfolio.length > 0 ? (
                        portfolio.sort((a, b) => a.rank - b.rank).map((item, i) => (
                            <Row
                                key={i}
                                className={`border rounded-4 overflow-hidden d-flex align-items-center ${i % 2 === 0 ? "flex-column-reverse flex-lg-row" : "flex-column-reverse flex-lg-row-reverse"
                                    }`}
                                style={{ backgroundColor: "#F3F7F7", margin: "90px 0px" }}
                            >
                                <Col xs={12} lg={6} className="h-100 mx-auto ps-5 py-4">
                                <div className="d-flex align-items-center justify-contetn-center pb-4 gap-3">
                                    <img src={item.icon} alt={item.title} className="img-fluid rounded-2" width={60}/>
                                    <h3 className="fw-bold m-0">{item.title}</h3>
                                </div>
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
                                                <Counter end={item.country} duration={1000} /> +
                                            </h5>
                                            <p className="m-0">Country</p>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-3 pt-3">
                                        <a href={item.playstoreLink} target="_blank" rel="noreferrer">
                                            <img src={playstore} alt="playstore" className="img-fluid" style={{width:"90%"}} />
                                        </a>
                                        <a href={item.appstoreLink} target="_blank" rel="noreferrer">
                                            <img src={appstore} alt="appstore" className="img-fluid" style={{width:"90%"}} />
                                        </a>
                                    </div>
                                </Col>
                                <Col xs={12} lg={6} className="p-0">
                                    <div className={`portfolio-box ${i % 2 === 1 ? "image-box-reverse" : "image-box"} d-none d-lg-block`}>
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
                                    <div className="portfolio-box2 image-box2 d-block d-lg-none overflow-hidden shadow">
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
                </div>

            </Container>
        </>
    );
};

export default Portfolio;
