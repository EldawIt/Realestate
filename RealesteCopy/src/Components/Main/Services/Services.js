'use client'
import "./Services.css"
import Card1 from "./Card1"
import Descraption from "./Descraption/Descraption"
import { Fade } from "react-awesome-reveal"
function Services() {
  return (
    <div className="first">
      <Fade direction="top-down">
      <h1>من نحن</h1>
      </Fade>
    
      <Card1 />
      <Descraption />
    </div>
  )
}

export default Services
