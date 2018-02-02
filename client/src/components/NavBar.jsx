import React from 'react';
import styled from 'styled-components';
import { Popover } from 'react-bootstrap';

const NavWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  border: 1px solid #eaeaea;
  padding: 1em;
  background-color: #f7f7f7;
  margin-top: 1em;
  justify-items: end;

  @media (max-width: 640px) {
    justify-items: center;
  }
`;

const Menu = styled.div`
  grid-column: 3/5;
  @media (max-width: 935px) {
    grid-column: 2/5;
  }
  @media (max-width: 640px) {
    grid-column: 1/5;
  }
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

const PopoverWrapper = styled.div`
  display: none;
  position: absolute;
  margin-left: 21em;

  &:hover {
    display: block;
  }
  @media (max-width: 1240px) {
    margin-left: 20em;
  }
`;

const DisplayPicture = styled.img`
  width: 4em;
  @media (max-width: 1240px) {
    width: 2em;
  }
  @media (max-width: 935px) {
    width: 1.5em;
  }
`;

const DisplaySpan = styled.span`
  margin-left: 2em;
  padding: 1em;
  border-left: 1px solid #eaeaea;

  & ${DisplayPicture}:hover + ${PopoverWrapper} {
    display: block;
  }
`;

const NavHeader = styled.div`
  justify-self: start;
  align-self: center;
  margin-bottom: 0.6em;
  font-family: roboto;
  font-size: 1.2em;
  color: #7f7979;

  @media (max-width: 1240px) {
    margin-bottom: 0;
  }

  @media (max-width: 640px) {
    grid-column: 1/5;
    margin-bottom: 1.1em;
    justify-self: center;
  }
`;

const List = styled.ul`
  font-family: roboto;
  list-style-type: none;
  padding: 0;
  width: 11em;
`;

const ListItem = styled.li`
  padding: 1em;
  border-bottom: 1px solid #eaeaea;
  font-size: 0.9em;
  &:hover {
    background-color: #d3d2d3;
  }
`;

const DisplayNumber = styled.div`
  border-radius: 50%;
  width: 1.5em;
  height: 1.5em;
  background: #ea8400;
  float: right;
  text-align: center;
  color: white;
`;

const NavBar = () => {
  const UserMenu = (
    <PopoverWrapper>
      <Popover id="userMenu" placement="bottom" arrowOffsetLeft={140} cellPadding={0}>
        <List>
          <ListItem>MY PROFILE</ListItem>
          <ListItem>
            MY PROJECTS
            <DisplayNumber>20</DisplayNumber>
          </ListItem>
          <ListItem>
            NOTIFICATIONS
            <DisplayNumber>20</DisplayNumber>
          </ListItem>
          <ListItem>
            TASKS
            <DisplayNumber>20</DisplayNumber>
          </ListItem>
          <ListItem>HELP</ListItem>
          <ListItem>LOGOUT</ListItem>
        </List>
      </Popover>
    </PopoverWrapper>
  );

  return (
    <NavWrapper>
      <NavHeader>COMPANY NAME</NavHeader>
      <Menu>
        <Link>DASHBOARD</Link>
        <Link>PROJECTS</Link>
        <Link>TEAM</Link>
        <Link>COMPANY</Link>
        <DisplaySpan>
          <DisplayPicture alt="User Icon" src={require('../images/userIcon.png')} />
          {UserMenu}
        </DisplaySpan>
      </Menu>
    </NavWrapper>
  );
};

export default NavBar;
