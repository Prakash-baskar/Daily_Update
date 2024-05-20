import React, { useEffect, useState } from 'react';
import { getbuyItem, updateItem } from './FormAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

export default function FormEdit() {
    const [name, setName] = useState('');
    const [lname, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [gender,setGender] = useState('')
    const [date,setDate] = useState('');
    const [weight, setWeight] = useState('');
    const [blood, setBlood] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const userUpdate = useSelector((state) => state.users.find(user => user.id === id));

    useEffect(() => {
        dispatch(getbuyItem(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (userUpdate) {
            setName(userUpdate.name || '');
            setLastName(userUpdate.lname || '');
            setAge(userUpdate.age || '');
            setDate(userUpdate.date || '');
            setGender(userUpdate.gender || '');
            setWeight(userUpdate.weight || '');
            setBlood(userUpdate.blood || '');
            setEmail(userUpdate.email || '');
            setNumber(userUpdate.number || '');
        }
    }, [userUpdate]);

    const handleSubmit = (e) => {
        e.preventDefault();


        const validationErrors = validateForm();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {

        if (userUpdate) {
            try {
                dispatch(updateItem(userUpdate.id, { id, name, age, gender, blood, email, number, lname, weight, date}));

            } catch {
                setName("")
                setLastName("")
                setAge("")
                setGender("")
                setDate("")
                setBlood("")
                setEmail("")
                setNumber("")
                setLastName("")
                setWeight("")
                
            }
        }
        navigate('/FormTable');}
    };
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
                 <div className='edithead'><span>Patient Edit</span></div>
                <div className='labelbot'>
                  <label>FirstName</label>
                  <input
                      type='text'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className='labelbot'>
                  <label>LastName</label>
                  <input type='text' value={lname} onChange={(e) => setLastName(e.target.value)} />
                  {errors.lname && <span className="error">{errors.lname}</span>}
                </div>
                <div className='labelbot'>
                  <label>Age</label>
                  <input type='number' value={age} onChange={(e) => setAge(e.target.value)} />
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

                <div className='labelbot'>
                       <label>Date</label>
                       <input
                           type="date"
                           value={date}
                           onChange={(e) => setDate(e.target.value)}
                          
                       />
                       {errors.date && <span className="error">{errors.date}</span>}
                </div>
                <div className='labelbot'>
                  <label>weight</label>
                  <input type='text' value={weight} onChange={(e) => setWeight(e.target.value)} />
                  {errors.weight && <span className="error">{errors.weight}</span>}
                </div>

                
                <div className='labelbot'>
                  <label>Blood Group</label>
                  <input type='text' value={blood} onChange={(e) => setBlood(e.target.value)} />
                  {errors.blood && <span className="error">{errors.blood}</span>}
                </div>
                <div className='labelbot'>
                  <label>Email</label>
                  <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                  {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className='labelbot'>
                  <label>Phone Number</label>
                  <input type='tel' value={number} onChange={(e) => setNumber(e.target.value)} />
                  {errors.number && <span className="error">{errors.number}</span>}
                </div>
                <div className='botmbtn'>
                 <button className='sub' type='submit'>Submit</button>
                </div>
            </div>
        </form>
    </div>


    );
}
