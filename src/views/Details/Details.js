import React, { Component } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate/DetailsTemplate';
import { routes } from 'routes/routes';

class Details extends Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    const { match } = this.props;
    switch (match.path) {
      case routes.twitter:
        this.setState({ pageType: 'twitters' });
        break;
      case routes.article:
        this.setState({ pageType: 'articles' });
        break;
      default:
        this.setState({ pageType: 'notes' });
        break;
    }
  }

  render() {
    const { pageType } = this.state;
    return (
      <DetailsTemplate pageType={pageType}>
        <p>Lorem ipsum dolor sit</p>
      </DetailsTemplate>
    );
  }
}

export default Details;
