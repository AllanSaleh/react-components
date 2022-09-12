import Task from "./Task";

const ListOfTask = () => {
  return (
    <div className="list-of-tasks">
      <Task taskLabel="Doctors Appointment" date="Feb 5th" />
      <Task taskLabel="Meeting at School" date="Feb 6th" />
      {/* <Task taskLabel="Dinner with Mom" date="Feb 7th" /> */}
    </div>
  );
};

export default ListOfTask;
