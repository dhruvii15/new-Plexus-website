/* eslint-disable */
import React from 'react';
import { Col, Container, Row } from 'reactstrap';

// img
import logo from "../img/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const handleLinkedInClick = () => {
        const linkedinUrl = 'https://www.linkedin.com/company/plexus-technology2024/';

        window.open(linkedinUrl, '_blank');
    };


    const handleWhatsappClick = () => {
        const phoneNumber = '+91 90238 38674';
        const message = 'Hi, I would like to inquire about the services provided by Plexus Technology.';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };


    const handleInstaClick = () => {
        const instaUrl = 'https://www.instagram.com/plexus_technology/?igsh=MWdkdWZheGxrZjZkZQ%3D%3D';

        window.open(instaUrl, '_blank');
    };


    return (
        <div style={{ backgroundColor: "#080808", color: "#848484" }} className='overflow-hidden mx-4 rounded-5 mb-3'>
            <Container>

                <Row className='d-flex align-items-center justify-content-center py-5 px-2'>
                    <Col xs={12} lg={5} className='pt-4'>
                        <h2 className='fw-bold text-white'>Plexus Technology</h2>
                        <p className='pt-2'>305, A.R Mall, opp. panvel point,<br></br>
                            mota varachha, 394101</p>
                        <p className='fw-bold pt-3 m-0'><span className='text-white pe-2'>Phone : </span><span className='fw-normal'>+91 90238 38674</span></p>
                        <p className='fw-bold'><span className='text-white pe-2'>Email : </span><span className='fw-normal'><a
                            href="mailto:hr.plexustechnology@gmail.com?subject=Job%20Application&body=Dear%20HR,%0D%0A%0D%0AI%20am%20writing%20to%20express%20my%20interest%20in%20the%20available%20position%20at%20Plexus%20Technology.%20Please%20find%20my%20resume%20attached.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]"
                            className="text-decoration-none fs-6"
                            style={{ fontWeight: "200", color: "#848484" }}
                        >
                            hr.plexustechnology@gmail.com
                        </a></span></p>
                    </Col>
                    <Col xs={12} lg={7}>
                        <div className='text-center pt-4 footer-width'>
                            <img src={logo} alt='plexus-technology' className='img-fluid' width={220} />
                            <div className='d-flex align-items-center justify-content-center gap-3 py-2 text-white'>
                                <div className="common-footer hover-box box1" onClick={handleLinkedInClick}>
                                    <FontAwesomeIcon icon={faLinkedin} className="hover-box2 fs-4" />
                                </div>
                                <div className="common-footer hover-box box2" onClick={handleWhatsappClick}>
                                    <FontAwesomeIcon icon={faWhatsapp} className="hover-box2 fs-4" />
                                </div>
                                <div className="common-footer hover-box box3" onClick={handleInstaClick}>
                                    <FontAwesomeIcon icon={faInstagram} className="hover-box2 fs-4" />
                                </div>
                            </div>
                            <p style={{ fontSize: "14px" }} className='py-2'>All rights Reseverd . © Plexus Technology </p>
                        </div>

                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Footer;
