import "./Navbar.css";
function Navbar() {
  return (
    <div className="top" style={{ backgroundColor: "#00b894" }}>
      <div className="navbar">
        <div className="left">
          <div>BMI Calculator</div>
        </div>
        <div className="nav2">
          <div className="right">
            <div className='home'>Home</div>
            <div className='desc'>What is BMI?</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
