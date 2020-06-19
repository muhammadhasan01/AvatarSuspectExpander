import React from 'react';
import { SwipeableDrawer, Typography,
        Box, ListItemText, Button} from '@material-ui/core';
import './FriendDrawer.css';

const anchor = 'bottom';

const textColor = [['fire', '#C0392B'],
                   ['water', '#2980B9'],
                   ['air', '#85C1E9'],
                   ['earth', '#D68910']];

const getStyle = (element) => {

    let retColor;
    for (let i = 0; i < textColor.length; i++) {
        if (textColor[i][0] !== element) continue;
        retColor = textColor[i][1];
        break;
    }

    const boxAtr = '5px 5px ' + retColor;
    const borderAtr = '2px solid ' + retColor; 

    return {
        color: retColor,
        padding: 20,
        border: borderAtr,
        boxShadow: boxAtr,
        borderRadius: 20
    };
}

const listItem = (friend) => {
    return (
            <Box p={1}>
            <ListItemText key={friend.id} primary={friend.name}
                    secondary={friend.element} style={getStyle(friend.element)} />
            </Box>
    )
}

const list = (person) => {

    const nameTitle = "List of " + person.name + "'s friends:";

    return (
        <div className='list'>
        <Typography variant="h6">{nameTitle}</Typography>
        <Box display='flex'
            flexWrap='wrap'
            justifyContent='center' m={1} p={1}>
            {person.friends.map((friend) => {
                return listItem(friend);
            })}
        </Box>     
        </div>
    )
}  

class FriendDrawer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
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
                    <Button onClick={this.handleClose}
                        color='primary' variant='outlined' size="large">CLOSE LIST</Button>
                    {list(this.props.person)}
                    </SwipeableDrawer>
                </React.Fragment>
            </div>
        )   
    }
}

export default FriendDrawer;