import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import Home from "../Home/Home";
import {API_URL} from "../../consts";
import {Button, TextField} from "@mui/material";

const LoginForm = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const login = () => {
        fetch(`${API_URL}/login`, {
            method: 'POST',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(status => {
            navigate('/search')
        });
    }
    return(
        <div>
            <form>
                <TextField id="standard-basic"
                           value={user.username}
                           onChange={(e) => setUser({...user, username: e.target.value})}
                           placeholder="username"
                           className="form-control"
                           required fullWidth
                           label = "Username"
                           name="username"
                           floatingLabelText=" username"
                           margin="dense"
                /><br/>

                <TextField id="standard-basic"
                           value={user.password}
                           onChange={(e) => setUser({...user, password: e.target.value})}
                           placeholder="password"
                           type="password"
                           className="form-control"
                           required fullWidth
                           label = "Password"
                           name="password"
                           floatingLabelText="password"
                           margin="dense"
                /><br/><br/>

                <Button className="signup-button" variant="contained" onClick={login}>
                    Log In
                </Button>
            </form>
            <br/>
            <h3 className="login-option">
                <Link className="signup-link" to="/signup">Or Sign Up</Link>
            </h3>
        </div>
    );
};
export default LoginForm;