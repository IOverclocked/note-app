import React from 'react';
import PageTemplate from 'templates/PageTemplate/PageTemplate';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DetailsTemplate = ({ children, pageType }) => (
  <PageTemplate pageType={pageType}>
    {children}
    <Link to="/">go back</Link>
  </PageTemplate>
);

DetailsTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.string,
};

DetailsTemplate.defaultProps = {
  pageType: 'notes',
};

export default DetailsTemplate;
