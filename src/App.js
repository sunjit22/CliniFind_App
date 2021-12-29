import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import SearchScreen from "./components/SearchScreen/SearchScreen";
import DetailsScreen from "./components/DetailsScreen/DetailsScreen";
import DetailsScreenParticipant from "./components/DetailsScreen/DetailsScreen";
import Enquiries from "./components/Enquiries/Enquiries";
import MyTrials from "./components/MyTrials/MyTrials";
import Navbar from "./components/Navbar/Navbar";

import Home from "./components/Home/Home";
import NewTrial from "./components/NewTrial/NewTrial"
import * as React from 'react';
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import EditParticipantProfile from "./components/Profile/Participant";
import Researcher from "./components/Profile/Researcher";
import Sponsor from "./components/Profile/Sponsor";
import Privacy from "./components/Privacy/Privacy";
import PrivacyLink from "./components/Privacy/PrivacyLink";
import {Router} from "@material-ui/icons";
import DisplayTrials from './components/DisplayTrials/DisplayTrials';
// import CreateParticipantProfile from "./components/Profile/CreateParticipantProfile";
// import CreateResearcherProfile from "./components/Profile/CreateResearcherProfile";
// import CreateSponsorProfile from "./components/Profile/CreateSponsorProfile";



function App() {
  return (

    <BrowserRouter>
       <div className="container">
       <Navbar/>
       <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/search" element={<SearchScreen/>}/>
            <Route path="/search/:searchTerm" element={<SearchScreen/>}/>
            <Route path="/details/:id" element={<DetailsScreen/>}/>
            <Route path="/detailsparticipant/:id" element={<DetailsScreenParticipant/>}/>
            <Route path="/enquiries" element={<Enquiries/>}/>
            <Route path="/mytrials" element={<MyTrials/>}/>
            <Route path="/newtrial" element={<NewTrial/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/signup" element={<Signup/>}/>
            <Route exact path="/displaytrials" element={<DisplayTrials/>}/>
           <Route exact path="/privacy" element={<Privacy/>}/>
            <Route exact path='/participant' element={<EditParticipantProfile/>}/>
           <Route exact path='/researcher' element={<Researcher/>}/>
           <Route exact path='/sponsor' element={<Sponsor/>}/>
profile
       </Routes>
      </div>
        <br/>
        
        <PrivacyLink/>
    </BrowserRouter>
  );
}
export default App;

