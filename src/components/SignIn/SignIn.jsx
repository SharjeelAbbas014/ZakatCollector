import "./SignIn.css";
import TextField from "@material-ui/core/TextField";
const SignIn = () => {
  return (
    <div>
      <div id="signin">
        <h2>Sign In</h2>
        <div id="signinform">
          <div className="inputField">
            <TextField id="standard-basic" label="Enter Your Email" />
          </div>
          <div className="inputField">
            <TextField
              id="standard-password-input"
              label="Enter Your Password"
              type="password"
              autoComplete="current-password"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
