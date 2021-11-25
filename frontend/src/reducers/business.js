export default ( businesses = [], action ) => {
    switch( action.type ){
        case 'FETCH_ALL':            
            return action.payload;
        case 'FETCH_REVIEW':
            return action.payload;
        default : 
            return businesses;
        
    }
}