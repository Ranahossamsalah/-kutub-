import "./SettingForm.scss";
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

function SettingForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const addressRef = useRef(null);
  const passwordRef = useRef(null);
  const rePasswordRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = (data) => {
    nameRef.current.value = "";
    emailRef.current.value = "";
    addressRef.current.value = "";
    passwordRef.current.value = "";
    rePasswordRef.current.value = "";
    console.log(data);
  };

  return (
    <>
      <div className="signUpdiv">
        <h2 className="">Profile</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="signUpDiv">
            <TextField
              inputRef={nameRef}
              id="outlined-basic"
              size="small"
              label="Name"
              variant="outlined"
              type="name"
              className="signUpInputs"
              placeholder="enter your Name"
              {...register("name", {})}
            />
          </div>

          <div className="signUpDiv">
            <TextField
              inputRef={emailRef}
              id="outlined-basic"
              size="small"
              label="Email"
              variant="outlined"
              type="email"
              className="signUpInputs"
              placeholder="enter your email"
              {...register("email", {
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            <br />
            {(errors.email && errors.email.type) === "pattern" && (
              <p className="errorLabel">email is invalid</p>
            )}
          </div>

          <div className="signUpDiv">
            <TextField
              inputRef={addressRef}
              id="outlined-basic"
              size="small"
              label="Address"
              variant="outlined"
              type="Address"
              className="signUpInputs"
              placeholder="enter your Address"
              {...register("Address", {})}
            />
            <br />
          </div>

          <div className="signUpDiv">
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
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
              inputRef={passwordRef}
              id="outlined-basic"
              label="Password"
              size="small"
              variant="outlined"
              type="password"
              placeholder="enter your Password"
              className="signUpInputs"
              {...register("password", {
                minLength: 8,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              })}
            />
            <br />
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
              inputRef={rePasswordRef}
              id="outlined-basic"
              label="confirm password"
              size="small"
              variant="outlined"
              type="password"
              placeholder="enter your Password again"
              className="signUpInputs"
              {...register("c_password", {
                validate: (value) => {
                  if (watch("password") !== value) {
                    return "password doesn't matches";
                  }
                },
              })}
            />
            <br />
            {(errors.c_password && errors.c_password.type) === "validate" && (
              <p className="errorLabel">{errors.c_password.message}</p>
            )}
          </div>

          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}
export default SettingForm;
