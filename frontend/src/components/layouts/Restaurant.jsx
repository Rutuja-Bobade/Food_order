import React from 'react'

export default function Restaurant() {
  return (
    <div className='col-sm-12 col-md-6 col-lg my-3'>
      <div className="card p-3 rounded">
        <img 
          src={Restaurant.images[0].url} 
          alt={Restaurant.name}
          className='card-img-top mx-auto'
        />

        <div className="card-body d-flex flex-column">
            <h5 className='card-tittle'>{Restaurant.name}</h5>
            <p className='rest_address'>{Restaurant.address}</p>
            <div className='ratings mt-auto'> 
              <div className="rating-outer">
              <div className="rating-inner"></div>
            </div>
              <span id="no_of_reviews">(140 Reviews)</span>
            </div>
        </div>
      </div>
    </div>
  )
}
