import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/link.svg';

const Wrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px ${({ theme }) => theme.shadow};
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
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

const DateInfo = styled(Paragraph)`
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
  border: 10px solid ${({ theme }) => theme.twitter};
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

const Card = ({ cardType }) => (
  <Wrapper>
    <InnerWrapper activeColor={cardType}>
      <StyledHeading>Hello note</StyledHeading>
      <DateInfo>3 days</DateInfo>
      {cardType === 'twitter' && <TwitterAvatar avatar="https://avatars.io/twitter/reactjs" />}
      {cardType === 'article' && <ArticleLink href="#" />}
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>
        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet. Lorem
        ipsum dolor sit amet Lorem ipsum dolor sit amet.
      </Paragraph>
      <Button secondary>Remove</Button>
    </InnerWrapper>
  </Wrapper>
);

Card.propTypes = {
  cardType: PropTypes.oneOf(['note', 'article', 'twitter']),
};

Card.defaultProps = {
  cardType: 'note',
};

export default Card;
