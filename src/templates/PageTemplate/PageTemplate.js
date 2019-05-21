import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';

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
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const PageTemplate = ({ children, pageType }) => (
  <StyledWrapper>
    <Sidebar activeColor={pageType} />
    <SearchWrapper>
      <Input search placeholder="search..." />
      <StyledHeading>Notes</StyledHeading>
      <StyledParagraph>6 notes</StyledParagraph>
    </SearchWrapper>
    <StyledGridWrapper>{children}</StyledGridWrapper>
  </StyledWrapper>
);

PageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.string,
};

PageTemplate.defaultProps = {
  pageType: 'note',
};

export default PageTemplate;
