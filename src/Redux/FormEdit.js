import React, { useEffect, useState } from 'react'
import { getbuyItem, updateItem } from './FormAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

export default function FormEdit() {
    const [name, setName] = useState('');
    const [lname,setLastName] = useState('');
    const [age, setAge] = useState('')
    const [gender,setGender] = useState('');
    const [blood,setBlood] = useState('')
    const [email,setEmail] = useState('')
    const [number,setNumber] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {id} = useParams()
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateItem({ name, age , blood, email, number, lname, gender}));
        navigate('/FormTable')
    };
    const userUpdate = useSelector((state) => state.user);
    // useDispatch(() => {
    //     return (state) => {
    //         console.log('Redux state:', state);
    //     };
    // });
useEffect((userUpdate)=>{
if(userUpdate){
    setName(userUpdate.name)
}

},[userUpdate])



    useEffect(()=>{
        dispatch(getbuyItem(id))
    },[dispatch, id])
    
    return (
        <form onSubmit={handleSubmit}>
            <div className='main'>
                <label>FirstName</label>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                ></input>
                <label>LastName</label>
                <input type='' value={lname} onChange={(e) =>setLastName(e.target.value)}></input>
                <label>Age</label>
                <input type='' value={age} onChange={(e) =>setAge(e.target.value)}></input>
                <label>Gender</label>
                <input type='' value={gender} onChange={(e) =>setGender(e.target.value)}></input>
                <label>Blood Group</label>
                <input type='' value={blood} onChange={(e) =>setBlood(e.target.value)}></input>
                <label>Email</label>
                <input type='' value={email} onChange={(e) =>setEmail(e.target.value)}></input>
                <label>Phone Number</label>
                <input type='' value={number} onChange={(e) =>setNumber(e.target.value)}></input>
                <button type='submit'>Register</button>
            </div>
        </form>
    );
}
