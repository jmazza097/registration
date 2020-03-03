import React from 'react'
import { Link } from 'react-router-dom'
import StudentLinks from './StudentLinks'
import AdminLinks from './AdminLinks'
import {connect} from 'react-redux'


const Navbar = () =>{
    return(
        <nav className = "nav-wrapper blue darken-4">
            <div className="container">
                <Link to='/' className="brand-logo">Don Code-leone</Link>
                <StudentLinks/>
                <AdminLinks/>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) =>{
        console.log(state);
    return{

    }
}
export default connect(mapStateToProps)( Navbar)