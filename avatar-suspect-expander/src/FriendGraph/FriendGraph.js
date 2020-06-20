import React, { Component } from 'react';
import { Graph } from "react-d3-graph";
import { Typography } from '@material-ui/core';

class FriendGraph extends Component {
    constructor(props) {
        super(props);

        // State of a hovered node
        this.state = {
            id: null,
            name: null,
            element: null
        }
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
                Idnya: {id}
                <Graph
                    id="graph-id"
                    data={graphData.data}
                />;
            </div>
        )
    }
}

export default FriendGraph;