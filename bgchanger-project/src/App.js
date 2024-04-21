import { useState } from "react";

function App() {
  const [color, setColor] = useState('black');

  return (
    <div classNameName="w-full h-screen duration-1000 text-white text-center " style={{ backgroundColor: color }}> <h1 classNameName="text-3xl py-60">Background Changer</h1>
      <div classNameName="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div classNameName="flex flex-wrap justify-center gap-3 shadow-xl bg-white rounded-3xl px-3 py-2 ">
          <button onClick={() => setColor("red")} classNameName="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => setColor("green")} classNameName="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={() => setColor("orange")} classNameName="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "Orange" }}>Orange</button>
          <button onClick={() => setColor("yellow")} classNameName="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "yellow" }}>Yellow</button>
          <button onClick={() => setColor("pink")} classNameName="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "pink" }}>Pink</button>
          <button onClick={() => setColor("purple")} classNameName="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "purple" }}>Purple</button>
        </div>
      </div>
    </div>
  );
}

export default App;
