import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem, getItem } from './FormAction';
import { Link } from 'react-router-dom';

const FormTable = () => {

    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect (() =>{
        dispatch(getItem());
    },[dispatch]);

    const handleDelete = (id) =>{
        dispatch(deleteItem(id));
    };
  return (
    <div className='table'>
      <h2>Patient Details</h2>
      <table className='th'>
        <thead>
            <tr>
                <th>FName</th>
                <th>LName</th>
                <th>Age</th>
                <th>Weight</th>
                <th>BGroup</th>
                <th>Email</th>
                <th>PHNumber</th>
                <th>Action</th>
            </tr>
        </thead>
       <tbody>
       {users.map((user)=>(
        <tr key={user.id}>
          <td>{user.name}</td>
          <td> {user.lname}</td>
          <td>{user.age}</td>
          <td>{user.gender}</td>
          <td>{user.blood}</td>
          <td>{user.email}</td>
          <td>{user.number}</td>
          <td><button className='delete' onClick={() => handleDelete(user.id)}>Delete</button>
          <button className='edit'><Link  to={`/FormTable/${user.id}/edit`}>Edit</Link> </button> </td>
          <td ></td>
        </tr>
       ))}
       </tbody>
      </table>
    </div>
  )
}

export default FormTable
