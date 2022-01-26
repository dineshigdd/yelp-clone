
// Los Angeles, CA, USA Latitude and longitude coordinates are: 34.052235, -118.243683.
export default ( state = { businesses: [], region:{}, reviews : []  }, action ) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    // console.log( newState);
    switch( action.type ){
        case 'FETCH_ALL':                                 
                 newState.businesses = action.payload.businesses;  
                 newState.region.lng = action.payload.region.center.longitude;
                 newState.region.lat = action.payload.region.center.latitude;
                 console.log(newState.region)                 
                 return newState
        case 'FETCH_REVIEWS':      
        
              newState.reviews = action.payload;           
              return  newState;
        default : 
            return state;
        
    }
}