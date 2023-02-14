import {forwardRef, useRef} from "react";
const Input=forwardRef((props,ref)=>{
    return <input ref={ref} type="text" {...props}/>
})
function Ders6(){
    const interRef=useRef()
    const focusInput=()=>{
        console.log(interRef.current.focus())
    }
    return(
        <>
            <h1>useRef() - useForward()</h1>
            <Input title="test" ref={interRef}/>
            <button onClick={focusInput}>Focusla</button>
        </>
    )
}
export default Ders6
