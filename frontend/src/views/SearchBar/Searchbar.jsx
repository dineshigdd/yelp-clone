import React, { useState, useEffect } from 'react';
import './SearchBar.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { getBusinsessInfo } from '../../actions/bussiness';
import { useSelector } from 'react-redux';
import e from 'cors';
import { useDispatch } from 'react-redux';

function SearchBar({ LogoMenuState , IsFilterListMapButtonState }) {
    
    const [ input , setInput] = useState();
    const [ term, setTerm ] = useState();
    const [ location, setLocation ] = useState();
    const dispatch = useDispatch();
 
    const businesses =  useSelector( ( state ) => state.businesses )
    // const [ button , setButton] = useState();
    
    const displayInputControls = ()=><input className="location-input" type="text"></input>;

    const displayButtonControls = ()=>{
        return (
        <div className="mobile-search-icon-contianer">
            <div  onClick={()=>{ 
                    setInput( null) ;
                    IsFilterListMapButtonState( true )}} className="mobile-cancel-link">
            <a>Cancel</a>
            </div>
            <SearchRoundedIcon  fontSize="large" />
       </div>
        )
    }
    
    //dispatching redux actions
// useEffect(()=>{
//     dispatch(getBusinsessInfo());
//   },[dispatch]);
   

    return (
        // <div>
            <div className="search-bar-outer-container">   
                <div className="search-bar-inner-container">
                    <div id="mobile-search-input-container">
                            <input onClick={()=>{ 
                                setInput( displayInputControls );
                                LogoMenuState( displayButtonControls );
                                IsFilterListMapButtonState( false )}} 
                                list="search-criteria" name="browser" className="search-criteria" id="search-criteria" 
                                placeholder="tacos, cheap dinner, Max's"
                             />

                            <datalist id="search-criteria">
                                <option value="Edge" />
                                <option value="Firefox" />
                                <option value="Chrome" />
                                <option value="Opera" />
                                <option value="Safari" />
                            </datalist>
                        { input }     
                   </div>            

                   <div id="lg-screen-search-input-container">
                            <input list="search-criteria" name="browser" className="lg-screen-search-criteria" id="lg-screen-search-criteria" 
                                placeholder="Dsektop tacos, cheap dinner, Max's"
                                onChange={ (e)=>setTerm(e.target.value)}
                                />

                            <datalist id="lg-screen-search-criteria">
                                <option value="Edge" />
                                <option value="Firefox" />
                                <option value="Chrome" />
                                <option value="Opera" />
                                <option value="Safari" />
                            </datalist>
                            <input className="lg-screen-location-input" type="text" 
                                onChange={ (e)=>setLocation( e.target.value )}
                            />
                   </div>             
                </div>    
               <div className="search-icon-contianer" onClick={  ()=>dispatch(getBusinsessInfo({ term, location })) }>
                        <SearchRoundedIcon className="search-icon" fontSize="large" />       
                </div>              
             </div>

             
        // </div>
    )
}

export default SearchBar
