import React from "react";
import { Col, Container, Row } from "reactstrap";

const WhatNext = () => {
    return (
        <>




            <Container className="py-5">
                <h1 className="text-center" style={{ textShadow: '0px 3px 0px #0777AB', color: "#132028", fontWeight: "600" }}>So What Next ?</h1>
                <Row className="pb-5 d-flex align-items-stretch justify-content-center">
                    <Col xs={12} md={6} xl={4} className="mt-3 d-flex">
                        <div className="px-3 rounded-3 mt-5 text-center flex-grow-1 position-relative">
                            <div className="next-icon">
                                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.94596 0C4.63225 0 1.94596 2.68629 1.94596 6V6.35115C0.424904 7.0975 -0.421358 8.916 0.212014 10.6578L0.524514 11.5172C0.803334 12.2839 0.945964 13.0935 0.945964 13.9094V16.5C0.945964 17.3284 1.61753 18 2.44596 18H19.4459C20.2744 18 20.9459 17.3284 20.9459 16.5V13.9094C20.9459 13.0935 21.0886 12.2839 21.3674 11.5172L21.6799 10.6578C22.3133 8.916 21.467 7.0975 19.9459 6.35115V6C19.9459 2.68629 17.2597 0 13.9459 0H7.94596ZM17.9459 6.03175C16.2517 6.2618 14.9459 7.7141 14.9459 9.4715V11H6.94596V9.4715C6.94596 7.7141 5.64019 6.2618 3.94596 6.03175V6C3.94596 3.79086 5.73682 2 7.94596 2H13.9459C16.1551 2 17.9459 3.79086 17.9459 6V6.03175ZM14.9459 13V14H16.9459V9.4715C16.9459 8.6588 17.6048 8 18.4174 8C19.4386 8 20.1493 9.0147 19.8003 9.9743L19.4878 10.8337C19.1293 11.8195 18.9459 12.8604 18.9459 13.9094V16H2.94596V13.9094C2.94596 12.8604 2.76258 11.8195 2.4041 10.8337L2.0916 9.9743C1.74263 9.0147 2.45333 8 3.47448 8C4.28716 8 4.94596 8.6588 4.94596 9.4715V14H6.94596V13H14.9459Z" fill="#0094EE"></path></svg>
                            </div>
                            <p className="h4 fw-bold mb-3 mt-4">Explore Open Positions</p>
                            <p style={{ lineHeight: "25px", letterSpacing: "1px" }}>
                                Browse through our current job listings to find the role that suits your skills and interests. Click on the job title for detailed descriptions and requirements.</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={4} className="mt-3 d-flex">
                        <div className="px-3 rounded-3 mt-5 text-center flex-grow-1 position-relative">
                            <div className="next-icon">
                                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 0.00318003V0H16.9978C17.5513 0 18 0.45531 18 0.9918V19.0082C18 19.556 17.5551 20 17.0066 20H0.9934C0.44476 20 0 19.5501 0 18.9932V6L6 0.00318003ZM2.82918 6H6V2.83086L2.82918 6ZM8 2V7C8 7.55228 7.5523 8 7 8H2V18H16V2H8Z" fill="#0094EE"></path></svg>
                            </div>
                            <p className="h4 fw-bold mb-3 mt-4">Prepare Your Application</p>
                            <p style={{ lineHeight: "25px", letterSpacing: "1px" }}>
                                Update your resume and tailor your cover letter to highlight your relevant experience and enthusiasm for the position.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={4} className="mt-3 d-flex">
                        <div className="px-3 rounded-3 mt-5 text-center flex-grow-1 position-relative">
                            <div className="next-icon">
                                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.57135 17.1427V19.0474H0.946086C0.423577 19.0474 0 18.6138 0 18.1029V0.944562C0 0.422901 0.426177 0 0.950943 0H12.3808L17.1425 4.76186V11.4285H15.2379V5.71423H11.4285V1.90474H1.90474V17.1427H8.57135ZM10.9186 16.6329L14.2857 20L18.9996 15.286L17.6528 13.9391L14.2857 17.3063L12.2654 15.286L10.9186 16.6329Z" fill="#0094EE"></path></svg>
                            </div>
                            <p className="h4 fw-bold mb-3 mt-4">Submit Your Application</p>
                            <p style={{ lineHeight: "25px", letterSpacing: "1px" }}>
                                Fill out the online application form and upload your resume and cover letter. Once completed, click the "Submit" button.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default WhatNext;
