import LabelAndInput from "./LabelAndInput";

const Form = () => {
  return (
    <div className="form">
      <LabelAndInput label="Task" />
      <LabelAndInput label="Day & Time" />
      <div className="reminder-checkbox">
        <label htmlFor="reminder">Set Reminder</label>
        <input type="checkbox" id="reminder" />
      </div>
      <button className="save">Save Task</button>
    </div>
  );
};

export default Form;
