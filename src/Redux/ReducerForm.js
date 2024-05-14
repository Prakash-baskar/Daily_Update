import { ADD_ITEM, DELETE_ITEM, GET_BUY_ITEM, GET_ITEM, UPDATE_ITEM} from "./FormTypes";

const initialValue ={
    users:[],
    user:null
};



const ReducerForm = (state = initialValue,action) => {
   switch (action.type) {
    case ADD_ITEM:
        return{
          ...state,
          users:[...state.users,action.payload]
        };
        
    case GET_ITEM:
        return{
            ...state,
           users:action.payload,
        };

    case DELETE_ITEM:
        return{
            ...state,
            users:state.users.filter((user) => user.id!==action.payload)
        };    
    
    case GET_BUY_ITEM:
        return{
            ...state,
            users:action.payload
        }

    case UPDATE_ITEM:
        return{
            ...state,
            users:action.payload
        }   
        

    default:
    return state;
   }
}

export default ReducerForm;
