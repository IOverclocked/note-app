import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import { withRouter } from 'react-router';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.white};
  width: 400px;
  height: 400px;
  padding: 1em;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledForm = styled(Form)`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled(Input)`
  width: 320px;

  &:nth-of-type(1) {
    margin: 1em 0;
  }

  &:nth-of-type(2) {
    margin: 0 0 3em;
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.black};
  text-transform: uppercase;
  margin: 1em 0 0 0;
`;

const StyledErrorMessage = styled.div`
  color: ${({ theme }) => theme.validate};
`;

class LoginForm extends Component {
  static propsTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  };

  state = {
    isRegister: undefined,
    urlRegister: 'http://localhost:9000/api/user/register',
    urlLogin: 'http://localhost:9000/api/user/login',
  };

  componentDidMount() {
    const {
      location: { pathname },
    } = this.props;
    this.setState({
      isRegister: !pathname.includes('login'),
    });
  }

  componentDidUpdate(prevProps, prevState) {
    this.checkLocation(prevState);
  }

  checkLocation = prevState => {
    if (prevState) {
      const { isRegister } = this.state;
      const {
        location: { pathname },
      } = this.props;
      if (prevState.isRegister === isRegister) {
        this.setState({
          isRegister: !pathname.includes('login'),
        });
      }
    }
  };

  // todo -> dokończyć akcje logowania i rejstracji
  render() {
    const { isRegister, urlLogin, urlRegister } = this.state;
    return (
      <StyledWrapper>
        <Heading>Sign in</Heading>
        <Formik
          initialValues={{ username: '', password: '' }}
          validate={({ username, password }) => {
            const errors = {};
            if (!username) {
              errors.username = 'User name is required';
            } else if (!password) {
              errors.password = 'Password is required';
            }

            // if (isRegister) {
            //   return axios
            //     .post(urlRegister, {
            //       username,
            //       password,
            //     })
            //     .then(res => {
            //       console.log('Success', res);
            //     })
            //     .catch(err => {
            //       console.log('error', err);
            //       throw errors;
            //     });
            // }
            return axios
              .post(urlLogin, {
                username,
                password,
              })
              .then(res => {
                console.log('Success', res);
              })
              .catch(err => {
                console.log('error', err);
                throw errors;
              });
          }}
          onSubmit={({ username, password }) => {
            console.log(username, password);
          }}
        >
          {() => (
            <StyledForm>
              <Field type="text" name="username" placeholder="Login" component={StyledInput} />
              {/* <ErrorMessage name="username" component={StyledErrorMessage} /> */}
              <Field
                type="password"
                name="password"
                placeholder="Password"
                component={StyledInput}
              />
              {/* <ErrorMessage name="password" component={StyledErrorMessage} /> */}
              <Button type="submit" activecolor="notes">
                {isRegister ? 'Register' : 'Login'}
              </Button>
              {isRegister ? (
                <StyledLink to={routes.login}>I want my account!</StyledLink>
              ) : (
                <StyledLink to={routes.register}>I want to log in!</StyledLink>
              )}
            </StyledForm>
          )}
        </Formik>
      </StyledWrapper>
    );
  }
}

export default withRouter(LoginForm);
