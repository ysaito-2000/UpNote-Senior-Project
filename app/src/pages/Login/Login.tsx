import "./Login.scss";

import Button from "components/Button/Button";
import NavBar from "components/NavBar/Navbar";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface UserInfoType {
  username: string;
  password: string;
  passwordConfirm: string;
  email: string;
}

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  } as UserInfoType);

  console.log({ userInfo });

  const navigate = useNavigate();

  return (
    <div className="login">
      <NavBar />
      <div className="login-box">
        <h2>Login</h2>
        <div>
          <div className="user-box">
            <input
              type="email"
              name=""
              required={true}
              onChange={(event) => {
                const newUserInfo = {
                  ...userInfo,
                  email: event.target.value,
                };
                setUserInfo(newUserInfo);
              }}
            />
            <label>Email Address</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name=""
              required={true}
              onChange={(event) => {
                const newUserInfo = {
                  ...userInfo,
                  password: event.target.value,
                };
                setUserInfo(newUserInfo);
              }}
            />
            <label>Password</label>
          </div>
          <div className="lb-button">
            <Button
              color="blue"
              onClick={() => {
                navigate("/collection");
              }}
            >
              <>Submit</>
            </Button>
          </div>
        </div>
      </div>
      <div className="lb-signup-text">
        <p>
          Don&apos;t have an account? Sign up <Link to="/signup">here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;