import './tailwind.css'
import Test from './components/test'
import {useState} from "react";

function App() {
    const [show,setShow]=useState(false)
    return (
        <>
        <button onClick={()=>setShow(show=>!show)}> {show ? 'gizle':'göster'}</button>

            {show &&<Test/>}

        </>
  );
}

export default App;
