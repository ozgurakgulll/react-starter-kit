
import styles from './App.module.css'
import {Title} from "./Components";
import Bootstrap from "./Bootstrap";

import Tailwind from "./Tailwind";
function App() {
  return (
    <div className={styles.App}>
        <Title>11111111        {process.env.REACT_APP_API_URL}</Title>
        <Title theme='dark'>11111111        {process.env.REACT_APP_API_URL}</Title>
     <img src="/logo512.png"/>
        {process.env.REACT_APP_API_URL}
        <Bootstrap/>
        <Tailwind/>
    </div>
  );
}

export default App;
