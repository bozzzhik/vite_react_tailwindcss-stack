import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="flex mx-auto justify-center text-3xl mt-[10vw]">
        <a href="https://vitejs.dev" target="_blank">
          <img src="./public/vite.svg" className="h-[6em] will-change-[filter] transition-[filter] duration-300 p-[1.5em] logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="h-[6em] will-change-[filter] transition-[filter] duration-300 p-[1.5em] logo react" alt="React logo" />
        </a>
      </div>
      <a className="font-medium text-white hover:underline hover:text-violet-400 text-7xl" target={'_blank'} href="https://github.com/bozzzhik/vite_react_tailwindcss-stack">
        Vite + React
      </a>
      <button className="mt-6 rounded border-transparent border-2 bg-[#1a1a1a] text-white text-xl font-medium cursor-pointer transition duration-500 ease-out px-3 py-1 grid place-items-center m-auto" onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  )
}

export default App
