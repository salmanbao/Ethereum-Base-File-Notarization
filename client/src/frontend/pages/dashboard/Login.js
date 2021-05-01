import '../../css/loginStyle.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import logo from '../../../images/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import { loginUser } from '../../../actions/authActions'
import classnames from 'classnames'

export class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {},
    }
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard')
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard')
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      })
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email: this.state.email,
      password: this.state.password,
    }
    this.props.loginUser(userData)
  }
  render() {
    const { email, password, errors } = this.state
    return (
      <div style={{ marginTop: '5%' }}>
        <div>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
            crossOrigin="anonymous"
          />
        </div>

        <div className="text-center">
          <main className="form-signin">
            <form className="login-form" onSubmit={this.onSubmit}>
              <img
                className="mb-4"
                src={logo}
                alt="Company Logo"
                width={72}
                height={72}
              />
              <h1 className="h3 mb-3 fw-normal">Please Login</h1>
              <div className="form-floating">
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  value={email}
                  error={errors}
                  onChange={this.onChange}
                  className={classnames(
                    'form-control',
                    errors.email || errors.emailnotfound ? 'is-invalid' : null,
                  )}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  error={errors}
                  onChange={this.onChange}
                  className={classnames(
                    'form-control',
                    errors.password || errors.passwordincorrect
                      ? 'is-invalid'
                      : null,
                  )}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" defaultValue="remember-me" /> Remember
                  me
                </label>
              </div>
              <button
                className="w-100 btn btn-outline-dark btn-lg"
                type="submit"
              >
                Login
              </button>

              <p className="mt-4 mb-2  copyright-text">
                Don't have an account?&nbsp;
                <Link to="/register">Register</Link>
              </p>
              <p className="mt-5 mb-3 text-muted copyright-text">
                Copyright © 2021 All Rights Reserved by &nbsp;
                <a href="#">Your Company Name</a>
              </p>
            </form>
          </main>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.auth,
    errors: state.errors,
  }
}

export default connect(mapStateToProps, { loginUser })(Login)
