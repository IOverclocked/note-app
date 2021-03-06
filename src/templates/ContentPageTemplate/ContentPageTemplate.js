import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import withContext from 'hoc/withContext';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/plus.svg';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';
import PageTemplate from '../PageTemplate/PageTemplate';

const StyledWrapper = styled.div`
  position: relative;
  padding: 50px 75px;
`;

const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
  padding: 25px 0 0 0;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1466px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SearchWrapper = styled.div``;

const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.bold};

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  z-index: 10000;
  right: 40px;
  bottom: 40px;
  border-radius: 50%;
  background-size: 35%;
  background-color: ${({ theme, activecolor }) => theme[activecolor]};
`;

class ContentPageTemplate extends Component {
  state = {
    newItemBarVisible: false,
  };

  handleToggleVisible = () => {
    this.setState(prevState => ({
      newItemBarVisible: !prevState.newItemBarVisible,
    }));
  };

  render() {
    const { children, pageContext } = this.props;
    const { newItemBarVisible } = this.state;
    return (
      <PageTemplate>
        <StyledWrapper>
          <SearchWrapper>
            <Input search placeholder="search..." />
            <StyledHeading>{pageContext}</StyledHeading>
            <StyledParagraph>6 {pageContext}</StyledParagraph>
          </SearchWrapper>
          <StyledGridWrapper>{children}</StyledGridWrapper>
          <StyledButtonIcon
            onClick={this.handleToggleVisible}
            icon={plusIcon}
            activecolor={pageContext}
          />
          <NewItemBar isVisible={newItemBarVisible} handleClose={this.handleToggleVisible} />
        </StyledWrapper>
      </PageTemplate>
    );
  }
}

ContentPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
  pageContext: PropTypes.string,
};

ContentPageTemplate.defaultProps = {
  pageContext: 'notes',
};

export default withContext(ContentPageTemplate);
