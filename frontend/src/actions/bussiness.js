import * as api from '../api';

//Action creators

export const getBusinsessInfo = (search) => async (dispatch)=>{

    try{
        
       const { data } =  await api.fetchBussinessInfo(search);
       
        dispatch( { type : 'FETCH_ALL', payload: data.businesses } );
    }catch(error){
        console.log( error );
    }
    
   
}


export const getReviews = ( id ) => async ( dispatch ) => {
    try{
        const { data } = await api.fetchReviewInfo( id );
        dispatch( { type : 'FETCH_REVIEWS', payload: data.businesses } );
        console.log( data.businesses );
    }catch( error ){
        console.log( error )
    }
}

