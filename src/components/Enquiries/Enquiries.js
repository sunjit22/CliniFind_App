import React from "react";
import "./enquiries.css";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

const Enquiries = () => {
    return(
        <>
            <div className="d-flex flex-row">
                <div className="cf-chatlist d-flex flex-column">
                    <List>
                      <ListItem disablePadding>
                        <ListItemButton>
                            <div className="cf-chatname d-flex flex-column">
                              <span className="cf-chatuser">sponsor95</span>
                              <span className="cf-chattitle">Grape Allergy Trial Enquiry</span>
                          </div>
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <div className="cf-chatname d-flex flex-column">
                              <span className="cf-chatuser">sponsor123098</span>
                              <span className="cf-chattitle">Diabetes Trial Enquiry</span>
                          </div>
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                          <ListItemButton>
                          <div className="cf-chatname d-flex flex-column">
                              <span className="cf-chatuser">sponsor12309</span>
                              <span className="cf-chattitle">Cat Allergy Trial Enquiry</span>
                          </div>
                          </ListItemButton>
                    </ListItem>
                    </List>
                </div>
                <div className="cf-chatbox d-flex flex-column">
                    <div className="cf-chatheader d-flex justify-content-between align-items-center mb-2">
                        <span className="cf-chatheader-title">Grape Allergy Trial Enquiry</span>
                        <button className="cf-button">View Trial</button>
                    </div>
                    <div className="cf-chatbody d-flex flex-column">
                        <div className="cf-filler"></div>
                        <div className="cf-message d-flex flex-column align-items-end ">
                            <span className="cf-sender">participant97</span>
                            <div className="cf-msg d-flex align-items-center justify-content-center">
                                <span>Hi, I’m interested. Am I eligible?</span>
                            </div>
                            <span className="cf-timestamp-sender">10/1/2021 11:04 AM</span>
                        </div>
                        <div className="cf-message d-flex flex-column align-items-start">
                            <span className="cf-recipient">sponsor95</span>
                            <div className="cf-msg d-flex align-items-center justify-content-center">
                                <span>Your profile mentioned you are indeed allergic to grapes, so yes.</span>
                            </div>
                            <span className="cf-timestamp-recipient">10/1/2021 11:04 AM</span>
                        </div>
                    <div className="cf-chat-footer d-flex flex-row align-items-end justify-content-between">
                        <input className="cf-textbox" placeholder="Write a message to the trial sponsor.">
                        </input>
                        <button className="cf-button">Send</button>
                    </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default Enquiries;