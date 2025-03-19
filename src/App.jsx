import { useState } from 'react'
import './App.css'
import Currency from './components/Currency'
import './css/currency.css'

function App() {
  
  return (

    <div style={{display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:'20px'}}><Currency/></div>
  )
}

export default App
