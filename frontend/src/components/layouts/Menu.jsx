import React, { useEffect } from 'react';
import FoodItem from './FoodItem';
import { useDispatch, useSelector } from 'react-redux';
import { getMenus } from '../../actions/menuAction';
import { useParams } from 'react-router-dom';
import Loader from "./Loader";
import Message from "./Message";
// import { LOGOUT_FAIL, LOGOUT_SUCCESS } from '../../constants/userConstant';
// import axios from 'axios';

export default function Menu() {
    const dispatch = useDispatch();
    const { id } = useParams();

    const { menus, loading, error } = useSelector((state) => state.menus);
    // console.log(menus);

    useEffect(() => {
        dispatch(getMenus(id));
    }, [dispatch, id]);

    return (
        <div>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : menus && menus.length > 0 ? (
                menus.map((menu) => (
                    <div key={menu._id}>
                        <h2>{menu.category}</h2>
                        <hr />
                        {menu.items && menu.items.length > 0 ? (
                            <div className="row">
                                {menu.items.map((fooditem) => (
                                    <FoodItem key={fooditem._id} fooditem={fooditem} restaurant={id} />
                                ))}
                            </div>
                        ) : (
                            <Message variant="info">No Food Item Found</Message>
                        )}
                    </div>
                ))
            ) : (
                <Message variant="info">No Menus Found</Message>
            )};
        </div>
    )
}

//Logout Action
// export const logout = async (dispatch) => {
//     try {
//         await axios.get('/api/v1/users/logout');
//         dispatch({
//             type: LOGOUT_SUCCESS,
//         });
//     } catch (error) {
//         dispatch({
//             type: LOGOUT_FAIL,
//             payload: error.response.data.message,
//         });
//     }
// }

//Clear Errors