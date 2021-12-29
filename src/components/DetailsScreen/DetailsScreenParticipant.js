import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import "./details.css";
import {API_URL} from "../../consts";

const DetailsScreen = () => {

//    const [user, setUser] = useState({});
//     const navigate = useNavigate();
//     const getProfile = () => {
//       fetch(`${API_URL}/profile`, {
//         method: 'GET',
//         credentials: 'include'
//       }).then(res => res.json())
//         .then(user => {
//           setUser(user);
//       });
//     }

//     useEffect(getProfile, []);

    const params = useParams();
    const [trialDetails, setTrialDetails] = useState({});

    const findTrialDetailByID = () =>
    fetch(`https://clinicaltrials.gov/api/query/study_fields?expr=${params.id}&fields=NCTId,Condition,BriefTitle,BriefSummary,OrgFullName,StartDate,CompletionDate,OverallStatus,LocationCity,PrimaryOutcomeMeasure&fmt=json`)
            .then(res => res.json())
            .then(trial =>setTrialDetails(trial));

    useEffect(findTrialDetailByID , [])

    // const saveTrial = (user) => {
    //     fetch(`${API_URL}/users/${user.userId}`, {
    //         method: 'POST'
    //     }).then(response => response.json())
    //     .then(console.log("ok"));
    // }

    const saveTrial = (e) => {
        e.preventDefault();
        e.target.style.backgroundColor = 'green'
    }
    return (
        <div className="p-4 cf-details-body">
            <div>
                <h3 className="cf-details-title"><b>
                    {
                        trialDetails && trialDetails.StudyFieldsResponse && trialDetails.StudyFieldsResponse.StudyFields &&
                        <span>
                        {trialDetails.StudyFieldsResponse.StudyFields[0].BriefTitle}
                        </span>

                    }
                </b></h3>
            </div>
            <div className="pb-2 row">
                <div className="col-11">
                    <b>Sponsor: </b>
                    {
                        trialDetails && trialDetails.StudyFieldsResponse && trialDetails.StudyFieldsResponse.StudyFields &&
                        <span>
                        {trialDetails.StudyFieldsResponse.StudyFields[0].OrgFullName}
                        </span>

                    }

                </div>

                {/* {(user !== "sponsor") ? */}

                <div className="col-1 pe-2">
                    <Button onClick={saveTrial} className="cf-details-button" variant="contained" style ={{backgroundColor:'white', color:'black'}}>
                        SAVE
                    </Button>
                </div>
                {/* <div className="col-1 pe-2">
                    <Button className="cf-details-button" variant="contained" style ={{backgroundColor:'green', color:'black'}}>
                        SAVED
                    </Button>
                </div> */}





            </div>
            <div className="pb-2">
                <b>NCT ID: </b>
                {
                    trialDetails && trialDetails.StudyFieldsResponse && trialDetails.StudyFieldsResponse.StudyFields &&
                    <span>
                        {trialDetails.StudyFieldsResponse.StudyFields[0].NCTId}
                    </span>
                }
            </div>

            <div className="pb-2">
                <b>Location: </b>
                {
                    trialDetails && trialDetails.StudyFieldsResponse && trialDetails.StudyFieldsResponse.StudyFields &&
                    <span>
                        {trialDetails.StudyFieldsResponse.StudyFields[0].LocationCity}
                </span>
                }

            </div>
            <div className="pb-2">
                <b>Condition: </b>
                {
                trialDetails && trialDetails.StudyFieldsResponse && trialDetails.StudyFieldsResponse.StudyFields &&
                <span>
                        {trialDetails.StudyFieldsResponse.StudyFields[0].Condition}
                </span>
            }
            </div>

            <div className="pb-2">
                <b>Start Date: </b>
                {
                    trialDetails && trialDetails.StudyFieldsResponse && trialDetails.StudyFieldsResponse.StudyFields &&
                    <span>
                        {trialDetails.StudyFieldsResponse.StudyFields[0].StartDate}
                        </span>

                }

                <b className="ps-5"> End Date: </b>
                {
                    trialDetails && trialDetails.StudyFieldsResponse && trialDetails.StudyFieldsResponse.StudyFields &&
                    <span>
                        {trialDetails.StudyFieldsResponse.StudyFields[0].CompletionDate}
                    </span>
                }

            </div>


            <div className="pb-2">
                <b>Recruitment Status: </b>
                {
                    trialDetails && trialDetails.StudyFieldsResponse && trialDetails.StudyFieldsResponse.StudyFields &&
                    <span>
                        {trialDetails.StudyFieldsResponse.StudyFields[0].OverallStatus}
                    </span>
                }

            </div>
        </div>

    )
}
export default DetailsScreen;