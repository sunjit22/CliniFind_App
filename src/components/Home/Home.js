import React, {Component} from 'react';
import {useEffect, useState} from "react";
import "./home.css";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import logoHome from "./heart-logo.jpeg"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { API_URL } from "../../consts";
import {useParams, useNavigate} from "react-router-dom";
// import Link from '@material-ui/core/Link';


const Home = () => {

        const [user, setUser] = useState({});
        const navigate = useNavigate();
        const getProfile = () => {
        fetch(`${API_URL}/profile`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(user => {
            setUser(user);
        })
        }

        const logout = () => {
            fetch(`${API_URL}/logout`, {
              method: 'POST',
              credentials: 'include'
            }).then(res => navigate('/login'));
          }
        useEffect(getProfile, [navigate]);

        return (
            <div>
               <h1 className="heading">CliniFind</h1>
                <h3 className="headline">Find Clinical Trials Anywhere.</h3>
                <p className="main-desc">CliniFind makes it easier for anyone to participate in clinical trials happening
                around their location. It is 100% safe, and only contains trials that are approved for
                    clinical studies. Participate in a clinical trial or submit a clinical trial to find
                    potential participants.
                </p>

                {user.role !== "participant" && user.role !== "researcher" && user.role !== "sponsor" ? 
                (<>
                <button className="login-button" variant="contained">
                    <Link className="signup-link" to="/login">Log In</Link>
                </button>
                <button className="login-button" variant="contained">
                    <Link className="signup-link" to="/signup">Sign Up</Link>
                </button>
                </>)
                : 

                (<button
                onClick={logout}
                className="btn btn-danger">
                Logout
                </button>)
                }
            </div>
        );
    }

export default Home;

