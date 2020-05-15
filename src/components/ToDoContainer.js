import React, { Component } from 'react';
import ListDetails from './ListDetails'
import ListSelector from './ListSelector'
import ItemList from './ItemList'

class ToDoContainer extends Component {
    render() {
        return (
            <div>
                <ListDetails />
                <ListSelector />
                <ItemList />
            </div>
        )
    }
}

export default ToDoContainer;