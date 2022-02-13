import React, { useState, useEffect  } from 'react';
import './SearchBar.scss'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { getBusinsessInfo , getReviews } from '../../actions/bussiness';
import {  useDispatch ,useSelector } from 'react-redux';
import { SearchResult } from '..';


function SearchBar({ LogoMenuState , IsFilterListMapButtonState , displaySections }) {
    
    const [ input , setInput] = useState();
    const [ term, setTerm ] = useState(null);
    const [ location, setLocation ] = useState(null);
    const dispatch = useDispatch();
    const [ moileSearch , setMobileSearch ] = useState(false);
    const  { businesses } =  useSelector( ({ state }) => state.businesses ); 
    

  
    // const [ button , setButton] = useState();
    
    const displayInputControls = ()=><input className="location-input" type="text" 
                                    onChange={ (e)=>setLocation( e.target.value )}/>;

    const displayButtonControls = ()=>{
        return (
        <div className="mobile-search-icon-contianer">
            <div  onClick={()=>{ 
                    setInput( null) ;
                    IsFilterListMapButtonState( true )}} className="mobile-cancel-link">
                    <a>Cancel</a>
            </div>
            <div className="mobie-search-icon-inner-contianer" onClick={ ()=>setMobileSearch( true )   }>
                  <SearchRoundedIcon   fontSize="large" />
            </div>
       </div>
        )
    }
    
    
   const onsubmitHandler = async  (e) =>{
        e.preventDefault();     
        console.log( "term:"+ term +" " + "location:"+ location );  
        dispatch(getBusinsessInfo({ term, location }));        
        
   }

   useEffect(()=>{
    businesses.map( business => dispatch( getReviews( business.id )));
   },[businesses])
   
   
    useEffect(()=>{  
         dispatch(getBusinsessInfo({ term, location }));     
         setMobileSearch( false );
    },[moileSearch === true]);

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
                                onChange={ (e)=>setTerm(e.target.value)}
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
               <div className="search-icon-contianer" onClick={ onsubmitHandler }>
                        <SearchRoundedIcon className="search-icon" fontSize="large" />       
                </div>              
             </div>

             
        // </div>
    )
}

export default SearchBar
