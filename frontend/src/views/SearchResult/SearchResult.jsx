import React , { useEffect, useState } from 'react'
import './SearchResult.scss'
import { Review } from '..'
// import hotel from '../../assests/images/hotel.jpg';
import { useSelector , useDispatch } from 'react-redux';
import { getReviews } from '../../actions/bussiness';
import business from '../../reducers/business';
import { color } from '@mui/system';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MobileSearchResult from './MobileSearchResult/MobileSearchResult'


function SearchResult() {     
     

const [ state , setState ] = useState();
   
const businesses =  useSelector( ({ state }) => state.businesses ); 




const dispatch = useDispatch();
const reviews =  useSelector( ( { state } ) => state.reviews )

const comment = Object.keys(reviews).map( (e,k) =>  reviews[e].reviews.map( (item,i) => ( item )));
// reviews[ Object.keys(reviews)].reviews
//  Object.keys(reviews).reviews.map( review => console.log( review));


useEffect(()=>{  

    businesses.map( business =>  dispatch( getReviews( business.id )))
     
  },[dispatch]);
  

  
  

// console.log( reviews[0].text);
// reviews.map( review[0] => console.log( review.text));
// return <div>Test</div>

 return   businesses.map( ( business, key ) =>    
        <div className="search-result-container" key={ key }>           
            <div className="single-search-result-container">
                <div>
                    <img className="search-result-image" src={ business.image_url }/>  
                </div>   

                <div className="search-result-info">           
                     <div className="search-result-top">            
                        <div className="name-and-reviews">
                            <p>{ business.name }</p>
                            <div className="rating-container">
                                <span><Review /></span><span>{ business.review_count }</span>
                               
                            </div>       
                            <ul className="applied-filters">                                                          
                                 { business.categories.map( (item,key) =><li className="alias" key={ key }>{ item.alias }</li>)}
                                <li>{ business.price }</li>
                                <li>{ business.location.city }</li>              
                            </ul>
                        </div>         
                    </div>
                    
                    <div className="contact-info-container">                 
                        <div className="address-and-phone">
                            <p>{ business.display_address } </p>
                        </div>
                    </div>
                        <div className="review-container">                        
                        <ChatBubbleOutlineIcon />            
                            { 
                            Object.keys(reviews).map( (e,k) =>  ( e == business.id) ? 
                                reviews[e].reviews.map( (item, i)  => (i === 0 ) ?
                                <p className="review-excerpt" key={ i }>{ item.text }<a href="#" style={{ textDecoration: "none" ,fontWeight:"bold" , color: "rgba(2,122,151,1)" }}>more</a></p>
                                 : null )                                                       
                                :'')

                            }       

                                     
                        </div>              
                        
                </div>
            </div>
            <div className="CTA-link-container">
                 <div className="CTA-link"><a>Start Order</a></div> 
            </div>
        </div>
    )
 }


export default SearchResult;
