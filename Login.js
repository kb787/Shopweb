import "./Login.css";

const Login = () => {
  return (
    <div className="Login">
      <div className="loginCont">
        <div className="loginCard">
          <div className="loginBody">
            <h5 className="loginTitle">Login</h5>
            <div className="loginInput">
              <label htmlFor="exampleFormControlInput1" className="loginLabel">
                Enter your mobile number
              </label>
              <input
                type="number"
                className="loginForm"
                id="exampleFormControlInput1"
                placeholder="Enter a valid 10 digit number"
              />
            </div>
            <button className="loginButton">Send OTP</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
