import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdReturnLeft } from 'react-icons/io'

import logoSVG from '../../assets/logo.svg'

import styles from './navbar.module.scss'

export default function Navbar(){
  
  return(<>
    <div className={styles.container}>
      <img src={logoSVG} alt="logo" />

      <Link to='/' style={{textDecoration: 'none'}}>
        <button>
          <IoMdReturnLeft size={19} color="#6D2080"/>
          <span>Voltar</span>
        </button>
      </Link>
    </div>
  </>) 
}