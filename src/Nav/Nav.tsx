import React, { useState } from 'react';
import { Nav as NavR, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap';
import { NavLink as RRNavLink } from "react-router-dom";

export const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Navbar color="primary" dark expand="lg">
      <NavbarBrand href="/">Appeal</NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <NavR className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={RRNavLink} to="/" activeClassName="active" exact>Summary</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/transactions" activeClassName="active">Transactions</NavLink>
          </NavItem>
        </NavR>
      </Collapse>
    </Navbar>
  );
};
