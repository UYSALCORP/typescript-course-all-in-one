import Counter from "./components/Counter"
import Heading from "./components/Heading"
import List from "./components/List"
import Section from "./components/Section"

import { useState } from 'react'

function App() {

  const [count, setCount] = useState<number>(0)
 
  return (
    <>
      <Heading title={"Hello"}/>
      <Section title={"Different Title"}> This is my Section </Section>
      <Counter setCount={setCount}> Count is {count}</Counter>
      <List items={["YUNUS", "EMRE", "UYSAL"]} render={(item: string) => <span className="bold"> {item} </span>} />
    </>
    
  )

}

export default App
