export default function CountControls(props) {
  console.log(props);
  return (
    <>
      <button onClick={props.handleClick}>Add</button>
      <button onClick={props.handleReset}>Reset</button>
    </>
  );
}