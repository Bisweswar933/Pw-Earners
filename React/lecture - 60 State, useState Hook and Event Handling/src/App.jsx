import { useState } from "react";
import Counter from "./components/Counter"
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";

function App() {

  const [value, setValue] = useState()

  function printCountValue(val) {

    setValue(val)
    // console.log(value);
  }

  return (
    <div>
      {/* <Navbar count={value} /> */}
      {/* <Counter printCountValue={printCountValue} /> */}
      {/* <Counter/> */}
      <Todo/>
    </div>
  )
}

export default App
