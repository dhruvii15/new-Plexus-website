import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";

// img
import about from "../../img/about-us.gif";
import { Container } from "reactstrap";

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

            <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
                sx={{ py: 4, my: 4 }}
            >
                {[...Array(4)].map((_, index) => (
                    <Grid
                        item
                        xs={12}
                        md={6}
                        lg={3}
                        key={index}
                        sx={{
                            border: "1px solid",
                            mt: 3,
                            height: "400px",
                        }}
                    ></Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default About;
