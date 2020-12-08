import React from 'react'
import "./Articlebox.css"
import { Link } from "gatsby"

function Articlebox({ topic, title, passColor, linkref}) {
    return (

        <div style={{ backgroundColor: passColor }} className="articleBox">
            <Link to={linkref}>
           <div className="articleBox__title">
                <h6 style={{ color: passColor }}> <u>{ topic }</u></h6>
                <h2>{ title }</h2>
            </div>
  
            </Link>
      </div>
    )
}


export default Articlebox
