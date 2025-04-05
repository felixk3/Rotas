import { useState } from 'react'
import './style/Nav.css'
import { FaSearch } from 'react-icons/fa';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

function Detalhe() {
  return (
    <nav className='Nav'>
        <a href=''>code</a>
        <a href="">Carrinho</a>
        <div className='search'>
          <div className='input-btn'>
              <div className='input'><input placeholder='pesquisar...' type="text" /></div>
              <div className='btn-search'><button><FaSearch /></button></div>
          </div>
        </div>
    </nav>
  )
}

export default Detalhe
