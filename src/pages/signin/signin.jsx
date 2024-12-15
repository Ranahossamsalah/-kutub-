/** @format */

import "./signin.scss";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { Link ,useNavigate } from "react-router-dom";

function SignIn() {
  const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem("data", JSON.stringify(data));
    navigate("/options")
  };

  return (
    <>
      <div className="signIndiv">
        <h2>Sign In to your Account</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="signInDiv">
            <TextField
              id="outlined-basic"
              size="small"
              label="Email"
              variant="outlined"
              type="email"
              className="signInInputs"
              placeholder="enter your email"
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            <br />
            {(errors.email && errors.email.type) === "required" && (
              <p className="errorLabel">email is reuired</p>
            )}
            {(errors.email && errors.email.type) === "pattern" && (
              <p className="errorLabel">email is invalid</p>
            )}
          </div>

          <div className="signInDiv">
            <TextField
              id="outlined-basic"
              label="Password"
              size="small"
              variant="outlined"
              type="password"
              placeholder="enter your Password"
              className="signInInputs"
              {...register("password", {
                required: true,
                minLength: 8,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              })}
            />
            <br />
            {(errors.password && errors.password.type) === "required" && (
              <p className="errorLabel">password is reuired</p>
            )}
            {(errors.password && errors.password.type) === "minLength" && (
              <p className="errorLabel">min length 8 letters</p>
            )}
            {(errors.password && errors.password.type) === "pattern" && (
              <p className="errorLabel">
                password must contain uppercase and lowercase letter and one
                special character
              </p>
            )}
          </div>

          <Button variant="contained" type="submit">
            Sign In <Link to="/signup">SignUp</Link>
          </Button>
          <p className="Alreadysignin">
            Dont have an Account ? <Link to="/signup">SignUp</Link>
          </p>
        </form>
      </div>
    </>
  );
}
export default SignIn;
