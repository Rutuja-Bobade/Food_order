import React, { useEffect } from 'react';
import CountRestro from './CountRestro';
import Restaurant from './Restaurant';
import { useDispatch, useSelector } from 'react-redux';
import { getrestaurant} from "../../actions/restaurantAction";
import Loader from './Loader';
import Message from './Message';

export default function Home() {
  const dispatch = useDispatch();

  const {
    loading: restaurantsLoading ,
    error: restaurantsError,
    restaurants,
  } = useSelector((state) => state.restaurants);

  useEffect(() => {
    dispatch(getrestaurant());
  },[dispatch]);

  return ( 
    <>
      <CountRestro />
      {restaurantsLoading ? (
        <Loader/>
      ) : restaurantsError ? (
        <Message variant="danger">{restaurantsError}</Message>
      ) :(
        <>
          <section >
            <div className="sort">
              <button className="sort_veg p-3">Pure veg</button>
              <button className="sort_rev p-3">Sort By Review</button>
              <button className="sort_rate p-3">Sort By Rating</button>
            </div>
            <div className="row mt-4">
              {restaurants 
                ? restaurants.map((restaurant) => (
                    <Restaurant key={restaurant._id} restaurant={restaurant} />
                  ))
                : null }
              </div>
            </section> 
        </>
      )}  
    </>
  );
}
