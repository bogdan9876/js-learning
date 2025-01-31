import React from 'react'
import { Link } from "react-router-dom"


function PageNotFound() {
    return (
        <div>
            <h1>Page Not Found :/</h1>
            <h3>Thy this links:
                <Link to="/">Home page</Link>
            </h3>
        </div>
    )
}

export default PageNotFound