import { connect } from "react-redux";
import { removeTask } from "./Action";





const TaskList = ({tasks, removeTask}) => {
  return (
    <ul>
      {tasks.map(task =>(
        <li key={task.id}>
          {task.name}
          <button onClick={() => removeTask(task.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = state =>({
  tasks: state.tasks
});

const mapDispatchToProps =  {
  removeTask
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
