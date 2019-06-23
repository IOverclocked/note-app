import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin: 0 0 0 150px;
`;

const PageTemplate = ({ children }) => (
  <StyledWrapper>
    <Sidebar />
    {children}
  </StyledWrapper>
);

PageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default PageTemplate;
