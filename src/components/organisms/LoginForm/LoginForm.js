import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import { routes } from 'routes';
import { withRouter } from 'react-router';
import { Formik, ErrorMessage } from 'formik';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import { connect } from 'react-redux';
import { authenticate as authenticateAction, register as registerAction } from 'actions';

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

const StyledForm = styled.form`
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
  margin: 0 0 1em 0;
`;

class LoginForm extends Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
    authenticate: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    userId: PropTypes.string,
  };

  static defaultProps = {
    userId: '',
  };

  state = {
    isRegister: undefined,
  };

  componentDidMount() {
    const {
      location: { pathname },
    } = this.props;
    this.setState({
      isRegister: !pathname.includes('login'),
    });
  }

  toggleForm = () => {
    const { isRegister } = this.state;
    this.setState({
      isRegister: !isRegister,
    });
  };

  render() {
    const { isRegister } = this.state;
    const { authenticate, register, userId } = this.props;
    if (userId) {
      return <Redirect to={routes.home} />;
    }
    return (
      <StyledWrapper>
        <Heading>Sign in</Heading>
        <Formik
          // todo wyświetlanie komunkatów o niepoprawnych danych logowania
          initialValues={{ username: '', password: '' }}
          onSubmit={({ username, password }) => {
            if (isRegister) {
              register(username, password);
            } else {
              authenticate(username, password);
            }
          }}
          validate={({ username, password }) => {
            const errors = {};
            if (!username) {
              errors.username = 'User name is required';
            } else if (!password) {
              errors.password = 'Password is required';
            }

            return errors;
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <StyledForm onSubmit={handleSubmit}>
              <StyledInput
                type="text"
                name="username"
                placeholder="Login"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <ErrorMessage name="username" component={StyledErrorMessage} />
              <StyledInput
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <ErrorMessage name="password" component={StyledErrorMessage} />
              <Button type="submit" activecolor="notes">
                {isRegister ? 'Register' : 'Login'}
              </Button>
              {isRegister ? (
                <StyledLink to={routes.login} onClick={this.toggleForm}>
                  I want my account!
                </StyledLink>
              ) : (
                <StyledLink to={routes.register} onClick={this.toggleForm}>
                  I want to log in!
                </StyledLink>
              )}
            </StyledForm>
          )}
        </Formik>
      </StyledWrapper>
    );
  }
}

const mapStateToProps = ({ userId = null }) => ({
  userId,
});

const mapDispatchToProps = dispatch => ({
  authenticate: (username, password) => dispatch(authenticateAction(username, password)),
  register: (username, password) => dispatch(registerAction(username, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(LoginForm));
