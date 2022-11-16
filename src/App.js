import { useRef, useState } from "react";
import SimpleRef from "./SimpleRef";

function App() {
  const [clicked, setClicked] = useState("");
  const test = ["red", "blue", "yellow"];
  const ref = useRef();

  return (
    <div>
      {test.map((e, i) => {
        return <SimpleRef key={i} ref={ref} color={e} clicked={clicked} setClicked={setClicked} />;
      })}
      <button onClick={() => console.log(ref.current)}>FOCUS</button>
    </div>
  );
}

export default App;
