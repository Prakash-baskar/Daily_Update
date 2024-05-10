import { legacy_createStore as creatStore } from "redux";

const initialValue = {
    userName:"",
    userPassword:""
}

function crudReducer(state =initialValue,action){
    switch (action.type) {
        case 'USER_NAME':
            return{
                ...state,
                userName:action.payLoad,
                userPaasword:action.payLoad
            }    
        default:
           return state;
    }
}

export const store = creatStore(crudReducer);