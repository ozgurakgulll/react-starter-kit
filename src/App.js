import {getPosts,getPostDetail,newPost} from "./services"
import {useEffect} from "react";

function App() {

    useEffect(
        ()=> {
            getPosts().then(res=>console.log(res))
            getPostDetail(2).then(res=>console.log(res))
            newPost({
                userId:3,
                title:'test',
                body:'test'
            }).then(res=>console.log(res))
        }
    )

    return (
     <>
         App
     </>
  );
}

export default App;
