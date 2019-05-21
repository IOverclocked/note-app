import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/bulb.svg';
import logoutIcon from 'assets/logout.svg';
import penIcon from 'assets/pen.svg';
import twitterIcon from 'assets/twitter.svg';
import logoIcon from 'assets/logo.svg';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  left: 0;
  top: 0;
  padding: 25px 0;
  width: 150px;
  height: 100vh;
  background-color: ${({ theme, activeColor }) =>
    theme && activeColor ? theme[activeColor] : theme.note};
`;

const Logo = styled(NavLink)`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 80%;
  margin: 0 0 10vh 0;
  border: none;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ButtonLogout = styled(ButtonIcon)`
  margin: auto 0 0;
`;

const Sidebar = ({ activeColor }) => (
  <Wrapper activeColor={activeColor}>
    <Logo to="/" />
    <NavList>
      <li>
        <ButtonIcon exact as={NavLink} to="/" icon={penIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} activeclass="active" />
      </li>
    </NavList>
    <ButtonLogout as={NavLink} to="/login" icon={logoutIcon} />
  </Wrapper>
);

Sidebar.propTypes = {
  activeColor: PropTypes.oneOf(['note', 'article', 'twitter']),
};

Sidebar.defaultProps = {
  activeColor: 'note',
};

export default Sidebar;
