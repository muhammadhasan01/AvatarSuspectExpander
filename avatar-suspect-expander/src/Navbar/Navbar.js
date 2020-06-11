import React from 'react';
import { AppBar, Toolbar, Typography, createMuiTheme, ThemeProvider } from '@material-ui/core';

const navTheme = createMuiTheme({
    typography: {
      fontFamily: [
        'Lato',
        'Roboto',
        '"Segoe UI"',
        '"Helvetica Neue"',
      ].join(','),
      flexGrow: 1,
      align: 'center',
    },
});

const NavBar = (props) => {
    return (
        <ThemeProvider theme={navTheme}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" color="inherit">
                    {props.nameTitle}
                    </Typography>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

export default NavBar;