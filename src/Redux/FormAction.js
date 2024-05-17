

import axios from "axios";
import { ADD_ITEM, DELETE_ITEM, GET_BUY_ITEM, GET_ITEM, UPDATE_ITEM } from "./FormTypes"; // Corrected import for action type

export const addItem = (user) => {
    console.log(user);
    return async (dispatch) => {
        try {
            const response = await axios.post('https://65adedce1dfbae409a739505.mockapi.io/patient/patients', user);
            console.log(response);
            dispatch({ type: ADD_ITEM, payload: response.data });
        } catch (error) {

            console.error("Error adding item:", error);
        }
    };
};

export const getItem = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://65adedce1dfbae409a739505.mockapi.io/patient/patients',);
            dispatch({ type: GET_ITEM, payload: response.data });
        } catch (error) {

            console.error("Error adding item:", error);
        }
    };
};

export const deleteItem = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`https://65adedce1dfbae409a739505.mockapi.io/patient/patients/${id}`,);
            dispatch({ type: DELETE_ITEM, payload: id });
        } catch (error) {

            console.error("Error adding item:", error);
        }
    };
};

// export const getbuyItem = (id) => {
//     return async (dispatch) => {
//         try {
//             const response = await axios.get(`https://65adedce1dfbae409a739505.mockapi.io/patient/patients/${id}`);
//             dispatch({ type: GET_BUY_ITEM, payload: response.data});
//         } catch (error) {

//             console.error("Error adding item:", error);
//         }
//     };
// };

export const getbuyItem = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://65adedce1dfbae409a739505.mockapi.io/patient/patients/${id}`);
            dispatch({ type: GET_BUY_ITEM, payload: response.data }); // Dispatch action type along with data
        } catch (error) {
            console.error("Error fetching item:", error);
        }
    };
};
export const updateItem = (id, user) => {
    return async (dispatch) => {
        try {
            const response = await axios.put(`https://65adedce1dfbae409a739505.mockapi.io/patient/patients/${id}`, user);
            dispatch({ type: UPDATE_ITEM, payload: response.data });
        } catch (error) {

            console.error("Error adding item:", error);
        }
    };
};

// export const updateItem = (id, user) => {
//     return async (dispatch) => {
//         try {
//             const response = await axios.put(`https://65adedce1dfbae409a739505.mockapi.io/patient/patients/${id}`, user); // Changed axios.post to axios.put
//             dispatch({ type: UPDATE_ITEM, payload: response.data });
//         } catch (error) {
//
//             console.error("Error updating item:", error); // Updated console message to indicate updating error
//         }
//     };
// };
