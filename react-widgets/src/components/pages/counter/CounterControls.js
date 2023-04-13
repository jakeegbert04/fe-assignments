export default function CountControls(props) {
  console.log(props);
  return (
    <>
      <button onClick={props.handleClickAdd}>Add</button>
      <button onClick={props.handleClickMinus}>Subtract</button>
    </>
  );
}