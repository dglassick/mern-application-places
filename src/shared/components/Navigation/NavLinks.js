import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { TopNavList, TopNavLink } from 'calcite-react/TopNav';

import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = props => {
  const auth = useContext(AuthContext);

  return (
    <TopNavList>
      <TopNavLink as={NavLink} to='/' exact>
        ALL USERS
      </TopNavLink>
      {auth.isLoggedIn && (
        <TopNavLink as={NavLink} to={`/${auth.userId}/places`}>
          MY PLACES
        </TopNavLink>
      )}
      {auth.isLoggedIn && (
        <TopNavLink as={NavLink} to='/places/new'>
          ADD PLACE
        </TopNavLink>
      )}
      {!auth.isLoggedIn && (
        <TopNavLink as={NavLink} to='/auth'>
          AUTHENTICATE
        </TopNavLink>
      )}
    </TopNavList>
  );
};

export default NavLinks;
