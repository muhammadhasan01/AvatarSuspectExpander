import React from 'react';
import { SwipeableDrawer, Typography, List, ListItem, ListItemText } from '@material-ui/core';
import './FriendDrawer.css';

const anchor = 'bottom';

const listItem = (friend) => {
    return (
        <ListItem key={friend.id}>
            <ListItemText primary={friend.name} secondary={friend.element} />
        </ListItem>
    )
}

const list = (person) => {
    return (
        <div className='list'>
        <Typography variant='subtitle1'>List of {person.name}'s friends:</Typography>
            <List>
                {person.friends.map((friend) => {
                    return listItem(friend);
                })}
            </List>     
        </div>
    )
}
  

class FriendDrawer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true
        };
    }

    handleClose = () => {
        this.setState({ isOpen: false });
    }

    handleOpen = () => {
        this.setState({ isOpen: true });
    }

    render() {

        return (
            <div>
                <React.Fragment key={anchor}>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={this.state.isOpen}
                        onClose={this.handleClose}
                        onOpen={this.handleOpen}
                    >
                    {list(this.props.person)}
                    </SwipeableDrawer>
                </React.Fragment>
            </div>
        )   
    }
}

export default FriendDrawer;