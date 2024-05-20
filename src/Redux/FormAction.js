


import axios from "axios";
import { ADD_ITEM, DELETE_ITEM, GET_BUY_ITEM, GET_ITEM, UPDATE_ITEM } from "./FormTypes"; // Corrected import for action type
import { API_BASE_URL } from "./Service/Api";

export const addItem = (user) => {
    console.log(user);
    return async (dispatch) => {
        try {
            const response = await axios.post(`${API_BASE_URL}`, user);
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
            const response = await axios.get(API_BASE_URL);
            dispatch({ type: GET_ITEM, payload: response.data });
        } catch (error) {

            console.error("Error adding item:", error);
        }
    };
};

export const deleteItem = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`${API_BASE_URL}/${id}`);
            dispatch({ type: DELETE_ITEM, payload: id });
        } catch (error) {

            console.error("Error adding item:", error);
        }
    };
};

// export const getbuyItem = (id) => {
//     return async (dispatch) => {
//         try {
//             const response = await axios.get(`API_BASE_URL/${id}`);
//             dispatch({ type: GET_BUY_ITEM, payload: response.data});
//         } catch (error) {

//             console.error("Error adding item:", error);
//         }
//     };
// };

export const getbuyItem = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/${id}`);
            dispatch({ type: GET_BUY_ITEM, payload: response.data }); // Dispatch action type along with data
        } catch (error) {
            console.error("Error fetching item:", error);
        }
    };
};
export const updateItem = (id, user) => {
    return async (dispatch) => {
        try {
            const response = await axios.put(`${API_BASE_URL}/${id}`, user);
            dispatch({ type: UPDATE_ITEM, payload: response.data });
        } catch (error) {

            console.error("Error adding item:", error);
        }
    };
};

// export const updateItem = (id, user) => {
//     return async (dispatch) => {
//         try {
//             const response = await axios.put(`API_BASE_URL/${id}`, user); // Changed axios.post to axios.put
//             dispatch({ type: UPDATE_ITEM, payload: response.data });
//         } catch (error) {
//
//             console.error("Error updating item:", error); // Updated console message to indicate updating error
//         }
//     };
// };
