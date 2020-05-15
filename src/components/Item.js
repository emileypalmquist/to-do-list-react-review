import React from 'react';

const Item = (props) => (
    <tr>
        <td>{/* to do list item content display here */}</td>
        <td>
            <input 
                type='checkbox'
                checked={null}
                onChange={() => console.log('You changed the checkbox')}
            />
        </td>
    </tr>
)

export default Item