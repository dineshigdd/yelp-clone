import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import './Review.css';

function Review() {
    const list = [ 0,1,2,3,4];
    return (
        <>
            { list.map( (element,index) =><span className="review-stars" key={ index }>
                { 
                 <StarIcon style={ {fill:"white"}} />
                }</span>)}
        </>
    )
}

export default Review
