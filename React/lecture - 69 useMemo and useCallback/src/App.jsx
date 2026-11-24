import React, { useMemo, useState } from 'react'
import ChildComponent from './components/ChildComponent';


function calculateTotalSum(){
  let sum = 0;
  for(let i =0; i<1000000; i++){
    sum += i;
  }
  return sum;
}


function App() {
  const [count, setCount] = useState(0)

const value =  useMemo(()=> {
  return calculateTotalSum();
},[]);

    return (
    <div>
      <p>value : {count}</p>
      <button onClick={()=> setCount((p) => p+1)}>click</button>
      <p>Total sum: {value}</p>
      <ChildComponent/>
    </div>
  )
}

export default App