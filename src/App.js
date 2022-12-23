import { useState } from "react";
import Label from "./components/Label";

function App() {

  const [getColor, setColor] = useState("");

  return (
    <div className="container">
      <Label value={getColor}/>
      <input type="text" className="" placeholder="Ubah Warna" onChange={({target}) => {setColor(target.value)}}/>
    </div>
  );
}

export default App;
