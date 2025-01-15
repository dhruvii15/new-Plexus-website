import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Col, Container, Row } from "reactstrap";

// img
import about from "../../img/about-us.gif";
import vision from "../../img/vision.svg";
import mission from "../../img/mision.svg";
import commitment from "../../img/commitemet.svg";

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

            <div className="about-bg mt-1 d-flex align-items-center justify-content-center" style={{ height: "260px"}}>
                <h1 className="hero-title w-100 h-100 m-0 text-center" style={{background:'rgba(193, 195, 195, 0.63)' , lineHeight:"260px"}}>About Us</h1>
            </div>

            <Container sx={{ pb: 5 }}>
                <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                // spacing={2}
                // sx={{ pb: 5 }}
                >
                    <Grid item xs={12} lg={6} sx={{ pt: 5 }}>
                        <Box
                            className={`image-animate ${isImageVisible ? "visible" : ""}`}
                        // sx={{ textAlign: "center" }}
                        >
                            <img src={about} alt="about-us" style={{ maxWidth: "100%" }} className="img-fluid" />
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        lg={6}
                        className={`text-animate ${isTextVisible ? "visible" : ""}`}
                        sx={{
                            px: 5,
                            pt: 5,
                            fontSize: "17px",
                            lineHeight: "25px",
                            letterSpacing: "1px",
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: "bold",
                                pb: 5,
                            }}
                        >
                            <Box
                                component="span"
                                sx={{
                                    py: 1,
                                    px: 3,
                                    borderRadius: "50px",
                                    border: "1px dashed #0777AB",
                                    display: "inline-block",
                                }}
                            >
                                ABOUT US
                            </Box>
                        </Typography>
                        <Typography
                            paragraph
                            sx={{
                                mb: 4,
                                lineHeight: "25px",
                                letterSpacing: "1px",
                            }}
                        >
                            At Plexus Technology, we transform visionary ideas into innovative
                            products that meet the ever-changing needs of businesses worldwide.
                            Since our founding in 2023, we've been pushing the limits of
                            technology, blending expertise with a commitment to excellence.
                        </Typography>
                        <Typography
                            sx={{
                                lineHeight: "25px",
                                letterSpacing: "1px",
                            }}
                        >
                            Our team creates solutions that not only address today's challenges
                            but also anticipate future needs, ensuring our products stay ahead
                            of industry trends and empower businesses to succeed in a fast-paced
                            digital world.
                        </Typography>
                    </Grid>
                </Grid>

                <Row className="d-flex align-items-stretch justify-content-center my-5 py-5">
                    <p className="text-center fs-1 py-4">"Making our mission a reality<br></br>
                    one step at a time”</p>
                    <Col xs={12} md={6} xl={4} className="mt-3 d-flex">
                        <div className="px-3 py-4 rounded-2 shadow main-box flex-grow-1">
                            <Row>
                                <Col xs={12} lg={3}>
                                    <div className="about-box">
                                        <img src={vision} alt="vision" width={50} className="img-fluid" />
                                    </div>
                                </Col>
                                <Col xs={12} lg={9} className="pt-3">
                                    <p className="h4 fw-bold mb-3">Our Vision</p>
                                    <p style={{ lineHeight: "25px", letterSpacing: "1px" }}>
                                        Our vision is to empower businesses with innovative and reliable IT solutions that drive growth and create lasting impact.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={4} className="mt-3 d-flex">
                        <div className="px-3 py-4 rounded-2 shadow main-box flex-grow-1">
                            <Row>
                                <Col xs={12} lg={3}>
                                    <div className="about-box">
                                        <img src={mission} alt="vision" width={30} className="img-fluid" />
                                    </div>
                                </Col>
                                <Col xs={12} lg={9} className="pt-3">
                                    <p className="h4 fw-bold mb-3">Our Mission</p>
                                    <p style={{ lineHeight: "25px", letterSpacing: "1px" }}>
                                        Our mission is to deliver exceptional technology services by combining creativity, expertise, and customer-centric approaches, ensuring every client achieves their digital transformation goals.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={4} className="mt-3 d-flex">
                        <div className="px-3 py-4 rounded-2 shadow main-box flex-grow-1">
                            <Row>
                                <Col xs={12} lg={3}>
                                    <div className="about-box">
                                        <img src={commitment} alt="vision" width={50} className="img-fluid" />
                                    </div>
                                </Col>
                                <Col xs={12} lg={9} className="pt-3">
                                    <p className="h4 fw-bold mb-3">Our Goal</p>
                                    <p style={{ lineHeight: "25px", letterSpacing: "1px" }}>
                                        Our goal is to be the preferred global partner for IT services by consistently exceeding client expectations through quality, innovation, and trust.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>


            </Container>
        </>
    );
};

export default About;
