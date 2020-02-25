import React from 'react'
import { NavLink } from 'react-router-dom'



const AdminLinks = () =>{
    return(
        <ul className="right">
            <li><NavLink to = '/'>Courses</NavLink></li>
            <li><NavLink to = '/'>Classrooms</NavLink></li>
            <li><NavLink to = '/'>Add/Remove Course</NavLink></li>
            <li><NavLink to = '/'>Check Classes</NavLink></li>
            <li><NavLink to = '/' className = "btn btn-floating pink lighten-1">JM</NavLink></li>
            <li><NavLink to = '/'>Logout</NavLink></li>
        </ul>
    )
}
export default AdminLinks