import Usercard from "./components/usercard";
import default_pfp from "./assets/basic.jpg"

function App() {
  return (
    <div>
      <Usercard name="Nikhs" desc="description of nikhs" image={default_pfp}/>
      <Usercard name="ravi" desc="description of ravi" image={default_pfp}/>
      <Usercard name="shreyas" desc="description of shreyas" image={default_pfp} />
    </div>
  );
}

export default App;