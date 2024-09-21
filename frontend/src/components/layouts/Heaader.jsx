import React from 'react'
import Search from './Search'

export default function Heaader() {
  return (
    <nav className="navabr row sticky-top">
        {/* logo */}
        <div className='col-12 col-md-3'>
            <img src="./images/logo.webp" alt="logo" className="logo" />
        </div>

        {/* Search bar , Icon */}
        <div className='col-12 col-md-6 mt-2 mt-md-6'>
            <Search />
        </div>
        <div className='col-12 col-md-3 mt-4 mt-md-0'>
            <span className='ml-3' id='cart'>
                Cart
            </span>
            <span className='ml-1' id="cart_count">
                0
            </span>

             {
                10>5 ? (
                    <>
                        <div className="ml-4 dropdown d-inline">
                            <figure className='avatar avatar-nav'>
                                <img 
                                    src="/images/images.png" 
                                    alt="avatar" 
                                    className='rounded-circle'/>
                            </figure>
                            <span style={{color :'white' , fontWeight : "bolder"}}>Customer</span>
                        </div>
                    </>
                ) : (
                    <div className="btn ml-4" id="login_btn">
                        Login
                    </div>
                )
             }
        </div>
    </nav>
  )
}
