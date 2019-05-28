import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import withContext from 'hoc/withContext';
import PageTemplate from '../PageTemplate/PageTemplate';

const StyledWrapper = styled.div`
  padding: 50px 75px;
`;

const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  padding: 25px 0 0 0;
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

const ContentPageTemplate = ({ children, pageContext }) => (
  <PageTemplate>
    <StyledWrapper>
      <SearchWrapper>
        <Input search placeholder="search..." />
        <StyledHeading>{pageContext}</StyledHeading>
        <StyledParagraph>6 {pageContext}</StyledParagraph>
      </SearchWrapper>
      <StyledGridWrapper>{children}</StyledGridWrapper>
    </StyledWrapper>
  </PageTemplate>
);

ContentPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
  pageContext: PropTypes.string,
};

ContentPageTemplate.defaultProps = {
  pageContext: 'notes',
};

export default withContext(ContentPageTemplate);
