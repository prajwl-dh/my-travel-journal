import React from "react"
import Navbar from "./components/Navbar.jsx"
import Page from "./components/Page.jsx"
import Data from "./data.js"

export default function App(){
    const pageData = Data.map((item) => 
        <Page  
            key = {item.id}
            item = {item}
        />
    )
    return(
        <div>
            <Navbar />
            {pageData}
        </div>
    )
}