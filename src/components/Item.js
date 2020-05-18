import React from 'react';

const Item = (props) => (
    <tr>
        <td>{props.item.content}</td>
        <td>
            <input 
                type='checkbox'
                checked={props.item.completed}
                onChange={() => props.handleCompleted(props.item)}
            />
        </td>
    </tr>
)

export default Item