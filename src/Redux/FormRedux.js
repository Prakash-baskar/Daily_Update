// import React from 'react'
// import { useState } from 'react'
// import { addItem } from './FormAction'
// import { useDispatch } from 'react-redux'

// const FormRedux = () => {
//     // const [formData,setFormData] = useState('')
//     const [name,setName] = useState('') 
//     const dispatch = useDispatch()
//     const handleSubmit =(e) =>{
//         e.preventdefault()
//       dispatch(addItem({name}))
      
//     }
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>FirstName</label>
//         <input type='text' value={name} 
//         onChange={(e) => setName(e.target.value)}></input>
//         <button type='submit'>Register</button>
//       </div>
//     </form>
//   )
// }

// export default FormRedux;


import React from 'react';
import { useState } from 'react';
import { addItem } from './FormAction';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import image from '../Images/5c0c7f3a062c21ee9bf14f4ecc80a8f8.png';

const FormRedux = () => {
    const [name, setName] = useState('');
    const [lname,setLastName] = useState('');
    const [age, setAge] = useState('');
    const [gender,setGender] = useState('');
    const [blood,setBlood] = useState('');
    const [email,setEmail] = useState('');
    const [number,setNumber] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addItem({ name, age , blood, email, lname, gender, number}));
        navigate('/FormTable')
    };

    useDispatch(() => {
        return (state) => {
            console.log('Redux state:', state);
        };
    });

    

    return (
        
       <div>
           <div className='heding'>
             {/* <img className='logo' src={image}/> */}
             <h2 className='title'>New Patient Registration</h2>
            </div>
           <form onSubmit={handleSubmit}>
            <div className='main'>
                <label>FirstName</label>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                ></input>
                <label>LastName</label>
                <input type='text' value={lname} onChange={(e) =>setLastName(e.target.value)}></input>
                <label>Age</label>
                <input type='text' value={age} onChange={(e) =>setAge(e.target.value)}></input>
                <label>Gender</label>
                <input type='text' value={gender} onChange={(e) =>setGender(e.target.value)}></input>
                <label>Blood Group</label>
                <input type='text' value={blood} onChange={(e) =>setBlood(e.target.value)}></input>
                <label>Email</label>
                <input type='text' value={email} onChange={(e) =>setEmail(e.target.value)}></input>
                <label>Phone Number</label>
                <input type='text' value={number} onChange={(e) =>setNumber(e.target.value)}></input>
                <button className='register' type='submit'>Register</button>
            </div>
        </form>
       </div>
    );
};

export default FormRedux;
