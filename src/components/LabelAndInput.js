const LabelAndInput = (props) => {

  return (
    <div>
      <label htmlFor="task-input" className="label">
        {props.label}
      </label>
      <input type="text" id="task-input" placeholder={"Add " + props.label} />
    </div>
  );
};

export default LabelAndInput;
