import '../../css/registerStyle.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import logo from '../../../images/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, withRouter } from 'react-router-dom'
import { registerUser } from '../../../actions/authActions'
import classnames from 'classnames'

export class Register extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {},
    }
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard')
    }
  }

  componentWillReceiveProps(nextProps) {
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    }
    this.props.registerUser(newUser, this.props.history)
  }

  render() {
    const { errors } = this.state
    return (
      <div style={{ marginTop: '5%' }}>
        <div>
          {/* -----------------------------Bootstrap core CSS --------------------------------------------------------------*/}
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
            crossOrigin="anonymous"
          />
        </div>

        <div className="text-center">
          <main className="form-signin">
            <form action="" onSubmit={this.onSubmit}>
              <img
                className="mb-4"
                src={logo}
                alt="Company Logo"
                width={72}
                height={72}
              />
              <h1 className="h3 mb-3 fw-normal">Please Register</h1>
              <div className="form-floating">
                <input
                  type="text"
                  className={classnames(
                    'form-control',
                    errors.name ? 'is-invalid' : null,
                  )}
                  id="name"
                  placeholder="Enter your name"
                  onChange={this.onChange}
                />
                <label htmlFor="floatingInput">Name</label>
              </div>
              <div className="form-floating">
                <input
                  type="email"
                  className={classnames(
                    'form-control',
                    errors.email ? 'is-invalid' : null,
                  )}
                  id="email"
                  placeholder="name@example.com"
                  onChange={this.onChange}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className={classnames(
                    'form-control',
                    errors.password ? 'is-invalid' : null,
                  )}
                  id="password"
                  placeholder="Enter your password"
                  onChange={this.onChange}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className={classnames(
                    'form-control',
                    errors.password2 ? 'is-invalid' : null,
                  )}
                  id="password2"
                  placeholder="Enter your password"
                  onChange={this.onChange}
                />
                <label htmlFor="floatingPassword">Confirm Password</label>
              </div>
              {/* <Link to="/dashboard"> */}
              <button
                className="w-100 btn btn-outline-dark btn-lg submitButton"
                type="submit"
              >
                Register
              </button>
              {/* </Link> */}
              <p className="mt-4 mb-2  copyright-text">
                Already have an account?&nbsp;
                <Link to="/login">Login Here</Link>
              </p>
              <p className="mt-5 mb-3 text-muted copyright-text">
                Copyright © 2021 All Rights Reserved by <br></br>
                <a href="#">Your Company Name</a>
              </p>
            </form>
          </main>
        </div>
      </div>
    )
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
})

export default connect(mapStateToProps, { registerUser })(withRouter(Register))
