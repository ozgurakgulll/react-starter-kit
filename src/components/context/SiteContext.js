import {createContext, useContext, useState} from "react";
export const Context=createContext()

export const useSite=()=>useContext(Context)
const Provider=({children})=>{
    const [theme,setTheme]=useState('light')
    const [language,setLanguage]=useState('tr')
    const data={
        theme,
        setTheme,
        language,
        setLanguage
    }
    return(
        <Context.Provider  value={data}>
            {children}
        </Context.Provider>
    )
}
export default Provider
