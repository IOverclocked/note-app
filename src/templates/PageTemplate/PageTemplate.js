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
  children: PropTypes.element.isRequired,
  pageType: PropTypes.string,
};

PageTemplate.defaultProps = {
  pageType: 'note',
};

export default PageTemplate;
