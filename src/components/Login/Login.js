import React, {Component} from 'react';
import LoginForm from "./LoginForm.js";
import "./signup.css"

class Login extends Component {
    render() {
        return (
            <div>
                <h1 className="title">CliniFind</h1>
                <h2 className="tagline">Find clinical trials anywhere</h2>
                <br></br>
                <h3 className="login-title">Log In</h3>
                <br></br>
                <LoginForm />
            </div>
        )
    }
}

export default Login;
