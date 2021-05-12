import React, { useContext, useEffect } from 'react'
import DataContext from '../../contexts/DataContext'

import Navbar from '../Navbar'

import styles from './tela2.module.scss'

export default function Tela2(){

  const { cowntryName } = useContext(DataContext)

  console.log(cowntryName);

  return (<>
    <Navbar/>
    
    <div className={styles.container}>
      <div className={styles.current}>
        <div className={styles.flag}>
          <img src={cowntryName.flag} alt="" />
        </div>
        <div className={styles.info}>
          <p>Nome: {cowntryName.name}</p>
          <p>Capital: {cowntryName.capital}</p>
          <p>Região: {cowntryName.region}</p>
          <p>Sub-região: {cowntryName.subregion}</p>
          <p>População: {cowntryName.population.toLocaleString('pt-BR', { minimumFractionDigits: 0 } )}</p>
          <p>Linguas: {cowntryName.languages[0].name}</p>
        </div>
      </div>

      <div className={styles.more}>
        <p>Países vizinhos</p>

        <div className={styles.vizinhos}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </>)
}