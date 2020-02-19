import React from 'react'
import { Link } from 'react-router-dom'
import StudentLinks from './StudentLinks'
import AdminLinks from './AdminLinks'


const Navbar = () =>{
    return(
        <nav class = "nav-wrapper blue darken-4">
            <div class="container">
                <Link to='/' className="brand-logo">Don Code-leone</Link>
                <StudentLinks/>
                <AdminLinks/>
            </div>
        </nav>
    )
}
export default Navbar