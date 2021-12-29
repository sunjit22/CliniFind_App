import React, {Component} from 'react';
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Container,
    IconButton,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography
} from "@mui/material";
import "./navbar.css"
import logo from "./heart-logo.jpeg";
import {Link} from "react-router-dom";

const pages = ['Search', 'Submit'];
const user = "sponsor";

const Navbar = () => {
    
    return (
        <AppBar className="appbar" position="static">
            <Container maxWidth="xl" className="appbar">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <Link className="signup-link" to="/">
                            <img src={logo} alt="logo" className="logo"/>
                        </Link>

                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                        </IconButton>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <Link className="signup-link" to="/participant">
                            <img src={logo} alt="logo" className="logo"/>
                        </Link>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {/* {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))} */}
                        <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                        <Link className="search-link-navbar" to="/search">
                            <h6>SEARCH</h6>
                        </Link>
                            </Button>

                        {user === 'sponsor' ?
                            <>
                            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                        <Link className="submit-link-navbar" to="/newtrial">
                            <h6>SUBMIT</h6>
                        </Link>
                            </Button>

                            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                <Link className="submit-link-navbar" to="/displaytrials">
                                    <h6>TRIAL FEED</h6>
                                </Link>
                            </Button>
                            </>
                            :
                         ""
                        }
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton sx={{ p: 0 }}>
                            <Link className="signup-link" to="/participant">
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </Link>
                            </IconButton>
                        </Tooltip>
                        {/*<Menu*/}
                        {/*    sx={{ mt: '45px' }}*/}
                        {/*    id="menu-appbar"*/}
                        {/*    anchorEl={anchorElUser}*/}
                        {/*    anchorOrigin={{*/}
                        {/*        vertical: 'top',*/}
                        {/*        horizontal: 'right',*/}
                        {/*    }}*/}
                        {/*    keepMounted*/}
                        {/*    transformOrigin={{*/}
                        {/*        vertical: 'top',*/}
                        {/*        horizontal: 'right',*/}
                        {/*    }}*/}
                        {/*    open={Boolean(anchorElUser)}*/}
                        {/*    onClose={handleCloseUserMenu}*/}
                        {/*>*/}
                        {/*    {settings.map((setting) => (*/}
                        {/*        <MenuItem key={setting}>*/}
                        {/*            <Typography textAlign="center">{setting}</Typography>*/}
                        {/*        </MenuItem>*/}
                        {/*    ))}*/}{/*</Menu>*/}

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

    );
};
export default Navbar;