import React from "react";
import "./mytrials.css";
import List from '@mui/material/List';
import { styled } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const GreenButton = styled(Button)({
  marginTop: '10px',
  boxShadow: 'none',
  textTransform: 'none',
  color: '#000000',
  border: 'none',
  fontSize: 16,
  padding: '6px 12px',
  lineHeight: 1.5,
  backgroundColor: '#BFD6D2',
  '&:hover': {
    backgroundColor: '#BFD6D2',
      border: 'none',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
      border: 'none',
    backgroundColor: '#8FC5B5',
  },
  '&:focus': {
    border: 'none',
    boxShadow: '0 0 0 0.2rem #E0F0EE',
  },
});

const MyTrials = () => {
    return(
        <>
            <Stack direction="row" spacing={2}>
              <GreenButton>Submit a new trial</GreenButton>
            </Stack>

            <List sx={{ width: '100%' }}>
                <div className = "cf-trials-box">
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      primary="Trial Name 1"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                          </Typography>
                          {" Trial Summary..."}
                        </React.Fragment>
                      }
                    />
                    <GreenButton>View Details</GreenButton>
                  </ListItem>
                    </div>
                  <Divider component="li" />
                <div className = "cf-trials-box">
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      primary="Trial Name 2"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                          </Typography>
                          {" Trial Summary..."}
                        </React.Fragment>
                      }
                    />
                    <GreenButton>View Details</GreenButton>
                  </ListItem>
                    </div>
                <Divider component="li" />
                <div className = "cf-trials-box">
                                  <ListItem alignItems="flex-start">
                                    <ListItemText
                                      primary="Trial Name 3"
                                      secondary={
                                        <React.Fragment>
                                          <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                          >
                                          </Typography>
                                          {" Trial Summary..."}
                                        </React.Fragment>
                                      }
                                    />
                                    <GreenButton>View Details</GreenButton>
                                  </ListItem>
                                    </div>
                                    </List>

        </>
    );
};

export default MyTrials;
