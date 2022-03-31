const initialState = { 
    businesses: { businesses: []} ,
    region: {
        center:{
            longitude: -118, 
            latitude: 34.0615895441259 
        }
     }, 
     reviews : {}  }
    

// Los Angeles, CA, USA Latitude and longitude coordinates are: 34.052235, -118.243683.
export default ( state = initialState, action ) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);


    switch( action.type ){
        case 'FETCH_ALL':            
        console.log( action.payload );
                 newState.businesses   = action.payload;                  
                 newState.region =  action.payload.region;
             
                 return newState
        case 'FETCH_REVIEWS':              
              newState.reviews = action.payload;           
              return  newState;
        default : 
            return state;
        
    }
}