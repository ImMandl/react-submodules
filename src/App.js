import React from 'react'
import './App.css'
import BasicModule from './Components/BasicModule'
import BasicPropsModule from './Components/BasicPropsModule'
import DefaultPropsModule from './Components/DefaultPropsModule'
import BasicStateModule from './Components/BasicStateModule'
import StateArrayModule from './Components/StateArrayModule'
import LocalJsoneModule from './Components/LocalJsonModule'
import Checklist from './Components/Checklist'
import Characters from './Components/Characters'

const App = () => {
  return (
    <main className="App" >
      <section className="modules" >
        <BasicModule />
        <BasicPropsModule value='pink' />
        <DefaultPropsModule />
        <BasicStateModule />
        <StateArrayModule />
        <LocalJsoneModule />
        <Checklist />
        <Characters />
      </section>
    </main>
  )
}

export default App