import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Login extends Component {
  render() {
    return (
      <form>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input style={{width:"30%"}}
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input style={{width:"30%"}}
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input 
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" style={{width:"30%"}} className="btn btn-danger">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          < Link to="/">Forgot password?</Link>
        </p>
      </form>
    )
  }
}
