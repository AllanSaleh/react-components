import LabelAndInput from "./LabelAndInput";

const Form = () => {
  return (
    <div className="form">
      <LabelAndInput />
      <LabelAndInput />
      <label htmlFor="reminder">Set Reminder</label>
      <input type="checkbox" id="reminder" />
      <button className="save">Save Task</button>
    </div>
  );
};

export default Form;
