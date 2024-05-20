


// import React from 'react';
// import { useState } from 'react';
// import { addItem } from './FormAction';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// // import image from '../Images/5c0c7f3a062c21ee9bf14f4ecc80a8f8.png';

// const FormRedux = () => {
//     const [name, setName] = useState('');
//     const [lname,setLastName] = useState('');
//     const [age, setAge] = useState('');
//     const [weight,setWeight] = useState('');
//     const [blood,setBlood] = useState('');
//     const [email,setEmail] = useState('');
//     const [number,setNumber] = useState('');
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(addItem({ name, age , blood, email, lname, weight, number}));
//         navigate('/FormTable')
//     };

//     useDispatch(() => {
//         return (state) => {
//             console.log('Redux state:', state);
//         };
//     });

    

//     return (
        
//        <div>
//            <div className='heding'>
//              <h2 className='title'>New Patient Registration</h2>
//             </div>
//            <form onSubmit={handleSubmit}>
//             <div className='main'>
//                 <label>FirstName</label>
//                 <input
//                     type='text'
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 ></input>
//                 <label>LastName</label>
//                 <input type='text' value={lname} onChange={(e) =>setLastName(e.target.value)}></input>
//                 <label>Age</label>
//                 <input type='text' value={age} onChange={(e) =>setAge(e.target.value)}></input>
//                 <label>weight</label>
//                 <input type='text' value={weight} onChange={(e) =>setWeight(e.target.value)}></input>
//                 <label>Blood Group</label>
//                 <input type='text' value={blood} onChange={(e) =>setBlood(e.target.value)}></input>
//                 <label>Email</label>
//                 <input type='text' value={email} onChange={(e) =>setEmail(e.target.value)}></input>
//                 <label>Phone Number</label>
//                 <input type='text' value={number} onChange={(e) =>setNumber(e.target.value)}></input>
//                 <button className='register' type='submit'>Register</button>
//             </div>
//         </form>
//        </div>
//     );
// };

// export default FormRedux;






import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './FormAction';
import { useNavigate } from 'react-router-dom';


const FormRedux = () => {
    const [name, setName] = useState('');
    const [lname, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [blood, setBlood] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [gender, setGender] = useState('');
    const [date, setDate] = useState('');
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            dispatch(addItem({ name, age, blood, email, lname, weight, number, gender, date }));
            navigate('/FormTable');
        } else {
            setErrors(validationErrors);
        }
    };

    // const handleDateChange = (e) => {
    //     setDate(e.target.value);
    // };

    const handleReset = () =>{
        setName("");
        setLastName("");
        setAge("");
        setBlood("");
        setEmail("");
        setGender("");
        setWeight("");
        setNumber("");
        setErrors("");
    }

    const validateForm = () => {
        const errors = {};
        const datePattern = /^\d{4}-\d{2}-\d{2}$/;
        const namePattern = /^[A-Za-z\s]+$/;
        if (!name.trim()) {
            errors.name = 'First name is required';
        }else if (!namePattern.test(name)) {
            errors.name = 'First name cannot contain numbers';
        }
        if (!lname.trim()) {
            errors.lname = 'Last name is required';
        }
        if (!age.trim()) {
            errors.age = 'Age is required';
        } else if (isNaN(age)) {
            errors.age = 'Age must be a number';
        }
        if (!weight.trim()) {
            errors.weight = 'Weight is required';
        } else if (isNaN(weight)) {
            errors.weight = 'Weight must be a number';
        }
        if (!blood.trim()) {
            errors.blood = 'Blood group is required';
        }
        if (!email.trim()) {
            errors.email = 'Email is required';
        } else if (!isValidEmail(email)) {
            errors.email = 'Invalid email format';
        }
        if (!number.trim()) {
            errors.number = 'Phone number is required';
        } else if (!isValidPhoneNumber(number)) {
            errors.number = 'Invalid phone number format';
        }
        if (!gender.trim()) {
            errors.gender = 'Gender is required';
        }
       

        if (!date.match(datePattern)) {
            errors.date = 'Please enter a valid date in YYYY-MM-DD format';
        }
        return errors;
    };

    // const validateDate = () => {
    //     let errors = {};
       

    //     setErrors(errors);
    // };

    const isValidEmail = (email) => {
        const regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    };

    const isValidPhoneNumber = (number) => {
        const regex = /^\d{10}$/;
        return regex.test(number);
    };

    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <div className='main'>
                    <div className='formHead'><span>Registration Form</span></div>
                    <div className='labelbot'>
                    <label>First Name</label>
                    <input
                        type='text'
                        placeholder='Enter Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                    </div>

                    <div className='labelbot'>
                    <label>Last Name</label>
                    <input 
                        type='text' 
                        placeholder='Enter Last Name'
                        value={lname} 
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    {errors.lname && <span className="error">{errors.lname}</span>}
                    </div>

                    <div className='labelbot'>
                    <label>Age</label>
                    <input 
                        type='number' 
                        placeholder='Enter Age'
                        value={age} 
                        onChange={(e) => setAge(e.target.value)}
                    />
                    {errors.age && <span className="error">{errors.age}</span>}
                    </div>

                    <div className='labelbot'>
                    <label>Gender</label>
                    <div className='gender'>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="male"
                                checked={gender === "male"}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            Male
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="female"
                                checked={gender === "female"}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            Female
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="other"
                                checked={gender === "other"}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            Other
                        </label>
                    </div>
                    {errors.gender && <span className="error">{errors.gender}</span>}
                    </div>
                    </div>

                    <div>
                       <div className='labelbot'>
                          <label>Date</label>
                          <input
                              type="date"
                              value={date}
                              onChange={(e) => setDate(e.target.value)}
                             
                          />
                          {errors.date && <span className="error">{errors.date}</span>}
                       </div>
                    </div>
                    


                    <div className='labelbot'>
                    <label>Weight</label>
                    <input 
                        type='number'
                        placeholder='Enter Weight' 
                        value={weight} 
                        onChange={(e) => setWeight(e.target.value)}
                    />
                    {errors.weight && <span className="error">{errors.weight}</span>}
                    </div>

                    <div className='labelbot'>
                    <label>Blood Group</label>
                    <input 
                        type='text' 
                        placeholder='Enter Blood Group'
                        value={blood} 
                        onChange={(e) => setBlood(e.target.value)}
                    />
                    {errors.blood && <span className="error">{errors.blood}</span>}
                    </div>

                    <div className='labelbot'>
                    <label>Email</label>
                    <input 
                        type='email' 
                        placeholder='Enter Email'
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                    </div>

                   <div className='labelbot'>
                   <label>Phone Number</label>
                    <input 
                        type='number' 
                        placeholder='Enter Number'
                        value={number} 
                        onChange={(e) => setNumber(e.target.value)}
                    />
                    {errors.number && <span className="error">{errors.number}</span>}
                   </div>
                   <div className='botmbtn'>
                     <button onClick={handleReset} className='reset' type='button'>Reset</button>
                     <button className='register' type='submit'>Register</button>
                   </div>
                </div>
            </form>
        </div>
    );
};

export default FormRedux;
