import { useCallback, useEffect, useState, useRef, useMemo, type KeyboardEvent, type MouseEvent } from "react"

interface User {
  id: number,
  username: string,
}

type fibFunc = (n: number) => number

const fib: fibFunc = (n) => {
  if (n < 2) return n
  return fib(n -1) + fib(n - 2)
}

const myNum: number = 16

function App() {
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<User[] | null >(null)

  const inputRef = useRef<HTMLInputElement>(null)

  console.log(inputRef?.current)
  console.log(inputRef?.current?.value)

  useEffect(() => {
    console.log("Mounting")
    console.log("Users:", users)
    return () => console.log("Unmounting")
  }, [users])
  
  // const addTwo = useCallback(()=> setCount(prev => prev + 2), [])
  const addTwo = useCallback((e: MouseEvent<HTMLButtonElement>| KeyboardEvent<HTMLButtonElement>): void => setCount(prev => prev + 2), [])

  //* useMemo: React çerçevesinde pahalı hesaplamaları hafızaya alarak performansı optimize etmek için tasarlanmış değerli bir araçtır
  const result = useMemo<number>(()=> fib(myNum),[myNum])

  return (
   <div className="App">
    <h1>{count}</h1>
    <button onClick={addTwo}>Add</button>
    <h2>{result}</h2>
    <input ref={inputRef} type="text" />
   </div>
  )
}

export default App