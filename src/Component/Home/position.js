import React, { useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBusinessTime, faLocationDot, faMagnifyingGlass, faUpRightFromSquare, faUserTag } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

// img
import jobseeker from "../../img/jobseeker.png"
import recruiter from "../../img/recruiter.png"

const Position = ({ data }) => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDepartment, setSelectedDepartment] = useState("All");
    const [selectedjobType, setSelectedjobType] = useState("All");

    const scrollToOpenPosition = () => {
        const element = document.getElementById('open-position-section');
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const handleJobClick = (itemId) => {
        navigate(`/hiring/jobdetails/${itemId}`);
    };

    // Modified reduce function to handle "All" as default
    const departments = data.reduce((acc, item) => {
        const matchesSearch =
            item.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDepartment = selectedDepartment === "All" || item.department === selectedDepartment;
        const matchesjobType = selectedjobType === "All" || item.jobType === selectedjobType;

        if (matchesSearch && matchesDepartment && matchesjobType) {
            if (!acc[item.department]) {
                acc[item.department] = [];
            }
            acc[item.department].push(item);
        }
        return acc;
    }, {});

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    // Modified click handlers to handle "All" state
    const handleDepartmentClick = (department) => {
        setSelectedDepartment(department === selectedDepartment ? "All" : department);
    };

    const handlejobTypeClick = (jobType) => {
        setSelectedjobType(jobType === selectedjobType ? "All" : jobType);
    };

    // Get unique departments and jobTypes
    const uniqueDepartments = ["All", ...new Set(data.map(item => item.department))];
    const uniquejobTypes = ["All", ...new Set(data.map(item => item.jobType))];

    return (
        <div>
            <div className="position-bg space px-4 text-center d-flex align-items-center justify-content-center flex-column gap-3" style={{ height: "600px" }}>
                <h1 className="fw-bold">Join a Team That Fuels Your <br></br>Growth and Success</h1>
                <p>Be part of a team that values your potential, encourages your growth, and inspires you to achieve greatness. <br></br>Together, we create a culture of success, innovation, and support.</p>
                <img src={jobseeker} alt="jobseeker" className="img-fluid jobseeker" />
                <img src={recruiter} alt="recruiter" className="img-fluid recruiter" />
                <Button
                    className='border-0 rounded-pill text-white px-5 py-3 arrow-rotate-box'
                    style={{
                        fontSize: "16px",
                        background: "#0777AB",
                    }}
                    onClick={scrollToOpenPosition}
                >
                    <span
                        className='pe-2 text-white text-decoration-none m-0'
                        style={{ fontSize: "16px" }}
                    >
                        Open Position
                    </span>
                    <FontAwesomeIcon icon={faArrowRight} className='arrow-rotate' />
                </Button>
            </div>

            <Container className="px-4">
                <div className="text-center py-5 my-5">
                    <small className="bg-gray fs-6">Hiring</small>
                    <h1 className="w-75 mx-auto fw-bold" style={{ textShadow: '0px 3px 0px #0777AB', color: "#132028" }}>
                        "Spark Your Passion"
                    </h1>
                </div>

                <Row id="open-position-section" className="d-flex justify-content-center border rounded-4 px-4 pb-5 mb-5" style={{ background: "#FAFAFA" }}>
                    <h2 className="pt-5 text-center">Open Position</h2>
                    <Col xs={12} lg={12} className="pt-4">
                        <div className="rounded-3">
                            <div className="search-bar-container my-2">
                                <input
                                    type="text"
                                    placeholder="Search for a job or department"
                                    className="search-input"
                                    value={searchTerm}
                                    onChange={handleSearch}
                                />
                                <button className="search-button">
                                    <span role="img" aria-label="search-icon"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                                </button>
                            </div>

                            <div className="py-3">
                                <h5>Department</h5>
                                <div className="d-flex align-items-center gap-3 flex-wrap py-2">
                                    {uniqueDepartments.map((department, index) => (
                                        <span
                                            key={index}
                                            className={`department ${selectedDepartment === department ? 'active' : ''}`}
                                            style={{
                                                opacity: searchTerm && !department.toLowerCase().includes(searchTerm.toLowerCase()) ? 0.5 : 1,
                                                cursor: 'pointer',
                                                backgroundColor: selectedDepartment === department ? '#0777AB' : '#f0f0f0',
                                                color: selectedDepartment === department ? 'white' : 'black'
                                            }}
                                            onClick={() => handleDepartmentClick(department)}
                                        >
                                            {department}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="py-3">
                                <h5>Job Type</h5>
                                <div className="d-flex align-items-center gap-3 flex-wrap py-2">
                                    {uniquejobTypes.map((jobType, index) => (
                                        <span
                                            key={index}
                                            className={`department ${selectedjobType === jobType ? 'active' : ''}`}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: selectedjobType === jobType ? '#0777AB' : '#f0f0f0',
                                                color: selectedjobType === jobType ? 'white' : 'black'
                                            }}
                                            onClick={() => handlejobTypeClick(jobType)}
                                        >
                                            {jobType}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} lg={12} className="pb-5">
                        <div className="my-4">
                            {Object.keys(departments).map((department, index) => (
                                <div key={index}>
                                    <h5 className="fw-bold py-2">{department}</h5>
                                    {departments[department].map((item, index) => (
                                        <Row key={index} className="position-main my-3" onClick={() => handleJobClick(item._id)}>
                                            <Col xs={11}>
                                                <p className="fs-5 ms-2">{item.name}</p>
                                                <div className="d-flex flex-wrap">
                                                    <span className="department mx-2"><FontAwesomeIcon icon={faLocationDot} className="pe-2" /> surat</span>
                                                    <span className="department mx-2"><FontAwesomeIcon icon={faBusinessTime} className="pe-2" />{item.jobType}</span>
                                                    <span className="department mx-2"><FontAwesomeIcon icon={faUserTag} className="pe-2" />{item.experience}</span>
                                                </div>
                                            </Col>
                                            <Col xs={1}>
                                                <FontAwesomeIcon icon={faUpRightFromSquare} style={{ color: "0777AB" }} className="right-icon" />
                                            </Col>
                                        </Row>
                                    ))}
                                </div>
                            ))}
                            {Object.keys(departments).length === 0 && (
                                <p className="text-center py-4">No positions match your search criteria.</p>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Position;