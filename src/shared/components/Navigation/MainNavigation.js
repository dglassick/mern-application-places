import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import TopNav, {
  TopNavTitle,
  TopNavLink,
  TopNavActionsList
} from 'calcite-react/TopNav';
import GlobeIcon from 'calcite-ui-icons-react/GlobeIcon';

import { AuthContext } from '../../context/auth-context';

import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
import './MainNavigation.css';

const MainNavigation = props => {
  const auth = useContext(AuthContext);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className='main-navigation__drawer-nav'>
          <NavLinks />
        </nav>
      </SideDrawer>

      <TopNav>
        <button
          className='main-navigation__menu-btn'
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <TopNavTitle href='/'>
          <GlobeIcon size={16} />
          YourPlaces
        </TopNavTitle>
        <NavLinks />
        <TopNavActionsList>
          {auth.isLoggedIn && (
            <TopNavLink as={Link} onClick={auth.logout}>
              LOGOUT
            </TopNavLink>
          )}
        </TopNavActionsList>
      </TopNav>
    </React.Fragment>
  );
};

export default MainNavigation;
