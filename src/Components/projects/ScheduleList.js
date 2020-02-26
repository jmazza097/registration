import React from 'react'
import ScheduleSummary from './ScheduleSummary'

const ScheduleList = ({projects}) => {
    return(
        <div className="schedule-list section">
            { projects && projects.map(project => {
                return(
                    <ScheduleSummary project ={project} key={project.id}/>
                )
            })}
        </div>
    )
}

export default ScheduleList