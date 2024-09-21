import React from 'react'
import { LiaRupeeSignSolid } from "react-icons/lia";


export default function FoodItem() {
  return (
    <div>
      <div className="col-sm-12 col-md-6 col-lg-3 my-3">
        <div className="card p-3 rounded">
            <img src='https://b.zmtcdn.com/data/pictures/chains/6/10506/2781ab2c532b711ecd401571cdd87eb9.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A' alt='Pizza' className='card-img-top mx-auto'/> 
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Veg Loaded Pizza</h5>
              <p className="fooditem_des">
                Crunchy nad Cheesy veg Pizza served with happiness
              </p>
              <p className="card-text">
                <LiaRupeeSignSolid /> 
                180
                <br />
              </p>
              <button type="button" id="cart_btn" className='btn btn-primary d-inline ml-4'>
                Add to Cart
              </button>
              <br/>
              <p>
                Status : {""} 
                <span id="stock_status" 
              className={10>5 ? "greenColor": "redColor"}>
              {10> 5 ? "In Stock" : "OUT of Stock" }</span>
              </p>
            </div>   
        </div> 
      </div>
    </div>
  )
}
