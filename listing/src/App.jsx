import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './component/header'
import { Thing } from './component/thing'
import data from './assets/data/desc'
import Cat from './assets/data/cat'
import legume from './assets/data/legume.json'
import { Users } from './component/Users'
import utilisateur from './assets/data/user.json'


function App() {

  return (
    <>
      <div>
        <Header/>
        <Thing desc={data[0]} content={Cat} id="cat"/>
        <Thing desc={data[1]} content={legume} id="legume"/>
        <Users desc={data[2]} data={utilisateur} id="user"/>
      
      </div>
    </>
  )
}

export default App
