import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'reactstrap';


const Touch = () => {
    const handleLinkedInClick = () => {
        const linkedinUrl = 'https://www.linkedin.com/company/plexus-technology2024/';

        window.open(linkedinUrl, '_blank');
    };
    return (
        <div className="py-5 mb-5 px-4">
            <div className="bg-blue p-4 p-sm-5" style={{ borderRadius: "24px" }}>
                <div className="d-flex flex-column align-items-center text-white px-0 px-lg-5 justify-content-center">
                    {/* <h4 style={{ fontWeight: "600" }} className="pb-2">INQUIRY</h4> */}
                    <h2 style={{ fontWeight: "700" }}>Let’s Get in Touch</h2>

                    <Row className="w-100 pt-3">
                        <Col md={6} xl={4} className="mx-auto pt-3">
                            <p className="fw-light fs-4 mb-1">HR Department</p>
                            <div className="rounded-2 bg-white p-3 d-flex align-items-center gap-3">
                                <FontAwesomeIcon icon={faPhone} className="fs-5" style={{ color: "#0777AB" }} />
                                <p className="m-0 text-black">+91 90238 38674</p>
                            </div>
                        </Col>
                        <Col md={6} xl={4} className="mx-auto pt-3">
                            <p className="fw-light fs-4 mb-1">Help</p>
                            <a
                                href="mailto:hr.plexustechnology@gmail.com?subject=Help%20Request&body=Dear%20HR,%0D%0A%0D%0AI%20need%20assistance%20with%20[describe%20the%20issue%20or%20topic%20here].%20Could%20you%20please%20provide%20guidance%20or%20support?%0D%0A%0D%0AThank%20you,%0D%0A[Your%20Name]"
                                className="text-decoration-none"
                            >
                                <div className="rounded-2 bg-white p-3 d-flex align-items-center gap-3">
                                    <FontAwesomeIcon icon={faEnvelope} className="fs-5" style={{ color: "#0777AB" }} />
                                    <p className="m-0 text-black">hr.plexustechnology@gmail.com</p>
                                </div>
                            </a>
                        </Col>
                        <Col md={6} xl={4} className="mx-auto pt-3">
                            <p className="fw-light fs-4 mb-1">Linkedin</p>
                            <div className="rounded-2 bg-white p-3 d-flex align-items-center gap-3" onClick={handleLinkedInClick} style={{ cursor: "pointer" }}>
                                <FontAwesomeIcon icon={faLinkedin} className="fs-5" style={{ color: "#0777AB" }} />
                                <p className="m-0 text-black">Plexus Technology</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>

    );
};

export default Touch;