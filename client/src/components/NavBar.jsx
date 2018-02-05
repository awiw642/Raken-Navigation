import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  border: 1px solid #eaeaea;
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

const Popover = styled.span`
  position: absolute;
  transform: translate(0,10px);
  background-color: #FFFFFF;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  border-radius: 5px;
  width: 13em;

  &:before {
    position: absolute;
    z-index: -1;
    content: '';
    right: calc(100% - 11em);
    top: -0.7em;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent #ffffff transparent;
  }
`;

const PopoverWrapper = styled.div`
  display: none;
  position: absolute;
  margin-left: -7.7em;

  &:hover {
    display: block;
  }
`;

const DisplayPicture = styled.img`
  width: 5em;
`;

const DisplayDiv = styled.div`
  display: inline-block;
  margin-left: 2em;
  padding: 1em;
  border-left: 1px solid #eaeaea;

  & ${DisplayPicture}:hover + ${PopoverWrapper} {
    display: block;
  }

  @media (max-width: 640px) {
    border: none;
  }
`;

const NavHeader = styled.div`
  justify-self: start;
  align-self: center;
  margin-bottom: 0;
  font-family: roboto;
  font-size: 1.2em;
  color: #7f7979;
  margin-left: 1em;

  @media (max-width: 640px) {
    grid-column: 1/5;
    justify-self: center;
  }
`;

const List = styled.ul`
  font-family: roboto;
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const ListItem = styled.li`
  padding: 1em;
  font-size: 0.9em;

  &:after {
    position: relative;
    top: 1.05em;
    content: '';
    display: block;
    width: 100%;
    height: 0.07em;
    background: #d3d2d3;
  }

  &:hover {
    background-color: #d3d2d3;
    border: 0.05em solid #d3d2d3;
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
      <Popover>
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
        <DisplayDiv>
          <DisplayPicture alt="userIcon" src="https://thumb.ibb.co/di8Vdx/userIcon.png" />
          {UserMenu}
        </DisplayDiv>
      </Menu>
    </NavWrapper>
  );
};

export default NavBar;
