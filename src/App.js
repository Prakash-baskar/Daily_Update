// import React from "react";
// import { Provider } from "react-redux";

import { Provider } from "react-redux";
import { store } from "./Counter/Reducer";
import Counter from "./Counter/Counter";

// import TaskInput from "./Component/TaskInput";
// import TaskList from "./Component/TaskList";
// import store from "./Component/Store";


function App  (){
  return (
    // <Provider store={store}>
    //   <div>
    //     <h1>Redux Task List</h1>
    //     <TaskInput/>
    //     <TaskList/>
    //   </div>
    // </Provider>
    <Provider store={store}>
      <Counter/>
    </Provider>
  );
};

export default App;
