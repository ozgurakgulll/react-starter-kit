
import {useSite}from "./context";
export default function  SwitchTheme(){
  const {theme,setTheme}=  useSite()
  return(
      <>
          <button onClick={()=>setTheme(theme==='light'?'dark':'light')}>Thema Değiştir</button>
      </>
  )
}
