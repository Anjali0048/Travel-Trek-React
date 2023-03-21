import React, { useState } from 'react'

export default function Card({id, image, info, price, name, removeTour}) {

  const [readmore, setReadmore] = useState(false);  
  const desc = readmore ? info : `${info.substring(0,200)}...`; 

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <>
    <div className='card'>
        <img src={image} className="image" alt=''/>
        <div className="tour-info">
            <div className="tour-details">
                <h4 className='tour-price'>{price}</h4>
                <h4 className='tour-name'>{name}</h4>
            </div>
            <div className="desc">
                {desc}
                <span className='read-more' onClick={readmoreHandler}>
                    {readmore ? `show less` : `read more`}
                </span>
            </div>
        </div>

        <button className='btn-red' onClick={() => removeTour(id)}>
            Not Interested
        </button>

    </div>

    </>
  )
}
