import React, { Fragment } from 'react';
import {
  Navbar,
  NavbarBrand
} from 'reactstrap';

const Header = () => {
  return (
    <Fragment>
      <Navbar className="header-space" color="light" light expand="md">
        <NavbarBrand>
          <h4 id="title"><span role="img" aria-label="pequena estrela">👋</span> Hi Platform</h4>
        </NavbarBrand>
      </Navbar>
    </Fragment>
  );
}

export default Header;