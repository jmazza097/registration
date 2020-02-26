import React from 'react'

const ScheduleSummary = ({project}) => {
    return(
        <div className="card z-depth-0 schedule-summary">
            <div className="card-content grey-text text-darken-3">
              <span className="card-title">{project.title}</span>
              <p className="grey-text">last Updated: date/time</p>
              <p>Blahblah</p>
            </div>
        </div>
    )
}

export default ScheduleSummary