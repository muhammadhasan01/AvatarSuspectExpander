import React, { Component } from 'react';
import axios from 'axios';

const API = 'https://avatar.labpro.dev/friends/';

class FriendList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: null,
            name: null,
            element: null,
            friends: null
        };
    }

    setData = (data) => {
        const {id, name, element, friends} = data.payload;
        this.setState( { id, name, element, friends });
    }

    fetchData = (id) => {
        axios.get(API + id)
        .then(result => this.setData(result.data))
        .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default FriendList;