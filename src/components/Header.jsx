import { NavLink } from "react-router-dom";


function Header() {
  
    const getLinkStyles = ({ isActive }) => {
    const classNames = ["link"];
    if (isActive) {
      classNames.push("active");
    }
    return classNames.join(" ");
  };

  return (
    <nav>
      <div>
        <NavLink to="/" className={getLinkStyles}>
          Home
        </NavLink>
      </div>
    </nav>
  );
}

export { Header };
