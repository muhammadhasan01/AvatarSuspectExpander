import React from 'react';
import { Button, Typography, TextField, createMuiTheme, ThemeProvider } from '@material-ui/core';
import './SearchBar.css';

const navTheme = createMuiTheme({
    typography: {
      fontFamily: [
        '"Segoe UI"',
        'Lato',
        'Roboto',
        '"Helvetica Neue"',
      ].join(',')
    }
});

const SearchBar = () => {
    
    const onClicked = () => {
        console.log('clicked');
    }

    return (
        <div className='searchBar'>
        <ThemeProvider theme={navTheme}>
        <Typography className='searchTypography' align='center' variant='h5'>
        Search the person friends with the person's ID!
        </Typography>
        <form className='searchForm' noValidate autoComplete="off">
            
            <TextField fullWidth label="Search by ID" variant="outlined" />
            
            <Button className='searchButton' onClick={onClicked} variant='outlined' color='primary'>
            SEARCH
            </Button>
        </form>
        </ThemeProvider>
        </div>
    )
}

export default SearchBar;