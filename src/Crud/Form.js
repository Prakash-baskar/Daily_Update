import React from 'react'
import { connect } from 'react-redux'

const data = (state) =>{
    console.log(state);
    return {state}};

const Form = () => {
   

  return (
    <form>
      <div className='main'>  
       <label>Name:</label>
       <input />
       <label>Password:</label>
       <input />
       <button >Submit</button>
     </div> 
    </form>
  )
}
const connectForm = connect(data);
const fomCha = connectForm(Form)
export default fomCha
