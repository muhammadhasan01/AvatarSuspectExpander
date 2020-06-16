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

const styles = {
    root: {
      flexGrow: 1,
    },
    appbar: {
      alignItems: 'center',
    }
};

const NavBar = (props) => {

    return (
        <div className={styles.root}>
        <ThemeProvider theme={navTheme}>
            <AppBar style={styles.appbar} position="static">
                <Toolbar>
                    <Typography variant="h5" color="inherit">
                    {props.nameTitle}
                    </Typography>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
        </div>
    )
}

export default NavBar;