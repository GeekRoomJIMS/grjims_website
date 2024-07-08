import jims from "../../assets/images/jims.png";

const Logo = () => {
  return (
    <div className=" logo w-20 h-20">
     <a
                  href="/"
                  style={{ color: "#eaece5", textDecoration: "none" }}
                >
                  <img src={jims} alt="logo" />
                </a>
      
    </div>
  );
};

export default Logo;
