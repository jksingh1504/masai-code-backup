import React from 'react'
import { createContext } from 'react'

export const DataContext=createContext()

const DataProvider = ({children}) => {
    const [totalProduct,setTotalProduct]=React.useState(0)
    const [islogged,setIslogged]=React.useState(false);

  return (
    <DataContext.Provider value={{totalProduct,setTotalProduct,islogged,setIslogged}}>{children}</DataContext.Provider>
  )
}

export default DataProvider