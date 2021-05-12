import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom' 
import DataProvider from './contexts/Provider'

import Routes from './routes'

import './styles/global.scss'

function App() {

  return (<>
    <DataProvider>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </DataProvider>
  </>);
}

export default App;
