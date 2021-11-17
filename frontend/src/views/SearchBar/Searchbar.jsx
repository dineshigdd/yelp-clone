import React, { useState } from 'react';
import './SearchBar.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { handleSubmit } from '../../helper/search';

function SearchBar({ LogoMenuState , IsFilterListMapButtonState }) {
    const [ input , setInput] = useState();
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
                                placeholder="tacos, cheap dinner, Max's"/>

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
                                placeholder="Dsektop tacos, cheap dinner, Max's"/>

                            <datalist id="lg-screen-search-criteria">
                                <option value="Edge" />
                                <option value="Firefox" />
                                <option value="Chrome" />
                                <option value="Opera" />
                                <option value="Safari" />
                            </datalist>
                            <input className="lg-screen-location-input" type="text"/>
                   </div>             
                </div>    
               <div className="search-icon-contianer" onClick={ handleSubmit }>
                        <SearchRoundedIcon className="search-icon" fontSize="large" />       
                </div>              
             </div>

             
        // </div>
    )
}

export default SearchBar
