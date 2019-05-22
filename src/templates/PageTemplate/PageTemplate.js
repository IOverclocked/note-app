import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

const PageTemplate = ({ children, pageType }) => (
  <>
    <Sidebar activeColor={pageType} />
    {children}
  </>
);

PageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
  pageType: PropTypes.string,
};

PageTemplate.defaultProps = {
  pageType: 'notes',
};

export default PageTemplate;
