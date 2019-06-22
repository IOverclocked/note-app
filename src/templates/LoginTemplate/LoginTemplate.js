import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import logoIcon from 'assets/logo.svg';
import { routes } from 'routes';

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.notes};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLogo = styled(NavLink)`
  display: block;
  width: 200px;
  height: 200px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 80%;
  border: none;
`;

const LoginTemplate = ({ children }) => (
  <StyledWrapper>
    <StyledLogo to={routes.home} />
    <Heading>Your new favorite online notes experience</Heading>
    {children}
  </StyledWrapper>
);

LoginTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LoginTemplate;
