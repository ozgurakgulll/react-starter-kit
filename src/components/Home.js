import Header from "./Header";
import Ders11 from "./Ders11";
import {useAuth} from "./context";

export default function  Home(){
    const {user}=useAuth()
    return(
        <>
            <Header />
            APP
            {user && (
                <div style={{padding:10,border:'1pc solid red'}}>
                    bu alan sadece giriş yapılınca görünür
                </div>
            )
            }
            <Ders11 />

        </>
    )
}
