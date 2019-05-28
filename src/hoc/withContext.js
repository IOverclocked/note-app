import React from 'react';
import PageContext from 'context';

const withContext = Component => {
  return function withComponent(props) {
    return (
      <PageContext.Consumer>
        {pageContext => <Component {...props} pageContext={pageContext} />}
      </PageContext.Consumer>
    );
  };
};

export default withContext;
