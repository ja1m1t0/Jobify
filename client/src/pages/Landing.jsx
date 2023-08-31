// import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
// import optional from "../assets/images/stepping_up.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I&apos;m baby hell of shabby chic shaman, craft beer 90&apos;s next
            level tousled intelligentsia try-hard bruh locavore yr godard.
            Whatever iPhone VHS, jianbing stumptown cliche roof party tacos woke
            try-hard adaptogen cred. Kinfolk vibecession biodiesel heirloom.
            Bushwick coloring book live-edge, franzen squid street art taxidermy
            kinfolk keffiyeh vinyl occupy. Slow-carb taiyaki butcher
            williamsburg chia freegan.
          </p>
          <Link to="/register" className="btn register-link">
            register
          </Link>
          <Link to="/login" className="btn register-link">
            login / demo user
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
