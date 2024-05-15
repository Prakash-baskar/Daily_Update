import React, { useEffect, useState } from 'react';
import { getbuyItem, updateItem } from './FormAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

export default function FormEdit() {
    const [name, setName] = useState('');
    const [lname, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [blood, setBlood] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
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
            setGender(userUpdate.gender || '');
            setBlood(userUpdate.blood || '');
            setEmail(userUpdate.email || '');
            setNumber(userUpdate.number || '');
        }
    }, [userUpdate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userUpdate) {
            try {
                dispatch(updateItem(userUpdate.id, { id, name, age, blood, email, number, lname, gender }));

            } catch {
                setName("")
                setAge("")
                setBlood("")
                setEmail("")
                setNumber("")
                setLastName("")
                setGender("")
                
            }
        }
        navigate('/FormTable');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='main'>
                <label>FirstName</label>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>LastName</label>
                <input type='text' value={lname} onChange={(e) => setLastName(e.target.value)} />
                <label>Age</label>
                <input type='number' value={age} onChange={(e) => setAge(e.target.value)} />
                <label>Gender</label>
                <input type='text' value={gender} onChange={(e) => setGender(e.target.value)} />
                <label>Blood Group</label>
                <input type='text' value={blood} onChange={(e) => setBlood(e.target.value)} />
                <label>Email</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Phone Number</label>
                <input type='tel' value={number} onChange={(e) => setNumber(e.target.value)} />
                <button className='sub' type='submit'>Submit</button>
            </div>
        </form>
    );
}
