import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import "./layout.css"
import { Helmet } from "react-helmet"

function layout({ children }) {
    return (
        <div className="layout">
            <Helmet>
                <link rel="stylesheet" href="https://use.typekit.net/jny3mgp.css"></link>
            </Helmet>
            <Header />
                {children}
            <Footer />
        </div>
    )
}

export default layout
