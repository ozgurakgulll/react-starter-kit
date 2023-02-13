import {useEffect} from "react";
function Test(){
    useEffect(()=>{console.log('component render oldu !')})
    useEffect(()=>{console.log('component ilk Yüklendiğinde çalışır')},[])
    return (
        <div>
            Test Component
        </div>
    )
}
export  default Test
