import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/counter">Counter</NavLink>
      <NavLink to="/greeting">Greeting</NavLink>
      <NavLink to="/toggle">Show Hide</NavLink>
      <NavLink to="/font-sizer">Font Sizer</NavLink>
      <NavLink to="/text-align">Text Align</NavLink>
      <NavLink to="/clock">Clock</NavLink>
      <NavLink to="/color-change">Change Color</NavLink>
      <NavLink to="/color-slider">Color Slider</NavLink>
    </div>
  );
}