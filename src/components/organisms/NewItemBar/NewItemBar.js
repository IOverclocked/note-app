import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';
import PropTypes from 'prop-types';
import withContext from 'hoc/withContext';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { Formik, Form, ErrorMessage } from 'formik';

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.white};
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
  margin: 0 0 10px;
`;

const StyledInput = styled(Input)`
  margin: 0 0 10px;
`;

const StyledButton = styled(Button)`
  margin: 40px 0;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledErrorMessage = styled(ErrorMessage)`
  color: ${({ theme }) => theme.validate};
  margin: 0 0 10px 10px;
`;

class NewItemBar extends Component {
  static propTypes = {
    pageContext: PropTypes.oneOf(['notes', 'articles', 'twitters']),
    isVisible: PropTypes.bool.isRequired,
    addItem: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
  };

  static defaultProps = {
    pageContext: 'notes',
  };

  state = {};

  render() {
    const { pageContext, isVisible, addItem, handleClose } = this.props;
    return (
      <StyledWrapper activecolor={pageContext} isVisible={isVisible}>
        <Heading>Create new {pageContext}</Heading>
        <Formik
          initialValues={{ title: '', content: '', twitterName: '', articleUrl: '', created: '' }}
          validate={values => {
            const errors = {};
            if (!values.title) {
              errors.title = 'This field is required';
            }
            if (!values.content) {
              errors.content = 'This field is required';
            }
            if (pageContext === 'articles' && !values.articleUrl) {
              errors.articleUrl = 'This field is required';
            }
            if (pageContext === 'twitters' && !values.twitterName) {
              errors.twitterName = 'This field is required';
            }
            return errors;
          }}
          onSubmit={values => {
            addItem(pageContext, values);
            handleClose();
          }}
        >
          {({ values, handleChange, handleBlur }) => (
            <StyledForm>
              <StyledInput
                type="text"
                name="title"
                placeholder="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              <StyledErrorMessage name="title" component="div" />
              {pageContext === 'twitters' && (
                <>
                  <StyledInput
                    type="text"
                    name="twitterName"
                    placeholder="twitter name eg. reactjs"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.twitterName}
                  />
                  <StyledErrorMessage name="twitterName" component="div" />
                </>
              )}
              {pageContext === 'articles' && (
                <>
                  <StyledInput
                    type="text"
                    name="articleUrl"
                    placeholder="link"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.articleUrl}
                  />
                  <StyledErrorMessage name="articleUrl" component="div" />
                </>
              )}
              <StyledTextarea
                as="textarea"
                type="textarea"
                name="content"
                placeholder="Content..."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.content}
              />
              <StyledErrorMessage name="content" component="div" />
              <StyledButton type="submit" activecolor={pageContext}>
                Submit
              </StyledButton>
            </StyledForm>
          )}
        </Formik>
      </StyledWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: (itemType, itemContent) => {
      dispatch(addItemAction(itemType, itemContent));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(withContext(NewItemBar));
