import React from 'react';
import PageContext from 'context';

const withContext = Component => {
  return function withComponent(props) {
    return (
      <PageContext.Consumer>
        {context => {
          return <Component {...props} context={context} />;
        }}
      </PageContext.Consumer>
    );
  };
};

export default withContext;
