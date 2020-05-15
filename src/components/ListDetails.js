import React from 'react';

const ListDetails = (props) => (
    <div>
        <h3>{props.list.name}</h3>
    </div>
)

ListDetails.defaultProps = {
    list: {
        name: "No list selected."
    }
};

export default ListDetails;