import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import './contacus.scss';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import NavBar from '../../components/navbar/navbar';


const ContactUS =()=>{
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {console.log(data);
        localStorage.setItem("data", JSON.stringify(data));}
    return(
        <>
        <NavBar />
        <div className='contactusContainer'>
        <div className='contactusSubContainer1'>
             <div className='IconDivs'><FacebookIcon /><p>FaceBook</p><p>Kutub store</p></div>
             <div className='IconDivs'><TwitterIcon /><p>Twitter</p><p>Kutub store</p></div>  
             <div className='IconDivs'><LocalPhoneIcon /><p>Phone</p><p>( +20 ) 1111100000</p></div>  
             <div className='IconDivs'><EmailIcon /><p>Email</p><p>Kutub@gmail.com</p></div>  
        </div>
        <div className='contactusSubContainer2'>
            <h3 style={{marginBottom:10,marginTop:20}}>Send us Message</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
          <div className="contactUsDiv">
            <TextField
              id="outlined-basic"
              size="small"
              label="Name"
              variant="outlined"
              type="name"
              className="contactUsInputs"
              placeholder="Full Name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
              {...register("name", {
                required: true,
              })}
            />
            {(errors.name && errors.name.type) === "required" && (
              <p className="contacterrorLabel">Name is reuired</p>
            )}
          </div>

          <div className="contactUsDiv">
            <TextField
              id="outlined-basic"
              label="phone"
              size="small"
              variant="outlined"
              type="phone"
              placeholder="01xxxxxxxxx"
              className="contactUsInputs"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocalPhoneIcon />
                  </InputAdornment>
                ),
              }}
              {...register("phone", {
                required: true,
                minLength: 11,
                maxLength:11
              })}
            />
            <br />
            {(errors.phone && errors.phone.type) === "required" && (
              <p className="contacterrorLabel">phone is reuired</p>
            )}
            {(errors.phone && errors.phone.type) === "minLength" && (
              <p className="contacterrorLabel">min length 11 number</p>
            )}
             {(errors.phone && errors.phone.type) === "maxLength" && (
              <p className="contacterrorLabel">max length 11 number</p>
            )}
          </div>

          <div className="contactUsTextArea">
            <TextareaAutosize
              id="outlined-basic"
              size="small"
              label="Message"
              variant="outlined"
              type="Message"
              className='contactUsTextAreaField'
              placeholder="Your Message"
              aria-label="minimum height"
              minRows={5}
              {...register("Message", {
                required: true,
                minLength: 20,
                maxLength:150
              })}
            />
            <br />
            {(errors.Message && errors.Message.type) === "required" && (
              <p className="contacterrorLabel">Message is required</p>
            )}
             {(errors.Message && errors.Message.type) === "minLength" && (
              <p className="contacterrorLabel">min length 20 letter</p>
            )}
             {(errors.Message && errors.Message.type) === "maxLength" && (
              <p className="contacterrorLabel">max length 150 letter</p>
            )}
          </div>

          <Button className='contacyUsButton' variant="contained" type="submit">
            Submit
          </Button>
          
        </form>
        </div>
        </div></>
    )
}
export default ContactUS;