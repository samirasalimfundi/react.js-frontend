import { Link } from 'react-router-dom';
import styled from "@emotion/styled";

export const NavbarContainer = styled.nav`
width: 100% ;
height: 60px;
background-color: Black;
display: flex;
flex-direction: column;
`;
export const LeftContainer = styled.div`
flex: 30%;
display: flex;
justify-content: flex-end;
padding-right: 50px;

`;
export const RightContainer = styled.div`
flex: 30%;
display: flex;
justify-content: flex-end;
padding-right: 50px;
`;
export const NavbarInnerContainer = styled.div`
width: 100%;
height: 80px;
display: flex;
`;
export const NavbarLinkContainer = styled.div`
display: flex;
`;
export const NavLink = styled(Link)`
color: white;
font-size: x-large;
font-family: Arial, Helvetica, sans-serif;
text-decoration: none;
margin: 20px;

`;


export const NavbarExtendedContainer = styled.div`
width: 100%;
height: 80px;
display: flex;
`;