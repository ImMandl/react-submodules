import React, { useState } from 'react'

const StateArrayModule = () => {

    const array = ['Hummingbird', 'Seagull', 'Blackbird', 'Bald Eagle', 'Penguin', 'Ostrich']
    const [birds, setBirds] = useState(array)

    /* Lar os filtrere fuglearrayet på input */
    const filterBirds = (e) => {
        setBirds(
            array.filter(bird => bird.toLowerCase().includes(e.target.value))
        )
    }

    return (
        <div className="submodule">
            <h2>State array module</h2>
            <p>This module has an array with birds in state. You can filter through the array by typing in the input field. It is not case sensitive.</p>
            <input type='text' placeholder='Type to filter birds...' onInput={filterBirds} />
            <p>The birds that are in the array are:</p>
            {
                birds.map(
                    (bird, i) =>
                        <li key={i}>{bird}</li>
                )
            }
        </div>
    )
}

export default StateArrayModule