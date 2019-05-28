import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContentPageTemplate from 'templates/ContentPageTemplate/ContentPageTemplate';
import Card from 'components/molecules/Card/Card';

const Articles = ({ articles }) => (
  <ContentPageTemplate>
    {articles.map(({ id, title, created, content, articleUrl }) => (
      <Card
        key={id}
        id={id}
        title={title}
        created={created}
        content={content}
        articleUrl={articleUrl}
      />
    ))}
  </ContentPageTemplate>
);

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired,
    }),
  ),
};

Articles.defaultProps = {
  articles: [],
};

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(Articles);
