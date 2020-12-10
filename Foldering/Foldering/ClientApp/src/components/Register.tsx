import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Register = () => (
  <div>
        <h1>Registration</h1>
        <form>
            <div>
                <h3>Login</h3>
                <input type="text" id="username" name="username" />
            </div>
            <div>
                <h3>Password</h3>
                <input type="password" id="password" name="password" />
            </div>
            <div>
                <input type="submit" id="login" value="Register" />
            </div>
        </form>
        <Link className="" to={`/login`}>Login</Link>
  </div>
);

export default connect()(Register);
