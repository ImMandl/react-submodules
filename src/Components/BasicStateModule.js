import React, { useState } from 'react'

const BasicStateModule = () => {

    const [count, setCount] = useState(0)

    return (
        <div className="submodule">
            <h2>Basic state module</h2>
            <p>State is a very fast way to update certain values on a webpage. Without renedering all the HTML and CSS. Take this number for a example: <b>{count}</b></p>
            <button onClick={() => setCount(count + 1)} >Push me to count</button>
        </div>
    )
}

export default BasicStateModule