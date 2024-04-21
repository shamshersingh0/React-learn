import { useState, useCallback, useEffect, useRef } from 'react';


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)

  const copyClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,6)
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()_-+={[}]|\\?/,.;"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass)
  }, [length, numberAllowed, characterAllowed, setPassword])



  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])


  return (
    <>
      <div classNameName='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 classNameName='text-white text-4xl my-3 text-center'> Password Generator</h1>
        <div classNameName='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text' value={password} classNameName='outline-none w-full py-1 px-3' placeholder='Password' readOnly  ref={passwordRef}/>

          <button classNameName='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyClipboard}>copy</button>

        </div>
        <div classNameName='flex text-sm gap-x-2'>
          <div classNameName='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              classNameName='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
          <div classNameName='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label>Numbers</label>

            <input
              type='checkbox'
              defaultChecked={characterAllowed}
              id="characterInput"
              onChange={() => {
                setCharacterAllowed((prev) => !prev)
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
