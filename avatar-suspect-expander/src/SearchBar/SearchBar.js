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

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            idValue : ''
        };
    }

    onChanged = (e) => {
        this.setState( {idValue : e.target.value} );
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted", this.state.idValue);
    }

    render() {
        return (
            <div className='searchBar'>
            <ThemeProvider theme={navTheme}>
            <Typography className='searchTypography' align='center' variant='h5'>
            Search the person friends with the person's ID!
            </Typography>
            <form className='searchForm'  onSubmit={this.handleSubmit}>
                <OutlinedInput fullWidth required type="number"
                    value={this.state.idValue} onChange={this.onChanged}
                    placeholder="Search by ID" variant="outlined" color="primary"/>     
                <Box m={1.2} />
                <Button type='submit' variant='outlined' color='primary'>
                SEARCH
                </Button>
            </form>
            </ThemeProvider>
            </div>
        );
    }
}

export default SearchBar;