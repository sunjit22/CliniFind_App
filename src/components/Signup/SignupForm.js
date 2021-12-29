import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {API_URL} from "../../consts";
import Sponsor from "../Profile/Sponsor";
import Researcher from "../Profile/Researcher";
import Participant from "../Profile/Participant";
import {Button, TextField, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";

const SignupForm = () => {

    // let typeRole;

    // if (this.user.role === "researcher") {
    //     typeRole = "researcher";
    // } else if (this.user.role === "sponsor") {
    //     typeRole = "sponsor";
    // } else {
    //     typeRole = "participant";
    // }

    const [user, setUser] = useState({username: 'alice', password: 'alice123', role: 'participant'});
    const navigate = useNavigate();
    const register = (arg) => {
        fetch(`${API_URL}/register`, {
            method: 'POST',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
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
                /><br/>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Role</FormLabel>
                  <RadioGroup row aria-label="role" name="row-radio-buttons-group">
                    <FormControlLabel value="sponsor"
                    onChange={(e) => setUser({...user, role: e.target.value})}
                    control={<Radio />} label="Sponsor" />
                    <FormControlLabel value="participant"
                     onChange={(e) => setUser({...user, role: e.target.value})}
                     control={<Radio />} label="Participant" />
                    <FormControlLabel value="researcher"
                     onChange={(e) => setUser({...user, role: e.target.value})}
                    control={<Radio />} label="Researcher" />
                  </RadioGroup>
                </FormControl>

                <Button className="signup-button" variant="contained" onClick={register}>
                {user.role === "researcher" ? (<Link className="login-link" to="/researcher">REGISTER</Link>)
                : (user.role === "sponsor" ? (<Link className="login-link" to="/sponsor">REGISTER</Link>)
            : (<Link className="login-link" to="/participant">REGISTER</Link>))}
                </Button>
            </form>
            <br/>
            <p className="login-option">
                <Link className="login-link" to="/login">Or Log In</Link>
            </p>
            
        </div>
    );
};
export default SignupForm;