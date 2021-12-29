import {React, useEffect, useState} from "react";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import {Link, useNavigate} from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {API_URL} from "../../consts";


const NewTrial = () => {
    const [trial, setTrial] = useState({BriefTitle: 'Trial Name', BriefSummary: 'Write a summary', Location: 'Boston, MA',
        numParticipants: 0, RecruitmentStatus: 'Recruiting', startDate: new Date(2021, 12, 12), endDate: new Date(2021, 12, 12)});
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const submit = () => {
        fetch(`${API_URL}/newtrial`, {
            method: 'POST',
            body: JSON.stringify(trial),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(status => navigate('/displaytrials'))
            .catch(() => {});
    };

    const getProfile = () => {
        fetch(`${API_URL}/profile`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(user => {
                setUser(user);
            });
    }
    useEffect(getProfile, [navigate]);
    return(

        <>
            <div>
                <br/>
                <h3>Submit A Trial</h3>
                <form>

                    <TextField id="standard-basic"
                               value={trial.BriefTitle}
                               onChange={(e) => setTrial({...trial, BriefTitle: e.target.value})}
                               required fullWidth
                               label = "Trial Name"
                               name="BriefTitle"
                               floatingLabelText="trialName"
                               margin="dense"
                    /><br/>
                    <TextField id="standard-basic"
                               value={trial.BriefSummary}
                               onChange={(e) => setTrial({...trial, BriefSummary: e.target.value})}
                               required fullWidth
                               label = "Brief Summary"
                               name="BriefSummary"
                               floatingLabelText="description"
                               margin="dense"
                    /><br/>
                    <TextField id="standard-basic"
                               value={trial.Location}
                               onChange={(e) => setTrial({...trial, Location: e.target.value})}
                               fullWidth
                               label = "Location"
                               name="location"
                               floatingLabelText="location"
                               margin="dense"
                    /><br/>

                    <TextField id="standard-basic"
                               value={trial.numParticipants}
                               onChange={(e) => setTrial({...trial, numParticipants: e.target.value})}
                               fullWidth
                               label = "Number of participants needed"
                               name="numParticipants"
                               floatingLabelText="numParticipants"
                               margin="dense"
                    />
                    <br/><br/>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Recruitment Status</FormLabel>
                        <RadioGroup row aria-label="RecruitmentStatus" name="row-radio-buttons-group">
                            <FormControlLabel value="Recruiting"
                                              value="Recruiting"
                                              onChange={(e) => setTrial({...trial, RecruitmentStatus: e.target.value})}
                                              control={<Radio />} label="Recruiting" />
                            <FormControlLabel value="Not Recruiting"
                                              onChange={(e) => setTrial({...trial, RecruitmentStatus: e.target.value})}
                                              control={<Radio />} label="Not Recruiting" />
                        </RadioGroup>
                    </FormControl>
                    <br/>
                    <br/>
                    <TextField
                        id="startDate"
                        label="Start Date"
                        type="date"
                        value={trial.startDate}
                        onChange={(e) => setTrial({...trial, startDate: e.target.value})}
                        sx={{ width: 220 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <br/>
                    <br/>

                    <TextField
                        id="endDate"
                        label="End Date"
                        type="date"
                        value={trial.endDate}
                        onChange={(e) => setTrial({...trial, endDate: e.target.value})}                                      sx={{ width: 220 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <br/><br/>

                    <Button className="submit-button" variant="contained" onClick={(e) => setTrial({...trial, postedBy: e.user.username})} onClick={submit}>
                        Submit Trial
                    </Button>
                </form>

            </div>

        </>
    );
};

export default NewTrial;