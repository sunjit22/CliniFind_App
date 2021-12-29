import React, {useEffect, useState} from "react";
import {API_URL} from "../../consts";
import {useNavigate} from "react-router-dom";
import { treeItemClasses } from "@mui/lab";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { red } from "@mui/material/colors";
import "./displaytrials.css";

const DisplayTrials = () => {
    const [trial, setTrial] = useState([]);

    const [user, setUser] = useState({});
    const navigate = useNavigate();
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

    const getTrial = () => {
        fetch(`${API_URL}/displaytrials`, {
            method: 'GET',
        }).then(res => res.json())
            .then(trial => {
                setTrial(trial)
            }).then(console.log(typeof(trial))
            );
    }

    // const getTrial = () => {
    //     fetch(`${API_URL}/displaytrials`)
    //         .then(response => response.json());
    // }

    useEffect(getTrial, []);
    return(
        <>

        <List sx={{ width: '100%' }}>
        {trial.map((t) => {
                return <>
                    <div className = "cf-trials-box">
                  <ListItem alignItems="flex-start">
                    <ListItemText
                    className="btitle"
                      primary={t.BriefTitle}
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                          </Typography>
                          <b>Location:</b> {t.Location}
                          <br/>
                          <b>Start Date:</b>{t.startDate}
                          <br/>
                          <b>End Date:</b>{t.endDate}
                          <br/>
                          <b>Recruitment Status:</b>{t.RecruitmentStatus}
                          <br/>
                          <b>Brief Summary:</b>{t.BriefSummary}
                          <br/>

                        </React.Fragment>
                      }
                    />
                   
                  </ListItem>
                    </div>
                  <Divider component="li" />
                </>

            })}
                
            </List>
            </>

    );
};
export default DisplayTrials;