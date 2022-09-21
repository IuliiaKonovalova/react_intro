function Employee(props) {
  // props are in the parent component
  return (
    <>
      <h3>Employee {props.name}</h3>
      <p>{props.role ? props.role : "No role"}</p>
      {props.role ? (
        <p className="role">Role: {props.role}</p>
      ) : (
        <p className="norole">No role</p>
      )}
    </>
  );
}

export default Employee;