import {createContext} from 'react'

const DataContext = createContext({
  name: null,
  capital: null,
  region: null,
  flag: null,
  languages: { name: null},
  area: null,
  getCowntry: () => {},
  cowntryName: {}
})

export default DataContext