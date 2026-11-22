import ControlledComponent from "./components/ControlledComponent";
import UnControlledComponent from "./components/UnControlledComponent";
import UnControlledComponentUserRef from "./components/UnControlledComponentUserRef";


function App(){
  return(
    <div>
      <ControlledComponent/>
      <UnControlledComponent/>
      <UnControlledComponentUserRef/>
    </div>
  )
}

export default App;