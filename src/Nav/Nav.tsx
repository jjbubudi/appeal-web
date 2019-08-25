import React, { useState } from 'react';
import { Nav as NavR, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap';
import { NavLink as RRNavLink } from "react-router-dom";

interface NavProps {
  logout(): void
}

export const Nav: React.FC<NavProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Navbar color="primary" dark expand="lg">
      <NavbarBrand tag={RRNavLink} to="/">Appeal</NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <NavR className="mr-auto" navbar>
          <NavItem onClick={() => setIsOpen(false)}>
            <NavLink tag={RRNavLink} to="/" activeClassName="active">Transactions</NavLink>
          </NavItem>
        </NavR>
        <NavR navbar>
          <NavItem>
            <NavLink href="#" onClick={() => props.logout()}>Logout</NavLink>
          </NavItem>
        </NavR>
      </Collapse>
    </Navbar>
  );
};
