export const createProject = (project) =>{
    return(dispatch, getState, {getFirebase, getFireStore}) =>{
        //make async callto  db
        dispatch({type: 'CREATE_PROJECT', project: project})
    }
}