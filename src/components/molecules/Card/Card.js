import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from 'actions';
import { Redirect } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/link.svg';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px ${({ theme }) => theme.shadow};
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const StyledInnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.white)};

  :first-of-type {
    z-index: 999;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const SrtledCreatedInfo = styled(Paragraph)`
  margin: 5px 0 0;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const TwitterAvatar = styled.div`
  width: 86px;
  height: 86px;
  border: 10px solid ${({ theme }) => theme.twitters};
  border-radius: 50%;
  background: ${({ theme }) => theme.white} url(${({ avatar }) => avatar});
  background-position: contain;
  background-size: 100%;
  background-repeat: no-repeat;
  position: absolute;
  top: 25px;
  right: 20px;
`;

const ArticleLink = styled.a`
  display: block;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: ${({ theme }) => theme.white} url(${LinkIcon});
  background-size: 60%;
  background-position: 50%;
  background-repeat: no-repeat;
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
`;

class Card extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const {
      pageContext,
      id,
      title,
      created,
      twitterName,
      articleLink,
      content,
      removeItem,
    } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`${pageContext}/${id}`} />;
    }

    return (
      <StyledWrapper onClick={this.handleCardClick}>
        <StyledInnerWrapper activeColor={pageContext}>
          <StyledHeading>{title}</StyledHeading>
          <SrtledCreatedInfo>{created}</SrtledCreatedInfo>
          {pageContext === 'twitters' && (
            <TwitterAvatar avatar={`https://avatars.io/twitter/${twitterName}`} />
          )}
          {pageContext === 'articles' && <ArticleLink href={articleLink} />}
        </StyledInnerWrapper>
        <StyledInnerWrapper flex>
          <Paragraph>{content}</Paragraph>
          <Button onClick={() => removeItem(pageContext, id)} secondary>
            Remove
          </Button>
        </StyledInnerWrapper>
      </StyledWrapper>
    );
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  pageContext: PropTypes.oneOf(['notes', 'articles', 'twitters']),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleLink: PropTypes.string,
  removeItem: PropTypes.func.isRequired,
};

Card.defaultProps = {
  pageContext: 'notes',
  twitterName: null,
  articleLink: null,
};

const mapDispatchToProps = dispatch => ({
  removeItem: (itemType, id) => dispatch(removeItemAction(itemType, id)),
});

export default connect(
  null,
  mapDispatchToProps,
)(withContext(Card));
