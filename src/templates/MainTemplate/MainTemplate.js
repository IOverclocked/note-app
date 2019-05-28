import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import GlobalStyle from 'theme/GlobalStyle';
import theme from 'theme/MainTheme';
import PageContext from 'context';

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
    const { pageType } = this.state;
    return (
      <PageContext.Provider value={pageType}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </PageContext.Provider>
    );
  }
}

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(MainTemplate);
