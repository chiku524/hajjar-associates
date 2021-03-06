import React, {useState} from "react";
import { Link } from 'react-router-dom'
import {Navbar, NavbarBrand, Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu} from 'reactstrap';
import blueLogoNoText from '../images/blueLogoNoText.png'

const NavBar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);

    return(
        <>
            <Navbar light fixed='top' expand="xs" className='navbar'>
                <Link to='/home'>
                    <NavbarBrand to="/home" className='navbarLogo'>
                        <img src={blueLogoNoText} alt='hajjarLogo' />
                    </NavbarBrand>
                </Link>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <Link to="/home" className="nav-link">
                            Home
                        </Link>
                    </NavItem>
                    <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle nav caret>
                            Services
                        </DropdownToggle>
                        <DropdownMenu>
                            <Link to='/consulting'>
                                <DropdownItem>Consulting</DropdownItem>
                            </Link>
                            <Link to='/construction'>
                                <DropdownItem>Construction</DropdownItem>
                            </Link>
                            <Link to='/development'>
                                <DropdownItem>Development</DropdownItem>
                            </Link>
                        </DropdownMenu>
                    </Dropdown>
                    <NavItem>
                        <Link to="/about" className="nav-link">
                            About
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/contact" className="nav-link">
                            Contact
                        </Link>
                    </NavItem>
                </Nav>
            </Navbar>
        </>
    )
}

export default NavBar;