import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";

//img
import ios from "../../img/ios.webp"
import swift from "../../img/swift.webp"
import objective from "../../img/objective.webp"
import android from "../../img/android.webp"
import kotlin from "../../img/kotlin.webp"
import java from "../../img/java.svg"
import figma from "../../img/figma.svg"
import stack1 from "../../img/stack1.png"
import stack2 from "../../img/stack2.png"

const Stack = () => {
    // const handleDownloadClick = (url) => {
    //     window.open(url, '_blank', 'noopener noreferrer');
    // };


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
            <Container className="py-5">
                <h2 className="text-center fw-bold">Our Technology Stack</h2>
                <p style={{ fontSize: '12px' }} className="text-center space">Scale up your business growth with highly robust.</p>
                <Row className="py-5 d-flex align-items-center justify-content-center">
                    <Col xs={12} lg={6} className={`text-center py-4 d-flex align-items-center justify-content-center image-animate ${isImageVisible ? "visible" : ""}`}>

                        <div className='border-circle d-flex align-items-center justify-content-center position-relative'>
                            <div className='white-circle position-absolute'>
                                <div className='white-circle d-flex align-items-end justify-content-center sec-div'>
                                    <img src={stack1} alt="ios" className="img-fluid" style={{ width: "70%" }} />
                                </div>
                            </div>
                            <div className='white-circle bg-transparent position-absolute'>
                                <div className='white-circle d-flex align-items-end justify-content-center first-div'>
                                    <img src={stack2} alt="ios" className="img-fluid" style={{ width: "70%" }} />
                                </div>
                            </div>
                        </div>


                    </Col>
                    <Col xs={12} lg={6} className={`py-4 px-5 text-animate ${isTextVisible ? "visible" : ""}`}>
                        <p className="space">Our mobile app is developed using Swift for iOS and Kotlin for Android, ensuring native performance and seamless user experiences across both platforms. These technologies offer efficient, fast, and reliable solutions. Explore our app with the provided screenshots to see its capabilities in action.</p>
                        <div className="py-3 d-flex align-items-center" style={{width:"100%"}}>
                            <div className="stack-box mt-2 shadow"><img src={figma} alt="figma" className="img-fluid" style={{ width: "35%" }} /></div>
                            <p className="border m-0" style={{ width: "40px", height: "1px" }}></p>
                            <div className="stack-box mt-2 shadow"><img src={swift} alt="swift" className="img-fluid w-50" /></div>
                            <p className="border m-0" style={{ width: "40px", height: "1px" }}></p>
                            <div className="stack-box mt-2 shadow"><img src={objective} alt="objective" className="img-fluid w-50" /></div>
                            <p className="border m-0" style={{ width: "40px", height: "1px" }}></p>
                            <div className="stack-box mt-2 shadow"><img src={ios} alt="ios" className="img-fluid w-50" /></div>
                        </div>
                        <div className="py-3 d-flex align-items-center" style={{width:"100%"}}>
                            <div className="stack-box mt-2 shadow"><img src={figma} alt="figma" className="img-fluid" style={{ width: "35%" }} /></div>
                            <p className="border m-0" style={{ width: "40px", height: "1px" }}></p>
                            <div className="stack-box mt-2 shadow"><img src={kotlin} alt="kotlin" className="img-fluid w-50 p-1" /></div>
                            <p className="border m-0" style={{ width: "40px", height: "1px" }}></p>
                            <div className="stack-box mt-2 shadow"><img src={java} alt="java" className="img-fluid w-50" /></div>
                            <p className="border m-0" style={{ width: "40px", height: "1px" }}></p>
                            <div className="stack-box mt-2 shadow"><img src={android} alt="android" className="img-fluid w-50" /></div>
                        </div>

                        {/* <div className='download-btn d-flex align-items-center justify-content-start position-relative mt-3'>
                            <div className='position-absolute left-0 first-div'>
                                <Button className="bg-transparent text-black rounded-pill d-flex align-items-center justify-content-start gap-2 py-2 px-3" 
                                onClick={() => handleDownloadClick('https://example.com')}
                                style={{border:"1px dashed #0385C3"}}>
                                    <FontAwesomeIcon icon={faDownload} className="fs-5"/> Download
                                </Button>
                            </div>
                            <div className='left-0 position-absolute sec-div'>
                                <Button className="bg-transparent text-black rounded-pill d-flex align-items-center justify-content-start gap-2 py-2 px-3" 
                                onClick={() => handleDownloadClick('https://example.com')}
                                style={{border:"1px dashed #0385C3"}}>
                                <FontAwesomeIcon icon={faDownload}  className="fs-5"/> Download
                                </Button>
                            </div>
                        </div> */}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Stack;
