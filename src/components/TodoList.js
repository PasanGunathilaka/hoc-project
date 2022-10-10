import React, { useState, useEffect } from 'react'
import HOC from './HOC'

function ToDoList({data}) {


    // function to render users

    const renderTodos = data.slice(0,10).map((todo) => {
        return (
            <div key={todo.id}>
                <p>{todo.title}</p>
            </div>
        )
    })





    return (

        <div>
            <div>
                {renderTodos}
            </div>
        </div>

    )
}

const SearchTodos = HOC(ToDoList,"todos");

export default  SearchTodos;