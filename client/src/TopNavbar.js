import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopNavbar = (props) => {
  let navItems ="";
  if(props.showNavItems) {
    navItems = (
      <div>
        <Link to="/secret"><Navbar.Text>Secret</Navbar.Text></Link>
        <Link to="/secure1"><Navbar.Text>Secure1</Navbar.Text></Link>
        <Link to="/secure2"><Navbar.Text>Secure2</Navbar.Text></Link>
        <Link to="/secure3"><Navbar.Text>Secure3</Navbar.Text></Link>
      </div>
    );
  }
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem onClick={props.onSignOut}>Sign Out</NavItem>
        </Nav>
        {navItems}
      </Navbar.Collapse>
    </Navbar>
  );
};

TopNavbar.propTypes = {
  onSignOut: PropTypes.func.isRequired,
  showNavItems: PropTypes.bool.isRequired
};

export default TopNavbar;
