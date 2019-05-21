import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

const TabTemplete = ({ children }) => (
  <>
    <Sidebar />
    {children}
  </>
);

TabTemplete.propTypes = {
  children: PropTypes.element.isRequired,
};

export default TabTemplete;
