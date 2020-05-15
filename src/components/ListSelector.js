import React from 'react';

const ListSelector = (props) => (
    <select
        className='dropdown'
        defaultValue='select'
        onChange={()=> console.log('changed dropdown')}
    >
        <option value="select">
          Select a course
        </option>
        
        {props.lists.map(list => <option value={list.name}>{list.name}</option>)}
    </select>
)

ListSelector.defaultProps = {
    lists: []
};

export default ListSelector;