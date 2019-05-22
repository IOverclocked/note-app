import React from 'react';
import DetailsTemplate from 'templates/DetailsTemplate/DetailsTemplate';
import PageTemplate from 'templates/PageTemplate/PageTemplate';

const Details = match => (
  <PageTemplate pageType={match.path}>
    <DetailsTemplate />
    {console.log(match)}
  </PageTemplate>
);

export default Details;
