/* eslint-disable */
import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// img
import hero from '../../img/hero.png';
import game1 from '../../img/game1.png';
import game2 from '../../img/game2.jpeg';

import designer from '../../img/designer.svg';
import developer from '../../img/developer.svg';
import you from '../../img/you.svg';

const About = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [showCursorImage, setShowCursorImage] = useState(false);

    // Update the cursor position and show the image when inside the section
    const handleMouseMove = (event) => {
        setCursorPosition({ x: event.clientX, y: event.clientY });
        setShowCursorImage(true);
    };

    // Hide the image when the cursor leaves the section
    const handleMouseLeave = () => {
        setShowCursorImage(false);
    };

    return (
        <div
            className='about-us mx-4 mb-5 mt-1'
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: "none" }}
        >
            <Container>
                <Row className='d-flex align-items-center justify-content-center py-5'>
                    <Col lg={6} xs={12} className='position-relative'>
                        <p className='m-0 hero-title fw-bold'>
                            Creating <span style={{ color: "#0777AB" }}>Entertainment Apps & Games</span> That Inspire
                        </p>
                        <p style={{ paddingTop: "10px", width: "85%" }}>
                            We transform bold ideas into dynamic mobile apps and games, designed to enrich lives and meet unique needs.
                        </p>
                        <Button
                            className='border-0 rounded-pill text-white px-4 py-3 arrow-rotate-box'
                            style={{ fontSize: "16px", background: "#0777AB", marginTop: "10px" , cursor:"none" }}
                        >
                            <span
                                onClick={() => (window.location.href = '/contact-us')}
                                className='pe-2 text-white text-decoration-none m-0'
                            >
                                Let's Get connect
                            </span>{' '}
                            <FontAwesomeIcon icon={faArrowRight} className='arrow-rotate' />
                        </Button>

                        <img src={developer} alt='developer' className='developer img-fluid w-25' />
                        <div className='designer w-25'>
                            <img src={designer} alt='designer' className='img-fluid' />
                        </div>
                    </Col>
                    <Col lg={6} xs={12} className='d-flex align-items-center justify-content-center'>
                        <div className='border-circle d-flex align-items-center justify-content-center position-relative'>
                            <div className='white-circle overflow-hidden d-flex align-items-end justify-content-center'>
                                <img src={hero} alt='hero-section' className='img-fluid w-75 h-100' />

                                <img src={game1} alt='game' className='game1 img-fluid animation' />
                                <img src={game2} alt='game' className='game2 img-fluid animation' />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* Add the 'you' image following the cursor only when showCursorImage is true */}
            {showCursorImage && (
                <img
                    src={you}
                    alt='you'
                    className='cursor-image position-fixed'
                    style={{
                        top: `${cursorPosition.y}px`,
                        left: `${cursorPosition.x}px`,
                        width: '70px',
                        height: '70px',
                        pointerEvents: 'none', // Prevent the image from interfering with cursor events
                        transform: 'translate(-50%, -50%)', // Center the image on the cursor
                        zIndex: 1000,
                    }}
                />
            )}
        </div>
    );
};

export default About;
