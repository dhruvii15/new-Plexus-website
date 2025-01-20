import React, { useState } from "react";
import { Button, Col, Container, Form, FormGroup, FormText, Input, Label, Row } from "reactstrap";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faFile } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';


const ApplyNow = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/hiring');
    };

    const [hiringResume, setHiringResume] = useState('');
    const [id, setId] = useState();

    const hiringSchema = Yup.object().shape({
        hiringName: Yup.string().required('* First name is required'),
        hiringLastname: Yup.string().required('* Last name is required'),
        hiringMobile: Yup.string()
            .matches(/^\+91[0-9]{10}$/, '* Phone number must be valid')
            .required('* Phone number is required'),
        hiringExperience: Yup.string().required('* Work Experience is required'),
        hiringCity: Yup.string().required('* City is required'),
        hiringEmail: Yup.string().email('* Invalid email format').required('* Email is required'),
        hiringResume: Yup.mixed()
            .test('fileType', '* Invalid file format', (value) => {
                if (!value) return true; // Allow empty values
                return ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/rtf', 'text/plain', 'application/vnd.oasis.opendocument.text', 'application/vnd.ms-works', 'application/pdf'].includes(value.type);
            })
            .test('fileSize', 'File size too large', (value) => {
                if (!value) return true; // Allow empty values
                return value.size <= 1024 * 1024; // 1MB limit
            })
            .required('* Upload Resume is required')
    });

    const formik = useFormik({
        initialValues: {
            hiringName: '',
            hiringLastname: '',
            hiringMobile: '',
            hiringExperience: '',
            hiringCity: '',
            hiringEmail: '',
            hiringResume: null
        },
        validationSchema: hiringSchema,
        onSubmit: (values, { setSubmitting, resetForm }) => {
            let formData = new FormData();
            formData.append('fname', values.hiringName);
            formData.append('lname', values.hiringLastname);
            formData.append('mobile', values.hiringMobile);
            formData.append('experience', values.hiringExperience);
            formData.append('city', values.hiringCity);
            formData.append('email', values.hiringEmail);
            formData.append('resume', values.hiringResume);

            const request = id !== undefined
                ? axios.patch(`https://plexus-technology.in/api/hiring/update/${id}`, formData)
                : axios.post('https://plexus-technology.in/api/hiring/create', formData, {
                    headers: { "Content-Type": "multipart/form-data" }
                });

            request.then((res) => {
                setSubmitting(false);
                resetForm();
                setHiringResume('');
                setId(undefined);
                toast.success('Resume upload successfully!');
            }).catch((error) => {
                setSubmitting(false);
                console.error('Form submission error:', error);
                toast.error("An error occurred. Please try again.");
            });
        },
    });

    const handleFileChange = (event) => {
        let file = event.currentTarget.files[0];
        formik.setFieldValue("hiringResume", file);
        setHiringResume(file?.name);

        if (file) {
            // Check file type
            if (!['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/rtf', 'text/plain', 'application/vnd.oasis.opendocument.text', 'application/vnd.ms-works', 'application/pdf'].includes(file.type)) {
                formik.setFieldError('hiringResume', 'Invalid file format. Please upload DOC, DOCX, RTF, TXT, ODT, WPS.');
            } else if (file.size > 1024 * 1024) { // 1MB
                formik.setFieldError('hiringResume', 'File size too large. Please upload a file smaller than 1MB.');
            } else {
                formik.setFieldError('hiringResume', null);
            }
        }
    };


    return (
        <>
            <div className="about-bg mt-1 d-flex align-items-center justify-content-center" style={{ height: "260px" }}>
                <h1 className="hero-title w-100 h-100 m-0 text-center" style={{ background: 'rgba(193, 195, 195, 0.63)', lineHeight: "260px", textShadow: '0px 3px 0px #0777AB', color: "#132028", fontWeight: "600" }}>Apply Now</h1>
            </div>

            <div className="pb-5 my-5 space">
                <Container>
                    <section className="pt-20 mx-auto hiring-form">
                        <div className="mx-auto">

                            <div className="py-5">
                                <p className="cursor" style={{ color: "#79ACEC", fontWeight: "400" }} onClick={handleBackClick} > <FontAwesomeIcon icon={faArrowLeft} className="pe-2" /> Back to all job openings</p>
                                <h3 className="fw-bold">Apply for this job</h3>
                            </div>
                            <Form onSubmit={formik.handleSubmit}>



                                <FormGroup className="pt-3 d-flex flex-column">
                                    <Label for="hiringResume">Upload resume</Label>
                                    <div className="custom-file-upload">
                                        <div className="custom-file-label">
                                            <span className="file-icon">
                                                <FontAwesomeIcon icon={faFile} />
                                            </span>
                                            <span>{hiringResume ? hiringResume : "Upload resume"}</span>
                                            <Input
                                                id="hiringResume"
                                                name="hiringResume"
                                                type="file"
                                                onChange={handleFileChange}
                                                onBlur={formik.handleBlur}
                                                className="py-2"
                                            />
                                            <FormText color="muted">
                                                We accept: DOC, DOCX, RTF, TXT, ODT, PDF, WPS. Size limit: 1MB
                                            </FormText>
                                        </div>
                                        {formik.errors.hiringResume ? (
                                            <div className="text-danger error-message">{formik.errors.hiringResume}</div>
                                        ) : null}
                                    </div>
                                </FormGroup>
                                <Row>
                                    <Col sm={6}>
                                        <FormGroup>
                                            <Label for="hiringName">First Name </Label>
                                            <Input
                                                id="hiringName"
                                                name="hiringName"
                                                type="text"
                                                placeholder="First Name"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.hiringName}
                                                className="py-2"
                                            />
                                            {formik.touched.hiringName && formik.errors.hiringName ? (
                                                <div className="text-danger error-message">{formik.errors.hiringName}</div>
                                            ) : null}
                                        </FormGroup>
                                    </Col>

                                    <Col sm={6}>
                                        <FormGroup>
                                            <Label for="hiringLastname">Last Name </Label>
                                            <Input
                                                id="hiringLastname"
                                                name="hiringLastname"
                                                type="text"
                                                placeholder="Last Name"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.hiringLastname}
                                                className="py-2"
                                            />
                                            {formik.touched.hiringLastname && formik.errors.hiringLastname ? (
                                                <div className="text-danger error-message">{formik.errors.hiringLastname}</div>
                                            ) : null}
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row className="pt-3">
                                    <Col sm={6}>
                                        <FormGroup>
                                            <Label for="hiringMobile">Phone number </Label>
                                            <Input
                                                id="hiringMobile"
                                                name="hiringMobile"
                                                type="text"
                                                placeholder="+91 00000-00000"
                                                onChange={e => {
                                                    // Allow only numeric input
                                                    const inputValue = e.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
                                                    if (!inputValue.startsWith('91')) {
                                                        formik.setFieldValue('hiringMobile', '+91' + inputValue.slice(0, 10));
                                                    } else {
                                                        formik.setFieldValue('hiringMobile', '+91' + inputValue.slice(2, 12)); // Limit to 10 digits after +91
                                                    }
                                                }}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.hiringMobile}
                                                className="py-2"
                                                onInput={(e) => {
                                                    const inputValue = e.target.value;
                                                    // Show error if input contains non-numeric characters
                                                    if (/\D/.test(inputValue)) {
                                                        formik.setFieldError('hiringMobile', 'Please enter only numeric values.');
                                                    } else if (inputValue.length > 13) { // +91 + 10 digits = 13 characters
                                                        formik.setFieldError('hiringMobile', 'Phone number should only be 10 digits.');
                                                    } else {
                                                        formik.setFieldError('hiringMobile', null);
                                                    }
                                                }}
                                            />
                                            {formik.touched.hiringMobile && formik.errors.hiringMobile ? (
                                                <div className="text-danger error-message">{formik.errors.hiringMobile}</div>
                                            ) : null}
                                        </FormGroup>

                                    </Col>

                                    <Col sm={6}>
                                        <FormGroup>
                                            <Label for="hiringExperience">Work experience</Label>
                                            <Input
                                                id="hiringExperience"
                                                name="hiringExperience"
                                                type="select"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.hiringExperience}
                                                className="py-2 overflow-hidden"
                                            >
                                                <option value="" label="Select experience" />
                                                <option value="fresher" label="Fresher" />
                                                <option value="1-3 years" label="1-3 years" />
                                                <option value="3-5 years" label="3-5 years" />
                                                <option value="5+ years" label="5+ years" />
                                            </Input>
                                            {formik.touched.hiringExperience && formik.errors.hiringExperience ? (
                                                <div className="text-danger error-message">{formik.errors.hiringExperience}</div>
                                            ) : null}
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row className="pt-3">
                                    <Col sm={6}>
                                        <FormGroup>
                                            <Label for="hiringCity">City </Label>
                                            <Input
                                                id="hiringCity"
                                                name="hiringCity"
                                                type="text"
                                                placeholder="City"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.hiringCity}
                                                className="py-2"
                                            />
                                            {formik.touched.hiringCity && formik.errors.hiringCity ? (
                                                <div className="text-danger error-message">{formik.errors.hiringCity}</div>
                                            ) : null}
                                        </FormGroup>
                                    </Col>

                                    <Col sm={6}>
                                        <FormGroup>
                                            <Label for="hiringEmail">Email </Label>
                                            <Input
                                                id="hiringEmail"
                                                name="hiringEmail"
                                                type="email"
                                                placeholder="you@company.com"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.hiringEmail}
                                                className="py-2"
                                            />
                                            {formik.touched.hiringEmail && formik.errors.hiringEmail ? (
                                                <div className="text-danger error-message">{formik.errors.hiringEmail}</div>
                                            ) : null}
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row className="py-5 px-2">
                                    <Col sm={6}>
                                        <Link to={'/'} className="text-decoration-none">
                                            <Button block className="py-3 rounded-pill my-2" style={{ background: "none", border: '1px solid #CDCDCD', color: "#CDCDCD" }}>CANCEL</Button>
                                        </Link>
                                    </Col>
                                    <Col sm={6}>
                                        <Button type="submit" block disabled={formik.isSubmitting} className="py-3 rounded-pill border-white my-2" style={{ backgroundColor: "#0777AB" }}>
                                            {formik.isSubmitting ? "..." : "CONTINUE"}
                                        </Button>
                                    </Col>
                                </Row>

                            </Form>
                        </div>
                    </section>

                </Container>

                <ToastContainer />
            </div>

        </>
    );
};

export default ApplyNow;
