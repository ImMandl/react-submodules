import React from 'react'

const DefaultPropsModule = (props) => {
    return (
        <section className="submodule">
            <h2>Default props submodule</h2>
            <p>This is a module that recives a property from its parent(App.js). And the prop is: <b className='propPink'>{props.value}</b> - but wait, there is no property!</p>
            <p>Instead we can give the submodule a default prop: <b>{props.value || 'I am a default value'}</b></p>
        </section>
    )
}

export default DefaultPropsModule