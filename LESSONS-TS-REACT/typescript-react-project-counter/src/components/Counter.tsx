// import { useState } from 'react'

type CounterProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>; 
    children: React.ReactNode;
}

const Counter = ({setCount, children}: CounterProps) => {
    // const [count, setCount] = useState<number>(0)
  return (
    <>
        <h1>{children}</h1>
        <button onClick={()=>setCount(prev => prev + 1)}>+</button>
        <button onClick={()=>setCount(prev => prev - 1)}>-</button>
    </>
  )
}

export default Counter  