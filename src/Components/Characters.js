import React, { useState } from 'react'
import RickMorty from '../Files/rickmorty'
import Character from './Character'

const Characters = () => {

    const [characters, setCharacters] = useState(RickMorty.results)

    return (
        <div className="submodule module-height scroll">
            <h2>Rick & Morty module</h2>
            <p>This module presents characters from Rick and Morty.</p>
            <div className="characters">
                {
                    characters.map(
                        (c, i) =>
                            <Character key={i} origin={c.origin.name} name={c.name} img={c.image} gender={c.gender} status={c.status} />
                    )
                }
            </div>
        </div>
    )
}

export default Characters