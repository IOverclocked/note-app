import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContentPageTemplate from 'templates/ContentPageTemplate/ContentPageTemplate';
import Card from 'components/molecules/Card/Card';

const Twitters = ({ twitters }) => (
  <ContentPageTemplate>
    {twitters.map(({ id, title, created, content, twitterName }) => (
      <Card
        key={id}
        id={id}
        title={title}
        created={created}
        content={content}
        twitterName={twitterName}
      />
    ))}
  </ContentPageTemplate>
);

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      twitterName: PropTypes.string.isRequired,
    }),
  ),
};

Twitters.defaultProps = {
  twitters: [],
};

const mapStateToProps = ({ twitters }) => ({ twitters });

export default connect(mapStateToProps)(Twitters);
