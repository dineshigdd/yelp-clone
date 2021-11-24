import * as api from '../api';

//Action creators

export const getBusinsessInfo = (search) => async (dispatch)=>{

    try{
        
       const { data } =  await api.fetchBussinessInfo(search);
       console.log( data.businesses );
        dispatch( { type : 'FETCH_ALL', payload: data.businesses } );
    }catch(error){
        console.log( error );
    }
    
   
}