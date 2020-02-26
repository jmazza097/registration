export const createProject = (project) =>{
    return(dispatch, getState) =>{
        //make async callto  db
        dispatch({type: 'CREATE_PROJECT', project: project})
    }
}