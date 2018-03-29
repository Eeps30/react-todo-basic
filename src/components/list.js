import React from 'react';
import todoItems from '../data/todo_items'

export default props => {

    const listElements = todoItems.map((item, index) => {
        return <li key={index} className="collection-item">{item.title}</li>
    })

    return (
        <ul className="collection">
            <li className="collection-item">I'm a list</li>
            {listElements}
        </ul>
    )
}