import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem, getItem } from './FormAction';
import { Link } from 'react-router-dom';

const FormTable = () => {

    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect (() =>{
        dispatch(getItem());
    },[dispatch])

    const handleDelete = (id) =>{
        dispatch(deleteItem(id));
    };
  return (
    <div className='table'>
      <h2>Patient Details</h2>
      <table className='th'>
        <thead>
            <tr>
                <th>Nmae</th>
            </tr>
        </thead>
       <tbody>
       {users.map((user)=>(
        <tr key={user.id}>
          <td>{user.name}</td>
         <td> {user.lname}</td>
          <td>{user.age}</td>
          <td>{user.gender}</td>
          <td>          {user.blood}
</td>
          <td>
          {user.email}

          </td>
          <td>          {user.number}
</td>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
          <Link to={`/FormTable/${user.id}/edit`}>Edit</Link>
        </tr>
       ))}
       </tbody>
      </table>
    </div>
  )
}

export default FormTable
