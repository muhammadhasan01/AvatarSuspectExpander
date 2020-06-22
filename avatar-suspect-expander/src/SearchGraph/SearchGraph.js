import React, { Component } from 'react';
import axios from 'axios';
import GraphBuilder from '../utils/GraphBuilder';
import ValidateData from '../utils/ValidateData';
import SearchBar from '../SearchBar/SearchBar';
import FriendGraph from '../FriendGraph/FriendGraph';
import GraphExpander from '../utils/GraphExpander';

const API = 'https://avatar.labpro.dev/friends/';

class SearchGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: null,
            graphData: null,
            error: null
        };
    }

    
    setData = (data) => {
        const { id, name, element, friends } = data.payload;
        const validFriends = ValidateData(id, friends);
        const graphData = GraphBuilder(id, name, element, validFriends);
        this.setState({ id, graphData, error: null });
    }
    
    handleGetRequest = (id) => {
        const errorMsg = `Error: ID ${id} not found.`;
        axios.get(API + id)
        .then(result => this.setData(result.data))
        .catch(() => this.setState({ error: errorMsg }));
    }

    handleExpand = (data) => {
        const { id, friends } = data.payload;
        const validFriends = ValidateData(id, friends);
        const graphData = GraphExpander(this.state.graphData, id, validFriends);
        console.log(graphData.data);
        this.setState({ graphData })
    }

    onExpandNode = (id) => {
        axios.get(API + id)
        .then(result => this.handleExpand(result.data))
        .catch((error) => console.log(error));
    }
    
    render() {
        return (
            <div>
                <SearchBar handleGetRequest={this.handleGetRequest} />
                <FriendGraph dataValue={this.state}
                             onExpandNode={this.onExpandNode}
                />
            </div>
        )
    }
}

export default SearchGraph;