import * as api from '../api';

//Action creators

export const getBusinsessInfo = () => async(dispatch)=>{

    try{
        const { data } = await api.fetchBussinessInfo();
        dispatch( { type : 'FETCH_ALL', payload: data} );
    }catch(error){
        console.log( error );
    }
    
   
}