import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import countries from "./CountrySelector";
import Autocomplete from "@mui/material/Autocomplete";
import Profile from './Profile';
import "./profile.css";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  OutlinedInput,
  Radio,
  RadioGroup,
  Typography
} from "@mui/material";
import * as PropTypes from "prop-types";
import {Link} from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function EditResearcherProfile(date, dateToCompare) {

  function getFormValues() {
    const storedValues = localStorage.getItem('form');
    if (!storedValues)
      return {
        rusername: '',
        rpassword: '',
        rphone: '',
        rcountry: '',
        rinstitution: '',
      };
    return JSON.parse(storedValues); 
  }

  const [values, setValues] = React.useState(getFormValues);

  React.useEffect(() => {
		localStorage.setItem('form', JSON.stringify(values));
	}, [values]);

  function handleChange(event) {
		setValues((previousValues) => ({
			...previousValues,
			[event.target.name]: event.target.value,
		}));
	}

  return (
      // <div>
      <List sx={{ width: '100%', color: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemText
              primaryTypographyProps={{fontSize: "30px", fontWeight: "bold"}} primary="Edit Profile"
          />
        </ListItem>
        <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '100%' },
            }}
            noValidate
            autoComplete="off"
        >
        </Box>

        <Stack direction="column" spacing={4} width="50%" >
          <TextField
              required
              require fullWidth
              id="outlined-required"
              label="Username"
              name="rusername"
              value={values.rusername}
              floatingLabelText="Your Username"
              onChange={handleChange}
              inputProps={{style: {minHeight: 25}}}
          />

        </Stack>
        <br/>
        <Stack direction="column" spacing={4} width="50%" >
          <TextField
              required
              require fullWidth
              id="outlined-required"
              label="Password"
              name="rpassword"
              value={values.rpassword}
              floatingLabelText="Your Password"
              onChange={handleChange}
              inputProps={{style: {minHeight: 25}}}
          />

        </Stack>

        <ListItem alignItems="flex-start">
          <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                  >

                  </Typography>
                
                </React.Fragment>
              }
          />
        </ListItem>

        <Stack direction={"column"} marginBottom={5} maxWidth='50%'>

        <TextField
              required
              require fullWidth
              id="outlined-required"
              label="Phone"
              name="rphone"
              value={values.rphone}
              floatingLabelText="Your phone number"
              onChange={handleChange}
              inputProps={{style: {minHeight: 25}}}
          />
          <br/>
            <TextField
              required
              require fullWidth
              id="outlined-required"
              label="Country"
              name="rcountry"
              value={values.rcountry}
              floatingLabelText="Country"
              onChange={handleChange}
              inputProps={{style: {minHeight: 25}}}
          />
          <br/>
          <TextField
              required
              require fullWidth
              id="outlined-required"
              label="Institution"
              name="rinstitution"
              value={values.rinstitution}
              floatingLabelText="Your Institution"
              onChange={handleChange}
              inputProps={{style: {minHeight: 25}}}
          />

        </Stack>

        <Stack direction="row" paddingLeft='40%' paddingTop="3%" spacing='5%'>
          <Button type="submit" variant="contained" color="success" size={"large"}>
            Save Changes
          </Button>
          <Button type="reset" variant="outlined" color="error" size={"large"}>
            Cancel
          </Button>

        </Stack>
        <Profile/>      
      </List>
  );
}
