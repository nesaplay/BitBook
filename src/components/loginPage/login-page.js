import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import Welcome from './welcome';
import Login from './login';
import Register from './register';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: true,
      register: false
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row landing-container z-depth-3">
          <div className="col s12 m6">
            <Welcome />
          </div>
          <div className="col s12 m6">
            <div className="row">
              <div className="col s12">
                <div className="row">
                  <div className="col s12">
                    <ul className="tabs">
                      <li
                        className="tab col s6"
                        id="login"
                        onClick={() =>
                          this.setState({ login: true, register: false })
                        }
                      >
                        <Link
                          to="/login"
                          className={this.state.login ? 'active-tab' : ''}
                        >
                          Login
                        </Link>
                      </li>
                      <li
                        className="tab col s6"
                        id="register"
                        onClick={() =>
                          this.setState({ login: false, register: true })
                        }
                      >
                        <Link
                          to="/register"
                          className={this.state.register ? 'active-tab' : ''}
                        >
                          Register
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col s12">
                    <Switch>
                      <Redirect exact from="/" to="/login" />
                      <Route path="/login" component={Login} />
                      <Route path="/register" component={Register} />
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
