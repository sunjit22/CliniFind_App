import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SignupForm from "./SignupForm";
import "./signup.css";

class Signup extends Component {
    render() {
        return (
            <div>
                <h1 className="title">CliniFind</h1>
                <h2 className="tagline">Find clinical trials anywhere</h2>
                <br></br>
                <h3 className="signup-title">Sign Up</h3>
                <br></br>
                <SignupForm />
            </div>
        )
    }
}

export default Signup;