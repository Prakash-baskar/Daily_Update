

// import axios from "axios";
// import { ADD_ITEM } from "./FormTypes"

// export const addItem = (user) =>{
//     return async(dispatch) =>{
//         const response = await axios.post('https://65adedce1dfbae409a739505.mockapi.io/patient/student',user)
//         dispatch({type:ADD_ITEM,payload:response.data});

//     }
// }

import axios from "axios";
import { ADD_ITEM, DELETE_ITEM, GET_BUY_ITEM, GET_ITEM, UPDATE_ITEM } from "./FormTypes"; // Corrected import for action type

export const addItem = (user) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('https://65adedce1dfbae409a739505.mockapi.io/patient/student', user);
            dispatch({ type: ADD_ITEM, payload: response.data });
        } catch (error) {
            // Handle errors if any
            console.error("Error adding item:", error);
        }
    };
};

export const getItem = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://65adedce1dfbae409a739505.mockapi.io/patient/student',);
            dispatch({ type: GET_ITEM, payload: response.data });
        } catch (error) {
            // Handle errors if any
            console.error("Error adding item:", error);
        }
    };
};

export const deleteItem = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`https://65adedce1dfbae409a739505.mockapi.io/patient/student/${id}`,);
            dispatch({ type: DELETE_ITEM, payload: id });
        } catch (error) {
            // Handle errors if any
            console.error("Error adding item:", error);
        }
    };
};

export const getbuyItem = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`https://65adedce1dfbae409a739505.mockapi.io/patient/student/${id}`);
            dispatch({ type: GET_BUY_ITEM, payload: response.data});
        } catch (error) {
            // Handle errors if any
            console.error("Error adding item:", error);
        }
    };
};

// export const updateItem = (id,user) => {
//     return async (dispatch) => {
//         try {
//             const response = await axios.post(`https://65adedce1dfbae409a739505.mockapi.io/patient/student/${id}`, user);
//             dispatch({ type: UPDATE_ITEM, payload: response.data });
//         } catch (error) {
//             // Handle errors if any
//             console.error("Error adding item:", error);
//         }
//     };
// };

export const updateItem = (id, user) => {
    return async (dispatch) => {
        try {
            const response = await axios.put(`https://65adedce1dfbae409a739505.mockapi.io/patient/student/${id}`, user); // Changed axios.post to axios.put
            dispatch({ type: UPDATE_ITEM, payload: response.data });
        } catch (error) {
            // Handle errors if any
            console.error("Error updating item:", error); // Updated console message to indicate updating error
        }
    };
};
