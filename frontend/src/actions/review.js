/*import * as api from '../api';

export const getReviews = ( id ) => async ( dispatch ) => {
    try{
        const { data } = await api.fetchReviewInfo( id );
        dispatch( { type : 'FETCH_ALL_REVIEWS', payload: data.review } );
        console.log( data.review );
    }catch( error ){
        console.log( error )
    }
}*/