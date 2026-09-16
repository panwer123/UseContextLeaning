import { useState } from 'react'
import { userContext } from './utils/userContext'
import './App.css'
import { users } from './utils/mockdata'
import Comp1 from './components/comp1'
import Comp2 from './components/comp2'
import Comp3 from './components/comp3'
import Comp5 from './components/Comp5'
import Comp6 from './components/Comp6'
import Feature from './components/Feature'


function App() {
 
  return (
    <userContext.Provider value={users}>
    <div>
    <Comp1/>
    <Comp2/>
    <Comp3/>
    <comp4/>
    <Comp5/>
    <Comp6/>
    <Feature/>
    </div>
    
    </userContext.Provider>
  )
}

export default App
