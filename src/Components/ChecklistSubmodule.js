import React, { useState } from 'react'
import './ChecklistSubmodule.css'
import { MdDelete } from "react-icons/md";


const ChecklistSubmodule = (props) => {

    const [checked, setChecked] = useState(false)

    const checkMe = () => {
        setChecked(!checked)
    }

    return (
        <section className="submodule checklist-item">
            <li className={checked ? 'checked' : ''}>{props.todo}</li>
            <div>
                <input type="checkbox" onClick={checkMe} />
                <MdDelete onClick={() => props.remove(props.myNumber)} />
            </div>
        </section>
    )
}

export default ChecklistSubmodule