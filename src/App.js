import React from 'react'
import './App.css'
import AboutSection from './Components/AboutSection'
import Sidebar from './Components/Sidebar'
import BasicModule from './Components/BasicModule'
import BasicPropsModule from './Components/BasicPropsModule'
import DefaultPropsModule from './Components/DefaultPropsModule'
import BasicStateModule from './Components/BasicStateModule'
import StateArrayModule from './Components/StateArrayModule'
import LocalJsoneModule from './Components/LocalJsonModule'
import Checklist from './Components/Checklist'

const App = () => {
  return (
    <div>
      <Sidebar /> {/* <- Navigation for the site */}
      <main className="App">
        {/* Welcome msg and info about me */}
        <AboutSection />
        <section className="modules">

        </section>
        {/* Examples of good UX */}
        <h5 style={{ padding: 0, margin: 0, marginBottom: 12 + 'px', fontSize: 4 + 'rem', }} >UI/UX examples</h5>
        <section className="modules">

        </section>
        {/* React modules */}
        <h5 style={{ padding: 0, margin: 0, marginBottom: 12 + 'px', fontSize: 4 + 'rem', }} >React modules</h5>
        <section className="modules">
          <BasicModule />
          <BasicPropsModule value='pink' />
          <DefaultPropsModule />
          <BasicStateModule />
          <StateArrayModule />
          <LocalJsoneModule />
          <Checklist />
        </section>
      </main >
    </div>
  )
}

export default App
