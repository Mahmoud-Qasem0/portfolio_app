import { Link, Outlet } from "react-router-dom";
import jackImage from "../../assets/about-BgAkqdr2.jpg";
import "./sidebar.css";
function Sidebar() {
  let handleToggle = () => {
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.contains("active")
      ? sidebar.classList.remove("active")
      : sidebar.classList.add("active");
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row position-relative">
          <button
            type="button"
            className="toggle-btn fa-solid fa-bars position-absolute top start ms-2 mt-2 d-md-block"
            onClick={handleToggle}></button>
          <div className="sidebar col-lg-2 col-md-3 min-vh-100">
            <button
              type="button"
              className="close fa-solid fa-close position-absolute mt-2"
              onClick={handleToggle}></button>
            <img
              src={jackImage}
              alt="Profile"
              className="rounded-circle mb-4"
              width="150"
              height="150"
            />
            <h4 className="fw-bold">Jackson Ford</h4>
            <p className="mb-4">
              <span className="post">UI/UX Designer</span> in Philippines
            </p>
            <ul className="m-0 p-0 list-unstyled">
              <li className="">
                <Link to="home" className="active nav-link" onClick={handleToggle} >
                  Home
                </Link>
              </li>
              <li className="">
                <Link to="about" className="active nav-link" onClick={handleToggle} >
                  About
                </Link>
                <Link to="skills" className="active nav-link" onClick={handleToggle} >
                  Skills
                </Link>
                <Link to="experience" className="active nav-link" onClick={handleToggle} >
                  Experience
                </Link>
                <Link to="work" className="active nav-link" onClick={handleToggle} >
                  Work
                </Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
