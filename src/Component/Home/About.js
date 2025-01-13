import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';

// img
import about from "../../img/about-us.gif"

const About = () => {
    const [isImageVisible, setIsImageVisible] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false);

    useEffect(() => {
        const imageTimer = setTimeout(() => setIsImageVisible(true), 100);
        const textTimer = setTimeout(() => setIsTextVisible(true), 600);

        return () => {
            clearTimeout(imageTimer);
            clearTimeout(textTimer);
        };
    }, []);

    return (
        <>
            <Container className="pb-5" id='aboutUsSection'>
                <Row className="d-flex align-items-center justify-content-center">
                    <Col xs={12} lg={6} className="pt-5">
                        <div className={`image-animate ${isImageVisible ? 'visible' : ''}`}>
                            <img 
                                src={about} 
                                alt="about-us" 
                                className="img-fluid" 
                            />
                        </div>
                    </Col>
                    <Col 
                        xs={12} 
                        lg={6} 
                        className={`px-5 pt-5 text-animate ${isTextVisible ? 'visible' : ''}`}
                        style={{ fontSize: "17px" }}
                    >
                        <h3 className="fw-bold pb-5"><span className='py-2 px-3 rounded-pill' style={{border:"1px dashed #0777AB"}}>ABOUT US</span></h3>
                        {/* <h4 className='pb-4 fw-bold'>Transforming Ideas into Impactful Solutions</h4> */}
                        <p 
                            style={{ lineHeight: "25px", letterSpacing: "1px" }} 
                            className="mb-4"
                        >
                            At Plexus Technology, we transform visionary ideas into innovative 
                            products that meet the ever-changing needs of businesses worldwide. 
                            Since our founding in 2023, we've been pushing the limits of 
                            technology, blending expertise with a commitment to excellence.
                        </p>
                        <p 
                            style={{ lineHeight: "25px", letterSpacing: "1px" }}
                        >
                            Our team creates solutions that not only address today's challenges 
                            but also anticipate future needs, ensuring our products stay ahead 
                            of industry trends and empower businesses to succeed in a fast-paced 
                            digital world.
                        </p>
                    </Col>
                </Row>

                {/* <Row className='py-4 my-4 d-flex flex-wrap align-items-center justify-content-center'>
                    <Col xs={12} md={6} lg={3} className='border mt-3' style={{height:"400px"}}>
                    
                    </Col>
                    <Col xs={12} md={6} lg={3} className='border mt-3' style={{height:"400px"}}>
                    
                    </Col>
                    <Col xs={12} md={6} lg={3} className='border mt-3' style={{height:"400px"}}>
                    
                    </Col>
                    <Col xs={12} md={6} lg={3} className='border mt-3' style={{height:"400px"}}>
                    
                    </Col>
                </Row> */}
            </Container>
        </>
    );
};

export default About;