import './App.css';
import { useEffect, useState, useCallback } from 'react';

function App() {
  const [ number, setNumber ] = useState(0);
  const [ name, setName ] = useState("");
  const myFunction = useCallback(()=> {
    console.log(`myFunction: number ${number}`);
    return;
  },[number])
  // const myFunction = ()=>{
  //   console.log(`myFunction: number ${number}`);
  //   return;
  // }
  useEffect(()=>{
    console.log("myFunction이 변경되었습니다.");
  },[myFunction])
  return (
    <div className="App">
      <input type="number"
      value={number}
      onChange={(e)=> setNumber(e.target.value)}
      />
      <br/>
      <button onClick={myFunction}>함수호출</button>
      <br/>
      <input type="text"
      value={name}
      onChange={(e)=> setName(e.target.value)}
      />
    </div>
  );
}

export default App;
