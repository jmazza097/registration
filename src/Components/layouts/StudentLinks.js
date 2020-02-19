import React from 'react'
import { NavLink } from 'react-router-dom'



const StudentLinks = () =>{
    return(
        <ul className="right">
            <li><NavLink to = '/'>Courses</NavLink></li>
            <li><NavLink to = '/'>Classrooms</NavLink></li>
            <li><NavLink to = '/'>MySchedule</NavLink></li>
            <li><NavLink to = '/' class = "btn btn-floating pink lighten-1">JM</NavLink></li>
            <li><NavLink to = '/'>Logout</NavLink></li>
        </ul>
    )
}
export default StudentLinks