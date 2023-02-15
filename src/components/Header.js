import SwitchTheme from "./SwitchTheme";
import SwitchLanguage from "./SwitchLanguage";
import {useAuth} from "./context";

export default function Header(){
    const {user,setUser}=useAuth()
    const login=()=>{
        setUser({
            name:'tayfun',
            id:1
        })
    }
    const logout=()=>{
        setUser(false)
    }
    return(
        <header>
            Header <br/>
            {user && <button onClick={logout}>  Giriş Yap</button> || <button onClick={login}>Çıkış Yap</button>}
            <SwitchTheme />
            <SwitchLanguage />
        </header>
    )
}
