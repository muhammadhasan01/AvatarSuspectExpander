import React, { Component } from 'react';
import axios from 'axios';
import GraphBuilder from '../GraphBuilder/GraphBuilder';
import SearchBar from '../SearchBar/SearchBar';
import FriendGraph from '../FriendGraph/FriendGraph';

const API = 'https://avatar.labpro.dev/friends/';

class FriendList extends Component {
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
        const graphData = GraphBuilder(id, name, element, friends);
        this.setState({ id, graphData, error: null });
    }

    handleGetRequest = (id) => {

        const errorMsg = `Error: ID ${id} not found.`;

        axios.get(API + id)
        .then(result => this.setData(result.data))
        .catch(() => this.setState({ error: errorMsg }));
    }

    render() {
        return (
            <div>
                <SearchBar handleGetRequest={this.handleGetRequest} />
                <FriendGraph dataValue={this.state} />
            </div>
        )
    }
}

export default FriendList;