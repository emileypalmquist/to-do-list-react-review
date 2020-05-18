import React, { Component } from 'react';
import ListDetails from './ListDetails'
import ListSelector from './ListSelector'
import ItemList from './ItemList'


class ToDoContainer extends Component {

    state = {
        items: [],
        listNames: [],
        topic: ''
    }

    componentDidMount() {
        fetch('http://localhost:6001/items')
            .then(resp => resp.json())
            .then(data => this.setState({
                items: data
            }))
        fetch('http://localhost:6001/listNames')
            .then(resp => resp.json())
            .then(data => this.setState({
                listNames: data
            }))
    }

    handleChange = (e) => {
        this.setState({
            topic: e.target.value
        })
    }

    filterItems = () => {
        return this.state.items.filter(item => item.listName === this.state.topic)
    }

    handleCompleted = (item) => {
        console.log(item)
        fetch(`http://localhost:6001/items/${item.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'completed': !item.completed
            })
        }).then(resp => resp.json())
        .then(data => {
            let newItems = this.state.items.map(item => item.id === data.id ? data : item)
            this.setState({
                items: newItems
            })
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <ListDetails />
                <ListSelector lists={this.state.listNames} handleChange={this.handleChange}/>
                <ItemList items={this.filterItems()} handleCompleted={this.handleCompleted}/>
            </div>
        )
    }
}

export default ToDoContainer;