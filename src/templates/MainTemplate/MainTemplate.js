import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import GlobalStyle from 'theme/GlobalStyle';
import theme from 'theme/MainTheme';

class MainTemplate extends Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    pageType: 'notes',
  };

  componentDidMount() {
    this.setCurrentPageType();
  }

  componentDidUpdate(prevProps, prevState) {
    this.setCurrentPageType(prevState);
  }

  setCurrentPageType = (prevState = '') => {
    const pages = ['notes', 'articles', 'twitters'];
    const {
      // eslint-disable-next-line react/prop-types
      location: { pathname },
    } = this.props;

    const currentPage = pages.find(page => pathname.includes(page));
    if (currentPage !== prevState.pageType) {
      // eslint-disable-next-line react/no-unused-state
      this.setState({ pageType: currentPage });
      // console.log(this.state);
    }
  };

  render() {
    const { children } = this.props;
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </>
    );
  }
}

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withRouter(MainTemplate);
