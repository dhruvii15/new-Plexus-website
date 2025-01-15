import React from 'react';
import { Col, Container, Row } from 'reactstrap';

// img
import quality from "../../img/quality.svg"
import innovation from "../../img/innovation.svg"
import satisfaction from "../../img/satisfaction.svg"

const WhyUs = () => {

    return (
        <div>
            <Container className="py-5">
                <h2 className="text-center fw-bold">Why Plexus Technology ?</h2>
                <p className='my-3 text-center'>An innovative company specializing in creating cutting-edge entertainment apps, focused on enhancing user experiences across multiple platforms with engaging and intuitive applications.</p>
                <Row className="pb-5 d-flex align-items-stretch justify-content-center">
                    <Col xs={12} md={6} xl={4} className="mt-3 d-flex">
                        <div className="px-3 py-4 rounded-3 border mt-5 text-center flex-grow-1 position-relative" style={{ background: "#FAFAFA" }}>
                            <img src={quality} alt="vision" width={70} className="img-fluid" />
                            <p className="h4 fw-bold mb-3 mt-4">Quality</p>
                            <p style={{ lineHeight: "25px", letterSpacing: "1px" }}>
                                We know that what is value of quality.We never compromise with quality of our work and design.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={4} className="mt-3 d-flex">
                        <div className="px-3 py-4 rounded-3 border mt-5 text-center flex-grow-1 position-relative" style={{ background: "#FAFAFA" }}>
                            <img src={innovation} alt="vision" width={70} className="img-fluid" />
                            <p className="h4 fw-bold mb-3 mt-4">Innovation</p>
                            <p style={{ lineHeight: "25px", letterSpacing: "1px" }}>
                            Innovation drives everything at Plexus Technology as we explore new ideas to create groundbreaking apps that set industry standards.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={4} className="mt-3 d-flex">
                        <div className="px-3 py-4 rounded-3 border mt-5 text-center flex-grow-1 position-relative" style={{ background: "#FAFAFA" }}>
                            <img src={satisfaction} alt="vision" width={70} className="img-fluid" />
                            <p className="h4 fw-bold mb-3 mt-4">Developing</p>
                            <p style={{ lineHeight: "25px", letterSpacing: "1px" }}>
                            We develop a user-friendly best app and set new benchmarks in the industry.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default WhyUs;