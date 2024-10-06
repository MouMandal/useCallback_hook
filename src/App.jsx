
import { useCallback, useState } from 'react'
import './App.css'
import First from './components/First';

function App() {

  const [count, setCount] = useState(0);
  const [value, setValue] = useState("good");
  const [num, setNum] = useState(0);



  const functions = useCallback(() => {
    return 'another'
  }, [])


  // const functions = useCallback(() => {
  //   return 'another'
  // }, [count])



  return (
    <>
      <First value={value} functions={functions} />
      <button onClick={() => {
        setCount((count) => count + 1)
      }}>count is</button>
      <p>{count}</p>

    </>
  )
}

export default App
