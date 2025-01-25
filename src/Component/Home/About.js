import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Col, Container, Row } from "reactstrap";

// img
import about from "../../img/about-us.svg";
import vision from "../../img/vision.svg";
import mission from "../../img/mision.svg";
import commitment from "../../img/commitemet.svg";

const About = () => {
    return (
        <>
            <div className="about-bg mt-1 d-flex align-items-center justify-content-center" style={{ height: "280px" }}>
                <h1 className="hero-title w-100 h-100 m-0 text-center text-white" style={{ background: 'rgba(0, 0, 0, 0.60)', lineHeight: "280px", color: "#132028", fontWeight: "600" }}>About Us</h1>
            </div>

            <Container sx={{ pb: 5 }} style={{paddingTop:"100px"}}>
                <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                // spacing={2}
                // sx={{ pb: 5 }}
                >
                    <Grid item xs={12} lg={6} sx={{ pt: 5 , textAlign:"center" }} >
                        <Box
                        // sx={{ textAlign: "center" }}
                        >
                            <img src={about} alt="about-us" style={{ maxWidth: "100%" }} className="img-fluid" />
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        lg={6}
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
                        <div className="px-3 py-4 rounded-2 mt-5 shadow main-box flex-grow-1 position-relative">
                            <div className="about-box">
                                <img src={mission} alt="vision" width={30} className="img-fluid" />
                            </div>
                            <p className="h4 fw-bold mb-3 mt-4">Our Mission</p>
                            <p style={{ lineHeight: "25px", letterSpacing: "1px" }}>
                                Our mission is to deliver innovative IT solutions that empower businesses and enhance user experiences.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={4} className="mt-3 d-flex">
                        <div className="px-3 py-4 rounded-2 mt-5 shadow main-box flex-grow-1 position-relative">
                            <div className="about-box">
                                <img src={vision} alt="vision" width={50} className="img-fluid" />
                            </div>
                            <p className="h4 fw-bold mb-3 mt-4">Our Vision</p>
                            <p style={{ lineHeight: "25px", letterSpacing: "1px" }}>
                                Our vision is to empower businesses with innovative and reliable IT solutions that drive growth and create lasting impact.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={4} className="mt-3 d-flex">
                        <div className="px-3 py-4 rounded-2 mt-5 shadow main-box flex-grow-1 position-relative">
                            <div className="about-box">
                                <img src={commitment} alt="vision" width={50} className="img-fluid" />
                            </div>
                            <p className="h4 fw-bold mb-3 mt-4">Our commitment</p>
                            <p style={{ lineHeight: "25px", letterSpacing: "1px" }}>
                                At Plexus Technology, we deliver exceptional service and innovative products. We support employees with flexibility, social events, and growth opportunities.
                            </p>
                        </div>
                    </Col>
                </Row>


            </Container>
        </>
    );
};

export default About;
