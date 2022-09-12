import Button from "./Button";

const Task = (props) => {
  console.log(props)
  return (
    <div className="task">
      <div className="task-details">
        <h1>{props.taskLabel}</h1>
        <h2>{props.date}</h2>
      </div>
      <Button />
    </div>
  );
};

export default Task;
