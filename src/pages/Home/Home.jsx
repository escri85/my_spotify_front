import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import './Home.scss'
import Call from '../../context/Call';
const Home = ({setInputValue,inputValue,artist}) => {

const handleInput = (ev) => {
  console.log(ev.target.value);
  setInputValue(ev.target.value)
}
  // const handleInput = (ev)=>setInputValue(ev.target.value);
  return (
    <div className='home'>
       <InputText  onChange={handleInput} placeholder="Busca " value={inputValue}/>
    </div>
  )
}


export default Home