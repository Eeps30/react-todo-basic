import React from 'react';

export default props => {

    const listElements = props.list.map((item, index) => {
        return <li key={index} className="collection-item">{item.title}</li>
    })

    return (
        <ul className="collection">
            <li className="collection-item">I'm a list</li>
            {listElements}
        </ul>
    )
}