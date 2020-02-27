export const createProject = (project) =>{
    return(dispatch, getState, {getFirestore}) =>{
        //make async callto  db
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'jack',
            authorLastName: 'Mazza',
            time: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
          }).catch(err => {
            dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
          });
        }
      };