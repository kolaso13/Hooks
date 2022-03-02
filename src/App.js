import { useState } from "react";
import FetchCard from "./components/FetchCard";
import Lifecycle from "./components/Lifecycle";
import ResizeApp from "./components/ResizeApp";

function App() {
  const [show, setShow] = useState(false);
  
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Show/Hide</button>
        {/* {show && <ResizeApp/>} */}
        <Lifecycle/>
    </div>
  );
}

export default App;
