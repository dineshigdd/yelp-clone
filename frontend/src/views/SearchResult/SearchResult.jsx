import React from 'react'
import './SearchResult.css'
import { Review } from '..'
import hotel from '../../assests/images/hotel.jpg';
import { useSelector } from 'react-redux';


function SearchResult() {     
     
   
const businesses =  useSelector( ({ state }) => state.businesses ); 
const reviews =  useSelector( ( { state } ) => state.reviews ); 

// console.log( reviews[0].text);
// reviews.map( review[0] => console.log( review.text));
//  return <div>Test</div>

 return   businesses.map( ( business, key ) =>    
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
                            <p>{ business.display_address } </p>
                            <p>{ business.display_phone }</p>
                        </div>
                    </div>
                     <p>{ `"${reviews[0].text}"` }<a><strong>more</strong></a></p>
                    {/* { reviews.map( review => <div>{review.text }</div>)}   */}
                  
                </div>
            </div>
            <div className="CTA-link"><a>Start Order</a></div> 
        </div>
    )
 }


export default SearchResult;
