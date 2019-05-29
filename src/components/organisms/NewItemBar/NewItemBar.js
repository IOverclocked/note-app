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
`;

const StyledTextarea = styled(Input)`
  margin: 20px 0;
  height: 40vh;
  resize: none;
  border-radius: 30px;
`;

const StyledButton = styled(Button)`
  margin: 40px 0;
`;

class NewItemBar extends Component {
  static propTypes = {
    pageContext: PropTypes.oneOf(['notes', 'articles', 'twitters']),
  };

  static defaultProps = {
    pageContext: 'notes',
  };

  state = {};

  render() {
    const { pageContext } = this.props;
    return (
      <StyledWrapper activecolor={pageContext}>
        <Heading>Create new {pageContext}</Heading>
        <Input placeholder="title" />
        <StyledTextarea as="textarea" placeholder="title" />
        <StyledButton activecolor={pageContext}>ADD NOTE</StyledButton>
      </StyledWrapper>
    );
  }
}

export default withContext(NewItemBar);
