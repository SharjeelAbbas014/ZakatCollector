import "./SignUp.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const SignUp = () => {
  return (
    <div>
      <div id="signup">
        <h2>Create An Account</h2>
        <div id="signupform">
          <div className="inputField">
            <TextField id="standard-basic" label="Enter Your Name" />
          </div>
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
          <div className="inputField">
            <TextField
              id="standard-password-input"
              label="Confirm Your Password"
              type="password"
              autoComplete="current-password"
            />
          </div>
          <Button variant="contained" color="primary">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
