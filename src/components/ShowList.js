import React from 'react';

export default function ShowList({ listItem, removeTodoHandler }) {
    const items = typeof listItem.ListData !== 'undefined' ? listItem.ListData.map(item => (
        <div key={item.id}>
            <span>{item.value}</span>
            <button onClick={() => removeTodoHandler({ id: item.id })}>Delete</button>
        </div>

    )) : "Add TODO";
    return (
        <div>
            <br />
            {items}
        </div>
    )
}
