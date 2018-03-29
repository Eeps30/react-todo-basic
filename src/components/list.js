import React from 'react';

export default props => {

    const listElements = props.list.map((item, index) => {
        return (
            <li key={index} className="collection-item">
                {item.title}
                <button onClick={() => props.delete(index)} className="btn red darken-3">Delete</button>
            </li>
        )
    });

    return (
        <ul className="collection">
            <li className="collection-item">I'm a list</li>
            {listElements}
        </ul>
    )
}