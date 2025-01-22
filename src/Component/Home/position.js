import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBusinessTime, faLocationDot, faMagnifyingGlass, faUpRightFromSquare, faUserTag } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

// img
import jobseeker from "../../img/jobseeker.png"
import recruiter from "../../img/recruiter.png"

const Position = ({ data }) => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDepartment, setSelectedDepartment] = useState("All");
    const [selectedjobType, setSelectedjobType] = useState("All");

    // const scrollToOpenPosition = () => {
    //     const element = document.getElementById('open-position-section');
    //     if (element) {
    //         const headerOffset = 80;
    //         const elementPosition = element.getBoundingClientRect().top;
    //         const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    //         window.scrollTo({
    //             top: offsetPosition,
    //             behavior: 'smooth'
    //         });
    //     }
    // };

    const handleJobClick = (itemId) => {
        navigate(`/hiring/jobdetails/${itemId}`);
    };

    const departments = data.reduce((acc, item) => {
        if (item.status !== false) {
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
        }
        return acc;
    }, {});

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleDepartmentClick = (department) => {
        setSelectedDepartment(department === selectedDepartment ? "All" : department);
    };

    const handlejobTypeClick = (jobType) => {
        setSelectedjobType(jobType === selectedjobType ? "All" : jobType);
    };

    // Get unique departments and jobTypes from active positions only
    const uniqueDepartments = ["All", ...new Set(data.filter(item => item.status !== false).map(item => item.department))];
    const uniquejobTypes = ["All", ...new Set(data.filter(item => item.status !== false).map(item => item.jobType))];

    return (
        <div>
            <div className="position-bg space px-4 mt-1 text-center d-flex align-items-center justify-content-center flex-column gap-3" style={{ minHeight: "300px" }}>
                <h1 className="fw-bold">Join a Team That Fuels Your <br></br>Growth and Success</h1>
                <p>Be part of a team that values your potential, encourages your growth, and inspires you to achieve greatness. <br></br>Together, we create a culture of success, innovation, and support.</p>
                <img src={jobseeker} alt="jobseeker" className="img-fluid jobseeker" />
                <img src={recruiter} alt="recruiter" className="img-fluid recruiter" />
                {/* <Button
                    className='border-0 rounded-pill text-white px-5 py-3 arrow-rotate-box'
                    style={{
                        fontSize: "16px",
                        background: "#0385C3",
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
                </Button> */}
            </div>

            <Container className="">
                <div className="text-center py-5 my-4">
                    <small className="bg-gray fs-6">Hiring</small>
                    <h1 className="mx-auto fw-bold" style={{ color: "#132028" }}>
                        "Spark Your Passion"
                    </h1>
                </div>

                <Row id="open-position-section" className="d-flex justify-content-center border rounded-4 px-4 pb-5 mb-5" style={{ background: "#FAFAFA" }}>
                    <h2 className="pt-5 text-center">Open Position</h2>
                    <Col xs={12} lg={4} className="pt-5 px-4">
                        <div className="rounded-3 sticky">
                            <div className="search-bar-container my-4">
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
                                                backgroundColor: selectedDepartment === department ? '#0385C3' : '#f0f0f0',
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
                                                backgroundColor: selectedjobType === jobType ? '#0385C3' : '#f0f0f0',
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

                    <Col xs={12} lg={8} className="py-5">
                        <div className="my-3">
                            {Object.keys(departments).map((department, index) => (
                                <div key={index}>
                                    <h4 className="py-2" style={{fontWeight:"600"}}>{department}</h4>
                                    {departments[department].map((item, index) => (
                                        <Row key={index} className="position-main my-3" onClick={() => handleJobClick(item._id)}>
                                            <Col xs={11}>
                                                <p className="fs-6 ms-2">{item.name}</p>
                                                <div className="d-flex flex-wrap">
                                                    <span className="department mx-2 mt-1"><FontAwesomeIcon icon={faLocationDot} className="pe-2" /> surat</span>
                                                    <span className="department mx-2 mt-1"><FontAwesomeIcon icon={faBusinessTime} className="pe-2" />{item.jobType}</span>
                                                    <span className="department mx-2 mt-1"><FontAwesomeIcon icon={faUserTag} className="pe-2" />{item.experience}</span>
                                                </div>
                                            </Col>
                                            <Col xs={1}>
                                                <FontAwesomeIcon icon={faUpRightFromSquare} style={{ color: "0385C3" }} className="right-icon" />
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