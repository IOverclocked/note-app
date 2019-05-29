import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withContext from 'hoc/withContext';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  padding: 40px;
  width: 500px;
  border-left: 5px solid ${({ theme, activecolor }) => theme[activecolor]};
  transform: translateX(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.4s ease-in-out;
`;

const StyledTextarea = styled(Input)`
  height: 40vh;
  resize: none;
  border-radius: 30px;
`;

const StyledInput = styled(Input)`
  margin: 0 0 20px;
`;

const StyledButton = styled(Button)`
  margin: 40px 0;
`;

class NewItemBar extends Component {
  static propTypes = {
    pageContext: PropTypes.oneOf(['notes', 'articles', 'twitters']),
    isVisible: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    pageContext: 'notes',
  };

  state = {};

  render() {
    const { pageContext, isVisible } = this.props;
    return (
      <StyledWrapper activecolor={pageContext} isVisible={isVisible}>
        <Heading>Create new {pageContext}</Heading>
        <StyledInput
          placeholder={pageContext === 'twitters' ? "Twitter name eg. 'reactj'" : 'title'}
        />
        {pageContext === 'articles' && <StyledInput placeholder="Link" />}
        <StyledTextarea as="textarea" placeholder="Content..." />
        <StyledButton activecolor={pageContext}>ADD NOTE</StyledButton>
      </StyledWrapper>
    );
  }
}

export default withContext(NewItemBar);
