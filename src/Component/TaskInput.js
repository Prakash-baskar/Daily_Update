
import React, { useState } from 'react'
import { addTask } from './Action';
import { connect } from 'react-redux';



const TaskInput = ({addTask}) => {
  const [taskName, setTaskName] = useState('');

  const handleChange = (e) => {
    setTaskName(e.target.value)
    addTask({id:Date.now(), name:taskName});
  };

  const handleSubmit = e =>{
    e.preventDefault();
    if(!taskName.trim()) return;
    setTaskName('');
  };

  return (
    <form onChange={handleSubmit}>
      <input type='text' value={taskName} onChange={ (e) => handleChange(e)}></input>
      <button type='submit'>Add Task</button>
    </form>
  );
};

const mapDispatchToProps ={
    addTask
};

export default connect(null,mapDispatchToProps)(TaskInput);
