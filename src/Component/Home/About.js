/* eslint-disable */
import React from 'react';
import { Col, Container, Row } from 'reactstrap';

// img
import hero from '../../img/hero.png'

const About = () => {

    return (
        <>
            <Container className='pt-3'>
                <div className='about-us'>
                    <Row className='d-flex align-items-end justify-content-center py-5'>
                        <Col md={6} xs={12}>

                        </Col>
                        <Col md={6} xs={12} className='d-flex align-items-center justify-content-center'>
                        <div className='border-circle d-flex align-items-center justify-content-center'>
                            <div className='white-circle overflow-hidden d-flex align-items-end justify-content-center'>
                                <img src={hero} alt='hero-section'  className='img-fluid w-75 h-100'/>
                            </div>

                        </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
}

export default About;
