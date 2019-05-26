import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContentPageTemplate from 'templates/ContentPageTemplate/ContentPageTemplate';
import Card from 'components/molecules/Card/Card';

const Notes = ({ notes }) => (
  <ContentPageTemplate pageType="notes">
    {notes.map(({ id, title, created, content }) => (
      <Card key={id} id={id} title={title} created={created} content={content} cardType="notes" />
    ))}
  </ContentPageTemplate>
);

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

Notes.defaultProps = {
  notes: [],
};

const mapStateToProps = ({ notes }) => ({ notes });

export default connect(mapStateToProps)(Notes);
