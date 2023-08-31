import logo from "../assets/images/logo.svg";

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="jobify" className="logo" />
    </div>
  );
};

export default Logo;