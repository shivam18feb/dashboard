import { useState } from 'react'

import './App.css'
import AutoLayoutVariableExample from  '../src/Components/index.jsx'



function App() {
const salesData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: 'rgba(75,192,192,0.4)',
    borderColor: 'rgba(75,192,192,1)',
    label: 'Sales',
  };

  return (
    <>
      <AutoLayoutVariableExample></AutoLayoutVariableExample>
 
    </>
  )
}

export default App
