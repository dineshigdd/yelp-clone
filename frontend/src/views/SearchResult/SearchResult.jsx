import React from 'react'
import './SearchResult.css'
import { Review } from '..'
import hotel from '../../assests/images/hotel.jpg';
import { useSelector } from 'react-redux';


function SearchResult() {     
     
    
const businesses =  useSelector( ( state ) => state.businesses ); 
 


 return  businesses.map( ( business, key ) =>    
        <div className="search-result-container" key={ key }>
            <p className="search-result-heading">The 10 Best Places near 7557 S Sepulveda Blvd, Los Angeles, CA 90045</p>
            <div className="single-search-result-container">
                <div>
                    <img className="search-result-image" src={ business.image_url }/>  
                </div>   

                <div className="search-result-info">           
                     <div className="search-result-top">            
                        <div className="name-and-reviews">
                            <p>{ business.name }</p>
                            <div className="reviews-container">
                                <span><Review /></span><span>{ business.review_count }</span>
                            </div>       
                            <ul className="applied-filters">                                                          
                                 { business.categories.map( (item,key) =><li key={ key }>{ item.alias }</li>)}
                                <li>{ business.price }</li>
                                <li>{ business.location.city }</li>              
                            </ul>
                        </div>         
                    </div>
                    
                    <div className="contact-info-container">                 
                        <div className="address-and-phone">
                            <p>4919 coldwater cyn, sherman oaks, CA 91423</p>
                            <p>(818)984-2616</p>
                        </div>
                    </div>
                    
                    <div>"This is the finnest restuarant I have been to for years. 
                            I never expect it to be this good. I will come back again 
                            because their prices are co cheap that I forget what I am easting"
                    </div>       
                  
                </div>
            </div>
            <div className="CTA-link"><a>Start Order</a></div> 
        </div>
    )
 }


export default SearchResult
