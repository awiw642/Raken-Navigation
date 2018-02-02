import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  border: 1px solid #EAEAEA;
  padding: 1em;
  background-color: #F7F7F7;
  margin-top: 1em;
  justify-items: end;
  align-items: center;
`;

const Menu = styled.div`
  grid-column: 3/5;
  `;

const Link = styled.a`
  &:hover {
    color: orange;
    text-decoration: none;
  }
  margin-left: 2em;
  font-family: roboto;
  color: #7f7979;
`;

const DisplayPicture = styled.span`
  margin-left: 2em;
  padding: 1em;
  border-left: 1px solid #EAEAEA;
`;

const NavHeader = styled.div`
  justify-self: start;
  font-family: roboto;
  font-size: 1.2em;
  color: #7f7979;
`;

const NavBar = (props) => (
  <NavWrapper>
    <NavHeader>COMPANY NAME</NavHeader>
    <Menu>
      <Link>DASHBOARD</Link>
      <Link>PROJECTS</Link>
      <Link>TEAM</Link>
      <Link>COMPANY</Link>
      <DisplayPicture><img src={require('../images/userIcon.png')} /></DisplayPicture>
    </Menu>

  </NavWrapper>
);

export default NavBar;
