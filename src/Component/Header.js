/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Hook to get the current location
import { HashLink as Link } from 'react-router-hash-link';
import { Container, NavbarBrand, Navbar, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faHome, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons/faBarsStaggered';
import { Link as ScrollLink } from "react-scroll";

// img
import logo from '../img/logo.png';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(""); // Track the active link
    const location = useLocation(); // Get the current location

    const toggle = () => setIsOpen(!isOpen);

    // Update active link based on current path
    useEffect(() => {
        const path = location.pathname;
        if (path === "/") {
            setActiveLink("home");
        } else if (path === "/about-us") {
            setActiveLink("about");
        }else if (path === "/portfolio") {
            setActiveLink("portfolio");
        }
    }, [location.pathname]); // Run whenever the path changes

    return (
        <div id="top">
            <Container>
                <Navbar expand="xl" className="h6-nav-bar pt-4">
                    <NavbarBrand href="/">
                        <img
                            src={logo}
                            alt="Plexus"
                            className="img-fluid d-none d-sm-block"  // Default large screen logo
                            style={{ width: '200px' }}
                        />
                        <img
                            src={logo}
                            alt="Plexus"
                            className="img-fluid d-block d-sm-none" // Small screen logo
                            style={{ width: '150px' }}
                        />
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle}>
                        <span>
                            <FontAwesomeIcon icon={faBarsStaggered} className='fs-3' />
                        </span>
                    </NavbarToggler>
                    <Collapse isOpen={isOpen} navbar className="font-18" id="h6-info">
                        <Nav navbar className='ms-auto'>
                            <NavItem>
                                <Link
                                    className={`nav-link px-4 ${activeLink === "home" ? "text-blue" : "text-black"}`}
                                    to="/"
                                    style={{ fontSize: "20px" }}
                                >
                                    <FontAwesomeIcon icon={faHome} className='fs-6 pe-2' />Home
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link
                                    className={`nav-link px-4 ${activeLink === "about" ? "text-blue" : "text-black"}`}
                                    to="/about-us"
                                    style={{ fontSize: "20px" }}
                                >
                                    <FontAwesomeIcon icon={faUserTie} className='fs-6 pe-2' />About us
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link
                                    className={`nav-link px-4 ${activeLink === "portfolio" ? "text-blue" : "text-black"}`}
                                    to="/portfolio"
                                    style={{ fontSize: "20px" }}
                                >
                                    <FontAwesomeIcon icon={faAddressCard} className='fs-6 pe-2' />Portfolio
                                </Link>
                            </NavItem>
                            <NavItem>
                                <ScrollLink
                                    className={`nav-link px-4 ${activeLink === "contact" ? "text-blue" : "text-black"}`}
                                    to="hiringSection"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={200}
                                    style={{ cursor: "pointer", fontSize: "20px" }}
                                    onSetActive={() => setActiveLink("contact")}
                                >
                                    <FontAwesomeIcon icon={faAddressBook} className='fs-6 pe-2' /> Contact us
                                </ScrollLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;
