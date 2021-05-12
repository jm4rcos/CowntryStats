import React, { useState } from 'react'
import DataContext from './DataContext'

const DataProvider = ({ children }) => {

  const [cowntryName, setCowntryName] = useState({})

  function getCowntry(cowntry){
    setCowntryName(cowntry)
  }

  return (
    <DataContext.Provider value={{cowntryName, getCowntry}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider