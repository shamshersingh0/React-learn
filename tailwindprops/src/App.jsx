import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/card"


function App() {
  const [count, setCount] = useState(0);

  // let obj = {
  //   username:"shami",
  //   age:21,
  // }

  return (
    <>
      <h1 classNameName='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card channel="chai aur code" username="Shami" btnText="click me!" />
      <Card channel="chai aur code" username="Shamsher singh"/>



    </>
  )
}

export default App
