import React from 'react'
import './SearchResult.css'
import { Review } from '..'
import hotel from '../../assests/images/hotel.jpg';


function SearchResult() {
    return (
        <div className="search-result-container">
            <p className="search-result-heading">The 10 Best Places near 7557 S Sepulveda Blvd, Los Angeles, CA 90045</p>
            <div className="single-search-result-container">
                <div>
                    <img className="search-result-image" src={ hotel }/>  
                </div>   

                <div className="search-result-info">           
                     <div className="search-result-top">            
                        <div className="name-and-reviews">
                            <p>Local sandwich shop</p>
                            <div className="reviews-container">
                                <span><Review /></span><span>1114 reviews</span>
                            </div>       
                            <ul className="applied-filters">
                                <li>$$$</li>
                                <li>Sri Lankan dish</li>
                                <li>Rice and curry</li>                      
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
