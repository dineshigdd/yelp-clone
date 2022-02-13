const initialState = { 
    businesses: { businesses: []} ,
    region: {
        longitude: -118.32138061523438, 
        latitude: 34.0615895441259
     }, 
     reviews : {}  }


// Los Angeles, CA, USA Latitude and longitude coordinates are: 34.052235, -118.243683.
export default ( state = initialState, action ) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    // console.log( newState);
    switch( action.type ){
        case 'FETCH_ALL':            
                 newState.businesses   = action.payload;                  
                 newState.region.longitude = action.payload.region.center.longitude;
                 newState.region.latitude = action.payload.region.center.latitude;
                 console.log(newState.region)                 
                 return newState
        case 'FETCH_REVIEWS':              
              newState.reviews = action.payload;           
              return  newState;
        default : 
            return state;
        
    }
}