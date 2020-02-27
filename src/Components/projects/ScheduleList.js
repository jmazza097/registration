import React from 'react'
import ScheduleSummary from './ScheduleSummary'
import {Link} from 'react-router-dom'

const ScheduleList = ({projects}) => {
    return(
        <div className="schedule-list section">
            { projects && projects.map(project => {
                return(
                    <Link to ={'/class/' + project.id} key={project.id}>
                        <ScheduleSummary project ={project} />
                    </Link>
                )
            })}
        </div>
    )
}

export default ScheduleList