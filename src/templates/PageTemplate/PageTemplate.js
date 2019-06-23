import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { routes } from 'routes';

const StyledWrapper = styled.div`
  margin: 0 0 0 150px;
`;

const PageTemplate = ({ children, userId }) => {
  if (!userId) {
    return <Redirect to={routes.login} />;
  }
  return (
    <StyledWrapper>
      <Sidebar />
      {children}
    </StyledWrapper>
  );
};

PageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
  userId: PropTypes.string,
};

PageTemplate.defaultProps = {
  userId: null,
};

const mapStateToProps = ({ userId }) => ({ userId });

export default connect(mapStateToProps)(PageTemplate);
