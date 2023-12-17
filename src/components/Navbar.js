// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import styled from 'styled-components';
import { FaHome, FaUser } from 'react-icons/fa';

const NavbarContainer = styled.nav`
  background: #F3ABB6;
  padding: 8px;
`;

const NavbarList = styled.ul`
  list-style: none;
  margin-top: 3px;
  margin-left: 35px;
  margin-right: 35px;
  padding: 0px;
  display: flex;
  justify-content: space-between; /* Center the flex items horizontally */
`;

const NavbarItem = styled.li`
  a {
    text-decoration: none;
    font-family: 'Times New Roman', Times, serif;
    font-size: 25px;
    letter-spacing: 1px;
    border-radius: 5px; /* Border radius for a pill-like appearance */
    transition: background-color 0.3s ease;
    color: white;
    padding: 5px;
    background: #fff;
    color: #03045e;
    border: 3px solid #03045e;
  }

  &:hover a {
    // color: #fff;
    background-color: #FFCAD4; /* Change background color on hover */
  }
`;

const HomeIcon = styled(FaHome)`
  position: absolute; /* Position the icon absolutely */
  top: 5%; /* Center vertically */
  left: 140px; /* Adjust the spacing between the text and icon */
  transform: translateY(-50%); /* Center vertically */
`;

const UserIcon = styled(FaUser)`
position: absolute; /* Position the icon absolutely */
top: 5%; /* Center vertically */
right: 250px; /* Adjust the spacing between the text and icon */
transform: translateY(-50%); /* Center vertically */
`;


const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarList>
        <NavbarItem>
          <Link to="/" className="nav-link">Home<HomeIcon /></Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/employee-form" className="nav-link">Employee Form<UserIcon /></Link>
        </NavbarItem>
      </NavbarList>
    </NavbarContainer>
  );
};

export default Navbar;
