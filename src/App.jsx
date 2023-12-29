import { useState } from 'react'
import Header from './component/header'
import { Section1, Section2, Img_section, Review_section, Section1_2 , Footer } from "./component/section1";
import './style.css'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Img_section />
      <Review_section />
      <Section1_2 />
      <Footer />

    </>
  )
}

export default App
