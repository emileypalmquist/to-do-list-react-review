import React from 'react';
import Item from './Item'

const ItemList = (props) => (
    <table>
        <tbody>
            <tr>
                <th>Item</th>
                <th>Complete</th>
            </tr>
            
            {props.items.map(item => <Item key={item.id} item={item} handleCompleted={props.handleCompleted}/>)}
            
        </tbody>
    </table>
)

export default ItemList;