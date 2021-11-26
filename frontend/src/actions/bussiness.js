import * as api from '../api';

//Action creators

export const getBusinsessInfo = (search) => async (dispatch)=>{

    try{
        
       const { data } =  await api.fetchBussinessInfo(search);
    
        dispatch( { type : 'FETCH_ALL', payload: data } );
    }catch(error){
        console.log( error );
    }
    
   
}



export const getReviews = ( id ) => async ( dispatch ) => {
    try{
        const { data } = await api.fetchReviewInfo( id );
       
        dispatch( { type : 'FETCH_REVIEWS', payload: data } );
        // console.log( data );
    }catch( error ){
        console.log( error )
    }
}

