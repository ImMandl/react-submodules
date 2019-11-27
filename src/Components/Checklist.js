import React, { useState } from 'react'
import ChecklistSubmodule from './ChecklistSubmodule'

const Checklist = () => {

    const array = ["Feed the cat", "Vacuum livingroom", "Buy dinner", "Update CV", "Train on react", "Say a kind word to someone"]
    const [todos, setTodos] = useState(array)

    const remove = (index) => {
        // fjerner checklist item
        setTodos(
            // todo != annerledes fra todos
            todos.filter(todo => todo !== todos[index])
        )
    }

    const addItem = (e) => {
        if (e.keyCode === 13) {
            setTodos([...todos, e.target.value])
            e.target.value = ''
        }
    }


    return (
        <div className="submodule">
            <h2>Checklist module</h2>
            <p>A module that can add an item or remove it from an array. Can also check the box to say the item is done. </p>
            <p>You can type in the input field below and press enter to add items to the array.</p>
            <input type="text" placeholder="Type to add item to checklist.." onKeyDown={addItem} />
            {
                todos.map(
                    (todo, index) => <ChecklistSubmodule remove={remove} myNumber={index} todo={todo} />
                )
            }
        </div >
    )
}

export default Checklist