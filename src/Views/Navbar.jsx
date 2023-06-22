import React from 'react';
import { LeftContainer, NavbarContainer, NavbarExtendedContainer, NavbarInnerContainer, NavbarLinkContainer, RightContainer } from './styles/NavStyle';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <NavbarContainer>
        <NavbarInnerContainer>
        <LeftContainer>
            <NavbarLinkContainer> 
                <Link to="/"> Home</Link>
                <Link to="/courses"> Courses</Link>
                <Link to="/students"> Students</Link>
                <Link to="/instructor"> Instructor</Link>
            </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>

        </RightContainer>
        </NavbarInnerContainer>
        <NavbarExtendedContainer>

        </NavbarExtendedContainer>
        </NavbarContainer>
  
  ); 
};

export default Navbar;