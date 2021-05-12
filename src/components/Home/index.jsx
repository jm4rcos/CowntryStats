import React, { useEffect, useState, useContext } from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'
import DataContext from '../../contexts/DataContext' 

import api from '../../services/api'
import { regions } from '../../utils/array'

import styles from './home.module.scss'



export default function Home(){
  const { getCowntry } = useContext(DataContext)

  const [selectValue, setSelectValue] = useState('')
  const [region, setRegion] = useState('americas')
  const [countries, setCountries] = useState([])
  const [cowntryName, setCowntryName] = useState({})

  useEffect(() => {
    fetchRegion()
    console.log(countries);
    
  }, [region])

  async function fetchRegion(){
    try {
      const response = await api.get(`/region/${region}`)
      setCountries(response.data)

    } catch (error) {
      console.log(error)
    }
  }
  getCowntry(cowntryName)

  return (<>
    <Navbar/>

    <div className={styles.container}>
      <div className={styles.selectContainer}>
        <div>
          <label htmlFor="select">Filtrar por</label>
          <select id="select" onChange={e => setSelectValue(e.target.value)}>
            <option>Escolha uma opção</option>
            <option value="region">Região</option>
            <option value="">Capital</option>
            <option value="">Língua</option>
            <option value="">País</option>
            <option value="">Código de ligação</option>
          </select>
        </div>

        {selectValue === 'region' && (
          <div>
            <label htmlFor="region">Região</label>
            <select name="" id="region" onChange={e => setRegion(e.target.value)}>
              {regions.map(region => {
                return <option value={region} key={region}>{region}</option>
              })}
            </select>
          </div>
        )}

        <Link to='/'>
          <button>PESQUISAR</button>
        </Link>
      </div>

      <div className={styles.flags}>
        {countries?.map(cowntry => {
          return <Link to={`/:${cowntry}`}>
            <div key={cowntry.alpha3code} onClick={() => getCowntry(cowntry)}>{cowntry.alpha3code}
            <img src={`${cowntry.flag}`} alt={cowntry}/></div>
          </Link>
        }) }
      </div>
    </div>
  </>)
}