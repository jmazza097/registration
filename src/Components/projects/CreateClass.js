import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createProject } from '../../store/actions/projectsActions'

class CreateClass extends Component {
    state={
        title: '',
        description: ''
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) =>{
       e.preventDefault();
       //console.log(this.state)
       this.props.createProject(this.state)
    }
    render() {
        return (
            <div className = "container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text-darken-3">Create New Class</h5>
                    <div className="input-field">
                        <label htmlFor="title"> Class Name</label> 
                        <input type="text" id="title" onChange = {this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="description">Class Content</label> 
                        <textarea  id="description" className="materialize-textarea"  onChange = {this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn blue lighten">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps)( CreateClass)
