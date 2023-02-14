import './tailwind.css'
import Test from './components/test'
import {useState} from "react";
import Ders6 from "./components/Ders6";
import Ders7 from "./components/Ders7";
import Header from "./components/Header";
function App() {
    // const [show,setShow]=useState(false)
    return (
        <>
            <Header/>
         <div className="d-flex">
             <Ders7/>
         </div>

        {/*<button onClick={()=>setShow(show=>!show)}> {show ? 'gizle':'göster'}</button>*/}

        {/*    {show &&<Test/>}*/}

        </>
  );
}

export default App;
