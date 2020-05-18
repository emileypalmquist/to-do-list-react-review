import React from 'react';

const ListSelector = (props) => (
    <select
        className='dropdown'
        defaultValue='select'
        onChange={(e)=> props.handleChange(e)}
    >
        <option value="select">
          Select a topic
        </option>
        
        {props.lists.map(list => <option value={list.name}>{list.name}</option>)}
    </select>
)

ListSelector.defaultProps = {
    lists: []
};

export default ListSelector;