import {React, useState} from "react";
import List from '@mui/material/List';
import { styled } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from "@mui/material/TextField";
import {Link} from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const NewTrial = () => {
    return(

        <>
            <div>
            <br/>
            <h3>Submit A Trial</h3>
                            <form>

                                <TextField id="standard-basic"
                                    required fullWidth
                                    label = "Trial Name"
                                    name="trialName"
                                    floatingLabelText="trialName"
                                           margin="dense"
                                /><br/>
                                <TextField id="standard-basic"
                                    required fullWidth
                                    label = "Description"
                                    name="description"
                                    floatingLabelText="description"
                                           margin="dense"
                                /><br/>
                                <TextField id="standard-basic"
                                    fullWidth
                                    label = "Location"
                                    name="location"
                                    floatingLabelText="location"
                                           margin="dense"
                                /><br/>

                                <TextField id="standard-basic"
                                    fullWidth
                                    label = "Number of participants needed"
                                     name="numParticipants"
                                     floatingLabelText="numParticipants"
                                     margin="dense"
                                />
                                <br/><br/>
                                <FormControl component="fieldset">
                                  <FormLabel component="legend">Recruitment Status</FormLabel>
                                  <RadioGroup row aria-label="recruitmentStatus" name="row-radio-buttons-group">
                                    <FormControlLabel value="Recruiting" control={<Radio />} label="Recruiting" />
                                    <FormControlLabel value="Not Recruiting" control={<Radio />} label="Not Recruiting" />
                                  </RadioGroup>
                                </FormControl>
                                <br/>
                                <br/>
                                 <TextField
                                         id="startDate"
                                         label="Start Date"
                                         type="date"
                                         defaultValue="2021-12-13"
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
                                      defaultValue="2021-12-20"
                                      sx={{ width: 220 }}
                                      InputLabelProps={{
                                        shrink: true,
                                      }}
                                    />

                                <br/><br/>

                                <Button className="submit-button" variant="contained">
                                    Submit Trial
                                </Button>
                            </form>

                        </div>

        </>
    );
};

export default NewTrial;
