import React, {useEffect, useState} from "react";
import "./result.css";
import Button from "@mui/material/Button";
import {TextField} from "@mui/material";
import { API_URL } from "../../consts";
import {Link, useParams, useNavigate} from "react-router-dom";

const SearchScreen = () => {
    const user2 = "";
    const params = useParams();
    const trialTitle = params.searchTerm || ' '
    const [searchTerm, setSearchTerm] = useState(trialTitle);
    const [trials, setTrials] = useState([]);

    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const getProfile = () => {
      fetch(`${API_URL}/profile`, {
        method: 'POST',
        credentials: 'include'
      }).then(res => res.json())
        .then(user => {
          setUser(user);
      }).catch(e => navigate('/login'));
    }

    useEffect(getProfile, [navigate]);
    

    const findTrials = () =>
        fetch(`https://clinicaltrials.gov/api/query/study_fields?expr=${searchTerm}&fields=NCTId%2CBriefSummary%2CBriefTitle%2CCondition&min_rnk=1&max_rnk=&fmt=json`)
            .then(res => res.json())
            .then(trials => setTrials(trials))
    useEffect(findTrials, []);
    return (
        <div className="pt-5" >
            <TextField fullWidth label="Search" id="fullWidth" style ={{backgroundColor:'white'}}  onChange={(e) =>
                setSearchTerm(e.target.value)} value={searchTerm}/>
            <Button onClick={findTrials} className="btn col-1 cf-view-details-box" variant="contained" style ={{backgroundColor:'white', color:'black'}} >
                Search
            </Button>

            <br/>
            <br/>
            {
                trials && trials.StudyFieldsResponse &&
                <span> <b>Number of studies found:</b> {trials.StudyFieldsResponse.NStudiesFound}</span>
            }

            <br/>
            
            <ul style ={{listStyle:'none'}}>{
                trials && trials.StudyFieldsResponse  && trials.StudyFieldsResponse.StudyFields && trials.StudyFieldsResponse.StudyFields.map((trial) =>
                    <li key={trial.NCTId}>
                        

                            <div className="cf-result-box mt-5 mb-5">
                                <div className="row">
                                    <div className="col-10">
                                        <h4 className="cf-trial-name">
                                            {trial.NCTId} - {trial.BriefTitle}
                                        </h4>
                                    </div>
                                   
                                        <div className="col-2">
                                        <Button className="btn col-1 cf-view-details-box" variant="contained"  style ={{backgroundColor:'white', color:'black'}}>
                                                {user.role === "participant" ? (<Link to={`/detailsparticipant/${trial.NCTId}`}>Details</Link>) :
                                                (<Link to={`/details/${trial.NCTId}`}>Details</Link>)}
                                                
                                             </Button>
                                        </div>
                                    :
                            
                                    
                                </div>
                                <div className="cf-summary-box cf-summary-para">
                                    {trial.BriefSummary}
                                </div>
                            </div>

                    </li>
                )
            }
            </ul>
            {/*<ul>*/}
            {/*    {trials.map(result =>*/}
            {/*        <li key = {result.imdbID}>*/}
            {/*            <Link to={`/details/${result.imdbID}`}>*/}
            {/*                <img src = {result.Poster} height = {50}/>*/}
            {/*                {result.Title}*/}
            {/*            </Link>*/}
            {/*        </li>*/}
            {/*    )}*/}
            {/*</ul>*/}
        </div>
    )
}

export default SearchScreen;