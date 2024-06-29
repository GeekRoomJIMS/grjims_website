import { Link } from "react-router-dom";
import jims from "../../assets/images/jims.png";

const Logo = () => {
  return (
    <div className=" logo w-16 h-16">
      <Link to='/'><img src={jims} alt="logo" /></Link>
    </div>
  );
};

export default Logo;
