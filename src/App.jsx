import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-1000 "style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
           <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => setColor("Red")} className="outline-none px-4 py-1 rounded-full text-black  " style={{backgroundColor:"red" }}>Red</button>
            <button onClick={() => setColor("Blue")} className="outline-none px-4 py-1 rounded-full text-black" style={{backgroundColor:"Blue" }}>Blue</button>
            <button onClick={() => setColor("Olive")} className="outline-none px-4 py-1 rounded-full text-black" style={{backgroundColor:"Olive" }}>Olive</button>
            <button onClick={() => setColor("Yellow")} className="outline-none px-4 py-1 rounded-full text-black" style={{backgroundColor:"Yellow" }}>Yellow</button>
            <button onClick={() => setColor("Purple")} className="outline-none px-4 py-1 rounded-full text-black" style={{backgroundColor:"Purple" }}>Purple</button>

           </div>
           </div>
      </div>
    </>
  )
}

export default App
