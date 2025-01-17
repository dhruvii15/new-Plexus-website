import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";

const Hiring = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDepartment, setSelectedDepartment] = useState("");

    // Group by department and filter based on search and selected department
    const departments = data.reduce((acc, item) => {
        // Check if the item matches the search term and department filter
        const matchesSearch = 
            item.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDepartment = !selectedDepartment || item.department === selectedDepartment;

        if (matchesSearch && matchesDepartment) {
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

    const handleDepartmentClick = (department) => {
        setSelectedDepartment(department === selectedDepartment ? "" : department);
    };

    return (
        <div>
            <div className="about-bg mt-1 d-flex align-items-center justify-content-center" style={{ height: "260px" }}>
                <h1 className="hero-title w-100 h-100 m-0 text-center" style={{ background: 'rgba(193, 195, 195, 0.63)', lineHeight: "260px" }}>Hiring</h1>
            </div>

            <Container>
                <div className="text-center py-5">
                    <small className="bg-gray fs-6">Hiring</small>
                    <h2 className="w-75 mx-auto">Are you up to the challenge? Check out our career opportunities!</h2>
                </div>

                <Row className="d-flex justify-content-center">
                    <Col xs={12} lg={4} className="pt-5">
                        <h2 className="py-5">Filters</h2>

                        <div className="search-bar-container my-4">
                            <input
                                type="text"
                                placeholder="Search for a job or department"
                                className="search-input"
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                            <button className="search-button">
                                <span role="img" aria-label="search-icon">🔍</span>
                            </button>
                        </div>

                        <div className="py-3">
                            <h5>Department</h5>
                            <div className="d-flex align-items-center gap-3 flex-wrap py-2">
                                {Array.from(new Set(data.map(item => item.department))).map((department, index) => (
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
                            <h5>Location</h5>
                            <div className="d-flex align-items-center gap-3 flex-wrap py-2">
                                {data
                                    .map((item) => item.location)
                                    .filter((value, index, self) => self.indexOf(value) === index)
                                    .map((location, index) => (
                                        <span key={index} className="department">{location}</span>
                                    ))}
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} lg={8} className="py-5">
                        <h2 className="py-5">Open Positions</h2>

                        <div className="my-4">
                            {Object.keys(departments).map((department, index) => (
                                <div key={index}>
                                    <h5 className="fw-bold py-3">{department}</h5>
                                    {departments[department].map((item, index) => (
                                        <div key={index} className="position-main my-3">
                                            <p className="fs-5">{item.name}</p>
                                            <div>
                                                <span className="department mx-2">{item.position}</span>
                                                <span className="department mx-2">{item.experience}</span>
                                            </div>
                                        </div>
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

export default Hiring;