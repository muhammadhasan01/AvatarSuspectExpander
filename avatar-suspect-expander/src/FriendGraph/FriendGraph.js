import React, { Component } from 'react';
import { Graph } from "react-d3-graph";
import { Typography, Box, Button } from '@material-ui/core';
import axios from 'axios';
import FriendDrawer from '../FriendDrawer/FriendDrawer';
import ColorElement from '../utils/ColorElement';
import ValidateData from '../utils/ValidateData';
import MediaQuery from 'react-responsive';
import './FriendGraph.css';

const graphConfigLandscape = {  
    height: 500,
    width: 700,
    minZoom: 1,
    maxZoom: 1,
    node: {
        size: 600,
        fontSize: 15,
        strokeColor: 'black'
    }
}

const graphConfigPortrait = {
    height: 460,
    width: 400,
    minZoom: 1,
    maxZoom: 1,
    node: {
        size: 300,
        fontSize: 15,
        strokeColor: 'black'
    }
}

const API = 'https://avatar.labpro.dev/friends/';

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
        
    handleHoveredNodeDetail = (data) => {
        const { id, friends } = data.payload;
        const validFriends = ValidateData(id, friends);
        this.setState({
            friends: validFriends,
            showFriends: true
        });
    }

    onHoveredNodeDetail = () => {
        axios.get(API + this.state.id)
        .then(result => this.handleHoveredNodeDetail(result.data))
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
                    <div>
                    <Typography variant='subtitle1' style={{ color: 'gray' }}>
                        Hover on a node to see it's detail
                    </Typography>
                    <Box m={1.2} />
                    <Button variant='outlined' style={{ color: 'gray' }} disabled>
                        See Hovered Node Friends List
                    </Button>
                    </div>
                    :
                    <div>
                    <Typography variant='subtitle1'
                    style={{ color: ColorElement.get(this.state.element) }}>
                        [{this.state.id}] {this.state.name} ({this.state.element})
                    </Typography>
                    <Box m={1.2} />
                    <Button onClick={this.onHoveredNodeDetail} variant='outlined' color='secondary'>
                        See Hovered Node Friends List
                    </Button>
                    </div>
                }
                <MediaQuery query="(orientation: landscape)">
                <Graph
                    id="graph-id"
                    data={graphData.data}
                    config={graphConfigLandscape}
                    onMouseOverNode={this.onMouseOverNode}
                    onClickNode={this.props.onExpandNode}
                />
                </MediaQuery>
                <MediaQuery query="(orientation: portrait)">
                <Graph
                    id="graph-id"
                    data={graphData.data}
                    config={graphConfigPortrait}
                    onMouseOverNode={this.onMouseOverNode}
                    onClickNode={this.props.onExpandNode}
                />
                </MediaQuery>
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