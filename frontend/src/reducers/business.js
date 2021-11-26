export default ( state = { businesses: [], reviews : []  }, action ) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    console.log( newState);
    switch( action.type ){
        case 'FETCH_ALL':                                 
                 newState.businesses = action.payload.businesses;                   
                 return newState
        case 'FETCH_REVIEWS':      
      
              newState.reviews = action.payload.reviews;           
              return  newState;
        default : 
            return state;
        
    }
}