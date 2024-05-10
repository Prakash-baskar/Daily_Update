import { connect } from "react-redux";
import { Decerement, Incerement,  } from "./Action";

const Counter = ({ count, Incerement, Decerement, }) => {
    return(
        <>
        <div>
            <p>Counter:{count}</p>
            <button onClick={Decerement}>Decerement</button>
            <button onClick={Incerement}>Incerement</button>
            <button>Reset</button>
            <label>Name:</label>
            <input></input>
            <button>Submit</button>
        </div>
        </>
    );
};

const mapStateToProps = state => ({
    count: state.count
  });
  
 export default connect(mapStateToProps, { Incerement,Decerement})(Counter);