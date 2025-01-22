import React, { useState, useRef, useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';

// img
import hero from '../../img/hero.png';
import game1 from '../../img/game1.png';
import heross from '../../img/hero-ss.png';
import game2 from '../../img/game2.jpeg';
import designer from '../../img/designer.svg';
import developer from '../../img/developer.svg';
import you from '../../img/you.svg';
import lol from '../../img/lol.svg';
import prankster from '../../img/prankster.svg';

const Hero = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [showCursorImage, setShowCursorImage] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleGlobalMouseMove = (event) => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const isInsideSection =
                    event.clientX >= rect.left &&
                    event.clientX <= rect.right &&
                    event.clientY >= rect.top &&
                    event.clientY <= rect.bottom;

                setCursorPosition({ x: event.clientX, y: event.clientY });
                setShowCursorImage(isInsideSection);
            }
        };

        // Add global mouse move listener
        document.addEventListener('mousemove', handleGlobalMouseMove);

        return () => {
            // Clean up listener
            document.removeEventListener('mousemove', handleGlobalMouseMove);
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            className='about-us mx-4 mb-5 mt-1'
            style={{ cursor: showCursorImage ? 'none' : 'auto' }}
        >
            <Container>
                <Row className='d-flex align-items-center justify-content-center py-5 flex-column-reverse flex-lg-row'>
                    <Col lg={6} xs={12} className='position-relative pt-3'>
                        <p className='m-0 hero-title fw-bold'>
                            Creating <span style={{ color: "#0777AB" }}>Entertainment Apps & Games</span> That Inspire
                        </p>
                        <p style={{ paddingTop: "10px", width: "85%" }}>
                            We transform bold ideas into dynamic mobile apps and games, designed to enrich lives and meet unique needs.
                        </p>
                        {/* <Button
                            onClick={() => (window.location.href = '/contact-us')}
                            className='border-0 rounded-pill text-white px-4 py-3 arrow-rotate-box'
                            style={{
                                fontSize: "16px",
                                background: "#0777AB",
                                marginTop: "10px",
                                cursor: showCursorImage ? 'none' : 'pointer'
                            }}
                        >
                            <span
                                className='pe-2 text-white text-decoration-none m-0'
                                style={{ fontSize: "18px" }}
                            >
                                Let's Get connect
                            </span>
                            <FontAwesomeIcon icon={faArrowRight} className='arrow-rotate' />
                        </Button> */}

                        <img src={developer} alt='developer' className='developer img-fluid w-25' />
                        <div className='designer w-25'>
                            <img src={designer} alt='designer' className='img-fluid' />
                        </div>
                    </Col>
                    <Col lg={6} xs={12} className='d-flex align-items-center justify-content-center pt-3'>
                        <div className='border-circle d-flex align-items-center justify-content-center position-relative'>
                            <div className='white-circle position-absolute'>
                                <div className='white-circle overflow-hidden d-flex align-items-end justify-content-center sec-div'>
                                    <img src={hero} alt='hero-section' className='img-fluid w-75 h-100' />
                                    <img src={game1} alt='game' className='game1 img-fluid animation' />
                                    <img src={game2} alt='game' className='game2 img-fluid animation' />
                                </div>
                            </div>
                            <div className='white-circle bg-transparent position-absolute'>
                                <div className='white-circle d-flex align-items-end justify-content-center first-div'>
                                    <img src={heross} alt='hero-section' className='img-fluid' />
                                    <img src={lol} alt='lol' className='lol img-fluid animation' />
                                    <img src={prankster} alt='prankster' className='prankster img-fluid animation' />
                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>

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
                        pointerEvents: 'none',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1000,
                    }}
                />
            )}
        </div>
    );
};

export default Hero;