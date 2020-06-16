import React from 'react';
import { Button, Box,
         Typography, OutlinedInput,
         createMuiTheme, ThemeProvider} from '@material-ui/core';
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

    const onSubmitted = () => {
        console.log('submitted');
    }

    return (
        <div className='searchBar' >
        <ThemeProvider theme={navTheme}>
        <Typography className='searchTypography' align='center' variant='h5'>
        Search the person friends with the person's ID!
        </Typography>
        <form className='searchForm' onSubmit={onSubmitted}>
            <OutlinedInput  fullWidth required type="number"
                placeholder="Search by ID" variant="outlined" color="primary"/>            
            <Box m={1.5} />
            <Button  onClick={onClicked} variant='outlined' color='primary'>
            SEARCH
            </Button>
        </form>
        </ThemeProvider>
        </div>
    )
}

export default SearchBar;