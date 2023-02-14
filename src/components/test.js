import {useEffect,useState} from "react";
function Test(){
    const  [postId,setPostId]=useState(1)
    const  [post,setPost]=useState(false)
    useEffect(()=>
        {console.log('component ilk Yüklendiğinde çalışır')
           let iterval= setInterval(()=>console.log('111'),1000)
            return()=>{
                console.log('component destryoed')
        clearInterval(iterval)}
        },
        [])
    useEffect(()=>
        {
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
                .then(res=>res.json())
                .then(data=>setPost(data))
        },
        [postId])
    // useEffect(()=>{console.log('component render oldu !')})
    //
    //

    return (
        <div>
            <h3>{postId}</h3>
            {post&& JSON.stringify(post)}
            <button onClick={()=>{setPostId(postId=>postId+1)}}>Sokraki Konu</button>
            <hr/>
            Test Component
        </div>
    )
}
export  default Test
