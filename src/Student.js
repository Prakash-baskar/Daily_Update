import propTypes from "prop-types";

const Student = (props) => {
  return (
    <div className="student">
      <table>
        <tbody>  
            <tr>
               <th>Name</th>
               <td>{props.name}</td>
           </tr>
           <tr>
               <th>Age</th>
               <td>{props.age}</td>
           </tr>
           <tr>
               <th>isMarried</th>
               <td>{props.isMarried?"yes":"No"}</td>
           </tr>
        </tbody>    
      </table>
    </div>
  )
}

export default Student

Student.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
  isMarried: propTypes.bool,
};

Student.defaultProps = {
    name: "No name",
    age: 0,
    isMarried: false,
};