import React from 'react'
import './Filters.css'

function Filters() {
     const numbers = [0,1,2,3];
     const suggestedItems = ["Open Now 11:32 AM","Yelp Delivery","Yelp Takeout"];
     const features = ["Offers Delivery","Offers Takeout","Good for Kids","Good for Groups"];
     const neighborhoods = 	["Chinatown","Atwater Village","Little Tokyo","Arts District"];
     const distance = [	"Bird's-eye View","Driving (5 mi.)","Biking (2 mi.)","Walking (1 mi.)","Within 4 blocks"];
     
     let dollarSign='';
     const listItems = numbers.map( (numbers ) => {
         dollarSign = dollarSign.concat('$');
            
          return <li className='filter-items' key={ numbers.toString() }>{   dollarSign    }</li>
     
     })   
      

     const suggestedItemsList = suggestedItems.map( (item ) =>  (       
       <label className='list-items' key={ suggestedItems.indexOf( item ) }><div className="input-overlap"><input type="checkbox"/></div><div className="list-item-name">{ item }</div></label>
     ));
     

    const featuresList = features.map( ( item )=><label className='list-items' key={ features.indexOf( item ) }>
        <div className="input-overlap"><input type="checkbox" /></div>
        <div className="list-item-name">{ item }</div></label>)

    const neighborhoodsList = neighborhoods.map( ( item )=><label className='list-items' key={ neighborhoods.indexOf( item )}>
        <div className="input-overlap"><input type="checkbox" /></div>
        <div className="list-item-name">{item }</div></label>)

    const distanceList = distance.map( ( item )=><label className='list-items' key={ distance.indexOf( item )}>
      <div className="input-overlap"><input type="radio" /></div> 
      <div className="list-item-name">{item }</div></label>)
    

    return (
        <div className="filter-section">
            <p className="filters-section-subheadings">Filters</p>
            <ul className='filter-items-container'>
               {listItems}
            </ul>
            <hr/>

            <p className="filters-section-subheadings">Suggested</p>
            <ul className='items-container'>
              { suggestedItemsList }              
            </ul>          
            
            <p className="filters-section-subheadings">Features</p>
            <ul className='items-container'>
              { featuresList }
            </ul>
            <p className="see-all">See all</p>

            <p className="filters-section-subheadings">Neighborhoods</p>
            <ul className='items-container'>
              { neighborhoodsList }
            </ul>
            <p className="see-all">See all</p>

            <p className="filters-section-subheadings">Distance</p>
            <ul className='items-container'>
              { distanceList }
            </ul>           
        </div>
    )
}

export default Filters
