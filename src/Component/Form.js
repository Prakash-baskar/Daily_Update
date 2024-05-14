// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { ADD_ITEM } from "./FormType";




// const Form = ({formUpdate}) => {

//   const [formData, setFormData] = useState({
//     firstName: formUpdate ? formUpdate.firstName : '',
//     lastName: formUpdate ? formUpdate.lastName : '',
//     age: formUpdate ? formUpdate.age : '',
//     gender: formUpdate ? formUpdate.gender : '',
//     bloodGroup: formUpdate ? formUpdate.bloodGroup : '',
//     email: formUpdate ? formUpdate.email : '',
//     phoneNumber: formUpdate ? formUpdate.phoneNumber : ''
//   });
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formUpdate) {
//       dispatch(ADD_ITEM(formUpdate.id, formData));
//     }
//     // Clear form fields after submission
//     setFormData({
//       firstName: '',
//       lastName: '',
//       age: '',
//       gender: '',
//       bloodGroup: '',
//       email: '',
//       phoneNumber: ''
//     });
//   };
    
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
   
//   return (
//     <form onSubmit={handleSubmit}>
//       <div className='main'>
//         <label>First Name</label>
//         <input name="firstName" value={formData.firstName} onChange={handleChange}></input>
//         <label>Last Name</label>
//         <input name="lastName" value={formData.lastName} onChange={handleChange}></input>
//         <label>Age</label>
//         <input name="age" value={formData.age} onChange={handleChange}></input>
//         <label>Gender</label>
//         <input name="gender" value={formData.gender} onChange={handleChange}></input>
//         <label>Blood Group</label>
//         <input name="bloodGroup" value={formData.bloodGroup} onChange={handleChange}></input>
//         <label>Email</label>
//         <input name="email" value={formData.email} onChange={handleChange}></input>
//         <label>Phone Number</label>
//         <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}></input>
//         <button type="submit">Register</button>
//       </div>
//     </form>
//   )
// }

// export default Form;
