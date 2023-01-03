import "./signup.scss";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Link } from "react-router-dom";
import { useRef } from "react";

function SignUp() {
  const textInput = useRef(null);
  const textInput2 = useRef(null);
  const textInput3 = useRef(null);
  const textInput4 = useRef(null);
  const textInput5 = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = (data) =>{ console.log(data);
    localStorage.setItem("data", JSON.stringify(data));
    textInput.current.value = "";
    textInput2.current.value = "";
    textInput3.current.value = "";
    textInput4.current.value = "";
    textInput5.current.value = "";
  }

  return (
    <>
      <div className="signUpdiv">
        <h2 className="">Sign Up Now</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="signUpDiv">
            <TextField
            inputRef={textInput}
              id="outlined-basic"
              size="small"
              label="Name"
              variant="outlined"
              type="name"
              className="signUpInputs"
              placeholder="enter your Name"
              {...register("name", {
                required: true,
              })}
            />
            {(errors.name && errors.name.type) === "required" && (
              <p className="errorLabel">Name is reuired</p>
            )}
          </div>

          <div className="signUpDiv">
            <TextField
            inputRef={textInput2}
              id="outlined-basic"
              size="small"
              label="Email"
              variant="outlined"
              type="email"
              className="signUpInputs"
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

          <div className="signUpDiv">
            <TextField
            inputRef={textInput3}
            id="outlined-basic"
              size="small"
              label="Address"
              variant="outlined"
              type="Address"
              className="signUpInputs"
              placeholder="enter your Address"
              {...register("Address", {
                required: true,
              })}
            />
            <br />
            {(errors.Address && errors.Address.type) === "required" && (
              <p className="errorLabel">Address is reuired</p>
            )}
          </div>

          <div style={{textAlign:'left'}} className='signUpDiv'>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group">
                <FormControlLabel
                  value="female"
                  control={<Radio size="small" />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio size="small" />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
          </div>

          <div className="signUpDiv">
            <TextField
              inputRef={textInput4}
              id="outlined-basic"
              label="Password"
              size="small"
              variant="outlined"
              type="password"
              placeholder="enter your Password"
              className="signUpInputs"
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

          <div className="signUpDiv">
            <TextField
              inputRef={textInput5}
              id="outlined-basic"
              label="confirm password"
              size="small"
              variant="outlined"
              type="password"
              placeholder="enter your Password again"
              className="signUpInputs"
              {...register("c_password", {
                required: true,
                validate: (value) => {
                  if (watch("password") !== value) {
                    return "password doesn't matches";
                  }
                },
              })}
            />
            <br />
            {(errors.c_password && errors.c_password.type) === "required" && (
              <p className="errorLabel">confirm password is reuired</p>
            )}
            {(errors.c_password && errors.c_password.type) === "validate" && (
              <p className="errorLabel">{errors.c_password.message}</p>
            )}
          </div>

          <Button variant="contained" type="submit">
            Submit
          </Button>
          <p className="Already">
            Already have Account ? <Link to="/signin">SignIn</Link>
          </p>
        </form>
      </div>
    </>
  );
}
export default SignUp;
