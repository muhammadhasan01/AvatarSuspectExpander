import React from 'react';
import { Drawer, Typography,
        Box, ListItemText, Button} from '@material-ui/core';
import './FriendDrawer.css';
import ColorElement from '../utils/ColorElement';

const anchor = 'bottom';

const getStyle = (element) => {

    const retColor = ColorElement.get(element);
    const borderAtr = '3px solid ' + retColor; 

    return {
        color: retColor,
        padding: 20,
        border: borderAtr,
        borderRadius: 20
    };
}

const listItem = (friend) => {
    return (
            <Box key={friend.id} p={1}>
            <ListItemText primary={friend.name}
                    secondary={friend.element} style={getStyle(friend.element)} />
            </Box>
    )
}

const list = (name, friends) => {

    if (friends === null) return null;

    const nameTitle = "List of " + name + "'s friends:";

    return (
        <div className='list'>
        <Typography variant="h6">{nameTitle}</Typography>
        <Box display='flex'
            flexWrap='wrap'
            justifyContent='center' m={1} p={1}>
            {friends.map((friend) => {
                return listItem(friend);
            })}
        </Box>
        </div>
    )
}  

class FriendDrawer extends React.Component {
    render() {

        if (this.props.showFriends === false) {
            return (
                <div></div>
            )
        }

        return (
            <div>
                <React.Fragment key={anchor}>
                    <Drawer
                        anchor={anchor}
                        open={this.props.showFriends}
                        onClose={this.props.handleCloseDrawer}
                        onOpen={this.props.handleOpenDrawer}
                    >
                    <Button onClick={this.props.handleCloseDrawer}
                        color='primary' variant='outlined' size="large">CLOSE LIST</Button>
                    {list(this.props.name, this.props.friends)}
                    </Drawer>
                </React.Fragment>
            </div>
        )   
    }
}

export default FriendDrawer;