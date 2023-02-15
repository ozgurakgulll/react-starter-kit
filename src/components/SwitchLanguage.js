
import {useSite} from "./context";

export default function  SwitchLanguage(){
    const {language,setLanguage}=  useSite()
    return(
        <>
            Mevcut dil= {language}<br/>
            <button onClick={()=>setLanguage(language==='tr'?'en':'tr')}>Lang Değiştir</button>
        </>
    )
}
