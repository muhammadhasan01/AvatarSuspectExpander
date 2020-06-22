import React, { Component } from 'react';
import { Graph } from "react-d3-graph";
import { Typography, Box } from '@material-ui/core';
import axios from 'axios';
import FriendDrawer from '../FriendDrawer/FriendDrawer';
import ColorElement from '../utils/ColorElement';
import ValidateData from '../utils/ValidateData';
import './FriendGraph.css';

const API = 'https://avatar.labpro.dev/friends/';

const graphConfig = {  
    height: 280,
    width: 440,
    minZoom: 1,
    maxZoom: 1,
    node: {
        size: 600,
        fontSize: 15,
        strokeColor: 'black'
    }
}

class FriendGraph extends Component {
    constructor(props) {
        super(props);

        // State of a node
        this.state = {
            id: null,
            name: null,
            element: null,
            friends: null,
            showFriends: false
        }
    }

    
    onMouseOverNode = (id) => {
        const { mapData } = this.props.dataValue.graphData;
        this.setState(
            {
                id,
                name: mapData.get(id).name,
                element: mapData.get(id).element
            }
        )
    }
        
    handleClickedNode = (data) => {
        const { id, friends } = data.payload;
        const validFriends = ValidateData(id, friends);
        this.setState({
            friends: validFriends,
            showFriends: true
        });
    }

    onClickNode = (id) => {
        axios.get(API + id)
        .then(result => this.handleClickedNode(result.data))
        .catch((error) => console.log(error));
    }

    handleCloseDrawer = () => {
        this.setState({ showFriends: false });
    }

    handleOpenDrawer = () => {
        this.setState({ showFriends: true })
    }

    render() {

        const { id, graphData, error } = this.props.dataValue;

        if (error !== null) {
            return (
                <Typography style={{ textAlign: 'center' }} color="error" variant="h6" >
                    {error}
                </Typography>
            )
        }

        if (id === null) {
            return (
                <div></div>
            )
        }

        return (
            <div style={{ textAlign: 'center' }}>
                <Typography variant='subtitle1'>
                    Hovered Node Details:
                </Typography>
                {this.state.id === null ? 
                    <Typography variant='subtitle1' style={{ color: 'gray' }}>
                        Hover on a node to see it's detail
                    </Typography>
                    :
                    <Typography variant='subtitle1'
                    style={{ color: ColorElement.get(this.state.element) }}>
                        [{this.state.id}] {this.state.name} ({this.state.element})
                    </Typography>
                }
                <Graph
                    id="graph-id"
                    data={graphData.data}
                    config={graphConfig}
                    onMouseOverNode={this.onMouseOverNode}
                    onClickNode={this.onClickNode}
                />
                <Typography variant='subtitle2' style={{ color: 'gray' }}>
                    Tips: click on a node to see the person's friends list!
                </Typography>
                <FriendDrawer
                        name={this.state.name}
                        friends={this.state.friends}
                        showFriends={this.state.showFriends}
                        handleCloseDrawer={this.handleCloseDrawer}
                        handleOpenDrawer={this.handleOpenDrawer}
                />
                <Box m={3} />
            </div>
        )
    }
}

export default FriendGraph;