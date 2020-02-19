import React, { Component } from 'react'
import Notifications from './Notifications'
import ScheduleList from '../projects/ScheduleList'

class Dashboard extends Component{
    render(){
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ScheduleList/>
                    </div>                    
                    <div className="col s12 m5 offset-m1"></div>
                        <Notifications/>
                </div>
            </div>
        )
    }
}

export default Dashboard