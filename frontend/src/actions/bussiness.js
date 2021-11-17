import * as api from '../api';

//Action creators

export const getBusinsessInfo = (search) => async(dispatch)=>{

    try{
        
       const { data } =  await api.fetchBussinessInfo(search);
       console.log( data.data );
        // dispatch( { type : 'FETCH_ALL', payload: data} );
    }catch(error){
        console.log( error );
    }
    
   
}