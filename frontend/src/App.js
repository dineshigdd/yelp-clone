import logo from './logo.svg';
import './App.css';
import { SearchBar , Filters , Map , SearchResult } from './views'
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState , createContext, useContext } from 'react';
import { useSelector  } from 'react-redux';
import {  useDispatch } from 'react-redux';
import { getBusinsessInfo , getReviews } from './actions/bussiness';
// import {  getReviews } from './actions/review';



function App() {

  const [state, setstate] = useState(null);
 const [btnState, setBtnstate] = useState(true);
 
 const location = 'Los Angeles, CA';
 const term  = '';
 
 // dispatching redux actions
 
 const dispatch = useDispatch();

useEffect(()=>{  
  dispatch( getBusinsessInfo({ term, location }));
  dispatch( getReviews('_GxXKKCjz5jYDjpQs_KPZQ'));
},[dispatch]);


//  const [ filterbtnState, setFilterBtnstate] = useState(false);
 

 const [ logoMenuState , setLogoMenuState ] = useState(<>
  <img className='yelp-logo'/>          
  <MenuIcon className="mobile-menu-icon"/>
 </>);

 const [ isfilterListMapButtonState, setIsFilterListMapButtonState ] = useState(true);
 const [ filterBar, setFilterBar ] = useState( true );
 
 window.addEventListener('resize', function(event) {
  // console.log(document.body.clientWidth )
  if( document.body.clientWidth < 800 ){
    setFilterBar( false );
  }else{
    setFilterBar( true );
  }
}, true);



 const FilterListMapBar = ({ isfilter })=>(          
         
            <div className="mobile-filter-list-map-links">
                          <div>
                            <button className="action-buttons" id="filter-button" onClick={ 
                              ()=> { setFilterBar(!filterBar); displaySections('filters')}}>{ !isfilter ? 'Filters':"Cancel" }</button>
                          </div>
                              <div>
                                  { (btnState) ? 
                                  <>
                                    <button className="action-buttons"  id="list-button" onClick={ ()=>displaySections('list') }>List</button> 
                                    <button className="action-buttons"  id="map-button" onClick={ ()=>displaySections('map') }>Map</button>
                                </>:
                                <><button className="action-buttons"  id="search-button" onClick={ ()=>displaySections("search") }>Search</button></>
                                 }       
                                    
                              </div>
              </div> 
              );
            
//  const [ filterListMapButtonState, setFilterListMapButtonState ] = useState( <FilterListMapBar/> );
 
 
 useEffect(()=> {  
  if( !isfilterListMapButtonState ){
    setFilterBar( false );
    setstate(null);   
  }},[isfilterListMapButtonState]);

  
//  useEffect(()=> {  
//       if( isfilterListMapButtonState ){
//         // setFilterListMapButtonState(<FilterListMapBar isfilter={ filterBar }/>);     
        
//     }else{      
//         // setFilterListMapButtonState(null) ;
//         setFilterBar( false );
//         setstate(null);
//     } 
// },[isfilterListMapButtonState]);
 


  
 useEffect(()=> {  
  
      if( !filterBar ){     
        setstate(null);            
    }else{      
      setstate(<div className="App-sidebar-left"><Filters/></div>);   
    } 
},[filterBar]);



 



 const displaySections = ( component )=>{
   switch(component){
        case 'filters':   
       
        // if( filterBar ){        
        //   document.getElementById('filter-button').textContent = 'Filters';
        //   // setstate(<div className="App-sidebar-left"><Filters/></div>)
        // }
        // else{          
         
        //   document.getElementById('filter-button').textContent = 'Cancel'; 
        //   // setFilterBar( true);
        // }  
       
      
     break;

     case 'map':
     
      setstate( <section className="App-search-result-section"><Map /></section>);     
      // setBtnstate( false )
     break;

     case 'search-result-lg-screen':        
    //  setstate(
    //  <>        
    //   <div className="App-sidebar-left"><Filters/></div>
    //   <aside className="App-sidebar-right">     <SearchResult businesses={ businesses }/>
    //           {/* { businesses.map( ( business, key) => <SearchResult key={ key } business={ business }/> ) } */}
    //   </aside>
    // </>
    // );  
     
      break;
     default:
       //display list of search results
      const searchReasult = [0,1,2];
      setstate(<aside className="App-sidebar-right">{ searchReasult.map( e => <SearchResult /> ) }</aside>);     
      // setBtnstate( false )
      break;
   }
    } 
 
  return (
    <div className="App">
      <header className='App-header'>         
            <div className="App-logo-and-menu-container">           
                { logoMenuState }                                                 
            </div>
     
            <div className="App-search-bar-container">
                <SearchBar 
                  LogoMenuState={ setLogoMenuState } 
                  IsFilterListMapButtonState = { setIsFilterListMapButtonState }
                  displaySections = { displaySections }   
                  />
                
            </div>      
        
            <div className="App-header-right-corner">
              <div>
                <span><a>For Business</a></span>
                <span><a>Write a review</a></span>
              </div>
              <div>
                <span className="App-auth-link App-login-link"><a>Log in</a></span>
                <span className="App-auth-link App-signup-link"><a>Sign up</a></span>
              </div>
            </div>
    </header>

      <main className="App-main-section">
        { isfilterListMapButtonState ? <FilterListMapBar isfilter={ filterBar }/>:null }
      {/* { filterListMapButtonState }  */}
        
       
       {  state } 
       <aside className="App-sidebar-right"><SearchResult /> </aside>
      </main>
      
    </div>
  );
}



export default App;


