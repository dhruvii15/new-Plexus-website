import { faArrowRight, faBusinessTime, faCheckDouble, faLocationDot, faUserTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "reactstrap";

const JobDetails = ({ data }) => {
    const navigate = useNavigate();
    const [visibleSections, setVisibleSections] = useState({
        responsibilities: false,
        requirements: false,
        benefits: false
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisibleSections(prev => ({
                            ...prev,
                            [entry.target.dataset.section]: true
                        }));
                    }
                });
            },
            { threshold: 0.1 }
        );

        const sections = document.querySelectorAll('.animate-section');
        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    const handleJobClick = (itemId) => {
        // window.location.href = `/hiring/applynow/${itemId}`;
        navigate(`/hiring/applynow/${itemId}`);
    };    

    return (
        <>
            <h1 className="py-5 text-center px-3" style={{ borderTop: "1px solid #eee", color: "#132028", fontWeight: "600" }}>
                Your next big opportunity is just a click away.
            </h1>
            <div className="bg-blue text-white d-flex align-items-center p-2" style={{ minHeight: "200px" }}>
                <Container>
                    <h2 className="pb-3 fw-normal">{data.position}</h2>
                    <div className="d-flex flex-wrap gap-2 gap-sm-4 space fw-normal" style={{ fontSize: "14px" }}>
                        <span><FontAwesomeIcon icon={faLocationDot} className="pe-2" /> surat</span>
                        <span><FontAwesomeIcon icon={faBusinessTime} className="pe-2" />{data.jobType}</span>
                        <span><FontAwesomeIcon icon={faUserTag} className="pe-2" />{data.experience}</span>
                    </div>
                </Container>
            </div>

            <Container className="py-5 text-center">
                <div className="py-5 animate-section text-start" data-section="responsibilities">
                    <h3 className="fw-bold text-start" style={{ color: "#132028" }}>Key Responsibilities:</h3>
                    <div className={`text-animate ${visibleSections.responsibilities ? 'visible' : ''}`}>
                        {data.duties.map((duty, index) => (
                            <div
                                key={index}
                                className="d-flex gap-3 py-2"
                                style={{ color: "#44464a" }}
                            >
                                <FontAwesomeIcon icon={faCheckDouble} className="pt-2" style={{ color: "#0777AB" }} />
                                <p className="m-0 fs-5">{duty}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="py-5 animate-section text-start" data-section="requirements">
                    <h3 className="fw-bold" style={{ color: "#132028" }}>Requirements:</h3>
                    <div className={`text-animate ${visibleSections.requirements ? 'visible' : ''}`}>
                        {data.needs.map((needs, index) => (
                            <div
                                key={index}
                                className="d-flex gap-3 py-2"
                                style={{ color: "#44464a" }}
                            >
                                <FontAwesomeIcon icon={faCheckDouble} className="pt-2" style={{ color: "#0777AB" }} />
                                <p className="m-0 fs-5">{needs}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="py-5 animate-section text-start" data-section="benefits">
                    <h3 className="fw-bold text-start" style={{ color: "#132028" }}>Benefits:</h3>
                    <div className={`text-animate ${visibleSections.benefits ? 'visible' : ''}`}>
                        {data.benefits.map((benefits, index) => (
                            <div
                                key={index}
                                className="d-flex gap-3 py-2"
                                style={{ color: "#44464a" }}
                            >
                                <FontAwesomeIcon icon={faCheckDouble} className="pt-2" style={{ color: "#0777AB" }} />
                                <p className="m-0 fs-5">{benefits}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <Button
                    className='border-0 rounded-pill text-white px-5 py-3 arrow-rotate-box mx-auto'
                    onClick={() => handleJobClick(data._id)}
                    style={{
                        fontSize: "16px",
                        background: "#0777AB",
                    }}
                >
                    <span
                        className='pe-2 text-white text-decoration-none m-0'
                        style={{ fontSize: "16px" }}
                    >
                        Apply Now
                    </span>
                    <FontAwesomeIcon icon={faArrowRight} className='arrow-rotate' />
                </Button>
            </Container>
        </>
    );
};

export default JobDetails;