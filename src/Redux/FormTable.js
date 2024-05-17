import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem, getItem } from './FormAction';
import { Link } from 'react-router-dom';
import Loader from './Loader';


const FormTable = () => {

    const users = useSelector((state) => state.users);
    const [ loading,setLoading] = useState(false);

    const [delVisible,setDelVisible] = useState(false)

    const [selectDelId,setSelectDelId] = useState(null)
    const dispatch = useDispatch();

    useEffect (() =>{
        setLoading(true)
        
        setTimeout( () => {
          dispatch(getItem());
          setLoading(false)
        },1000)

    },[dispatch]);

    const showDialog = (id)=>{
      setSelectDelId(id)
      setDelVisible(true)
    }
    const close = () =>{
      setSelectDelId(null)
      setDelVisible(false)
    }

    const handleDelete = (id) =>{
        
        dispatch(deleteItem(id));
        setDelVisible(false)
    };
  return (
    <>
    { loading && <Loader/>}
    <div className='table'>
      <h2>Patient Details</h2>
      <table className='th'>
        <thead>
            <tr>
                <th>FNAME</th>
                <th>LNAME</th>
                <th>AGE</th>
                <th>GENDER</th>
                <th>WEIGHT</th>
                <th>BGROUP</th>
                <th>EMAIL</th>
                <th>PHNUMBER</th>
                <th>ACTION</th>
            </tr>
        </thead>
       <tbody>
       {users.map((user)=>(
        <tr key={user.id}>
          <td>{user.name}</td>
          <td> {user.lname}</td>
          <td>{user.age}</td>
          <td>{user.gender}</td>
          <td>{user.weight}</td>
          <td>{user.blood}</td>
          <td>{user.email}</td>
          <td>{user.number}</td>
          <td>
          <button className='delete' onClick={() => showDialog(user.id)}>Delete</button>
          <button  className='nonebtn'><Link className='edit' to={`/FormTable/${user.id}/edit`}>Edit</Link> </button> </td>
        </tr>
       ))}
       </tbody>
      </table>
      {delVisible && (

        <dialog open>
          Are you Confirm Delete
          <button className='delete' onClick={() => handleDelete(selectDelId)}>Yes</button>
          <button className='close' onClick={close}>No</button>
        </dialog>
      ) }
    </div>
    </>
  )
}

export default FormTable
