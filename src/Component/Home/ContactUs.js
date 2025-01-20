import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { toast } from "react-toastify";
import axios from "axios";
import * as Yup from 'yup';
import { useFormik } from "formik";
import 'react-toastify/dist/ReactToastify.css';


const ContactUs = () => {
    const Schema = Yup.object().shape({
        Name: Yup.string().required('* First name is required'),
        Lastname: Yup.string(),
        Mobile: Yup.string()
            .matches(/^\+91[0-9]{10}$/, '* Phone number must be valid')
            .required('* Phone number is required'),
        Email: Yup.string().email('* Invalid email format').required('* Email is required'),
        Message: Yup.string().required('* Message is required'),
    });

    const formik = useFormik({
        initialValues: {
            Name: '',
            Lastname: '',
            Mobile: '',
            Email: '',
            Message: ''
        },
        validationSchema: Schema,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            try {
                const formData = new FormData();
                formData.append('fname', values.Name);
                formData.append('lname', values.Lastname);
                formData.append('mobile', values.Mobile);
                formData.append('email', values.Email);
                formData.append('message', values.Message);

                if (values.id) {
                      await axios.patch(`https://plexus-technology.in/api/user/update/${values.id}`, formData);
                } else {
                     await axios.post('https://plexus-technology.in/api/user/create', formData, {
                        headers: { "Content-Type": "multipart/form-data" }
                    });
                }

                toast.success('Message send successfully!');
                setSubmitting(false);
                resetForm();
            } catch (error) {
                console.error('Form submission error:', error);
                toast.error("An error occurred. Please try again.");
                setSubmitting(false);
            }
        },
    });
    return (
        <>

            <div className="position-bg space px-4 text-center d-flex flex-column position-relative" style={{ height: "300px" }}>
                <h2 className="pt-5 mt-4" style={{ textShadow: '0px 3px 0px #0777AB', color: "#132028", fontWeight: "600" }}>Contact us</h2>
            </div>
            <Container className="px-5" style={{ minHeight: "100vh" }}>
                <div className="bg-white rounded-5 white-box shadow">
                    <div className="white-mini">
                        <h3 style={{ color: "#0777AB" }}>Send us a message</h3>
                        <p className="space">Reach out to us and let’s discuss how.<br></br>
                            We’re here to listen and help you achieve your goals.</p>

                        <section className="pt-5 mx-auto">
                            <Form onSubmit={formik.handleSubmit}>
                                <Row>
                                    <Col sm={6}>
                                        <FormGroup>
                                            <Label for="Name">First Name </Label>
                                            <Input
                                                id="Name"
                                                name="Name"
                                                type="text"
                                                placeholder="First Name"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Name}
                                                className="py-2"
                                            />
                                            {formik.touched.Name && formik.errors.Name && (
                                                <div className="text-danger error-message">{formik.errors.Name}</div>
                                            )}
                                        </FormGroup>
                                    </Col>

                                    <Col sm={6}>
                                        <FormGroup>
                                            <Label for="Lastname">Last Name </Label>
                                            <Input
                                                id="Lastname"
                                                name="Lastname"
                                                type="text"
                                                placeholder="Last Name"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Lastname}
                                                className="py-2"
                                            />
                                            {formik.touched.Lastname && formik.errors.Lastname && (
                                                <div className="text-danger error-message">{formik.errors.Lastname}</div>
                                            )}
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <FormGroup className="pt-3">
                                    <Label for="Mobile">Phone number </Label>
                                    <Input
                                        id="Mobile"
                                        name="Mobile"
                                        type="text"
                                        placeholder="+91 00000-00000"
                                        onChange={e => {
                                            // Allow only numeric input
                                            const inputValue = e.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
                                            if (!inputValue.startsWith('91')) {
                                                formik.setFieldValue('Mobile', '+91' + inputValue.slice(0, 10));
                                            } else {
                                                formik.setFieldValue('Mobile', '+91' + inputValue.slice(2, 12)); // Limit to 10 digits after +91
                                            }
                                        }}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.Mobile}
                                        className="py-2"
                                        onInput={(e) => {
                                            const inputValue = e.target.value;
                                            // Show error if input contains non-numeric characters
                                            if (/\D/.test(inputValue)) {
                                                formik.setFieldError('mobile', 'Please enter only numeric values.');
                                            } else if (inputValue.length > 13) { // +91 + 10 digits = 13 characters
                                                formik.setFieldError('mobile', 'Phone number should only be 10 digits.');
                                            } else {
                                                formik.setFieldError('mobile', null);
                                            }
                                        }}
                                    />
                                    {formik.touched.Mobile && formik.errors.Mobile && (
                                        <div className="text-danger error-message">{formik.errors.Mobile}</div>
                                    )}
                                </FormGroup>

                                <FormGroup className="pt-3">
                                    <Label for="Email">Email </Label>
                                    <Input
                                        id="Email"
                                        name="Email"
                                        type="email"
                                        placeholder="you@company.com"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.Email}
                                        className="py-2"
                                    />
                                    {formik.touched.Email && formik.errors.Email && (
                                        <div className="text-danger error-message">{formik.errors.Email}</div>
                                    )}
                                </FormGroup>

                                <FormGroup className="pt-3">
                                    <Label for="Message">Message </Label>
                                    <Input
                                        id="Message"
                                        name="Message"
                                        type="textarea" // specify type as 'textarea' for multiline input
                                        placeholder="Leave us a message..."
                                        rows={5}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.Message}
                                        className="py-2"
                                    />
                                    {formik.touched.Message && formik.errors.Message && (
                                        <div className="text-danger error-message">{formik.errors.Message}</div>
                                    )}
                                </FormGroup>

                                <Button
                                    type="submit"
                                    block
                                    disabled={formik.isSubmitting}
                                    className="py-3 rounded-pill border-white"
                                    style={{ backgroundColor: "#0777AB"}}
                                >
                                    {formik.isSubmitting ? "Sending..." : "Send Message"}
                                </Button>
                            </Form>
                        </section>
                    </div>
                </div>
                <div className="rounded-5 blue-box">
                    <p className="fs-5">Hi! We are always here to help you.</p>
                    <Row className="p-3 my-3 ">
                        <Col xs={2}>
                            <FontAwesomeIcon icon={faPhone} className="fs-5 pt-2" />
                        </Col>
                        <Col xs={10}>
                            <p className="m-0">HR:</p>
                            <p className="m-0">+91 90238 38674</p>
                        </Col>
                    </Row>
                    <Row className="p-3 my-3">
                        <Col xs={2}>
                            <FontAwesomeIcon icon={faEnvelope} className="fs-5 pt-2" />
                        </Col>
                        <Col xs={10}>
                            <p className="m-0">Help:</p>
                            <p className="m-0">hr.plexustechnology@gmail.com</p>
                        </Col>
                    </Row>
                    <Row className="p-3 my-3">
                        <Col xs={2}>
                            <FontAwesomeIcon icon={faLinkedinIn} className="fs-5 pt-2" />
                        </Col>
                        <Col xs={10}>
                            <p className="m-0">Linkedin:</p>
                            <p className="m-0">Plexus Technology</p>
                        </Col>
                    </Row>
                    <Row className="p-3 my-3">
                        <Col xs={2}>
                            <FontAwesomeIcon icon={faLocationDot} className="fs-5 pt-2" />
                        </Col>
                        <Col xs={10}>
                            <p className="m-0">Address:</p>
                            <p className="m-0">305, A.R Mall, opp. panvel point,
                                mota varachha, 394101</p>
                        </Col>
                    </Row>
                </div>
            </Container>

        </>
    );
};

export default ContactUs;
