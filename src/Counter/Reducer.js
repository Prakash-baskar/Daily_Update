import { legacy_createStore as creatStore } from "redux";

const  initialValue = {
    count:0
};

function ReducerRedux( state = initialValue,action ){

    switch(action.type){

        case 'INCEREMENT':
            return {
                count: state.count+1
            };
        case 'DECEREMENT':
            return {
                count:state.count-1
            };
       
        default:
            return state;

    };

};


export  const store = creatStore(ReducerRedux);