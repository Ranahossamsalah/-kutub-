import "./footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<>
			<div className="footerContainer">
				<div className="footersubContainer">
					<h3>Contact Us</h3>
					<p className="footerPar">
						Stay in touch with Us, follow us on social media and learn about new
						Events
					</p>
					<FacebookIcon sx={{ mr: 2 }} />
					<TwitterIcon sx={{ mr: 2 }} />
					<a href="https://github.com/AkramQabodan/kutub" target="_blank">
						<GitHubIcon sx={{ mr: 2, color: "white" }} />
					</a>
					<a
						onClick={() =>
							(window.location = "mailto:nada.yousery.abdo@gmail.com")
						}
					>
						<EmailIcon sx={{ mr: 2, color: "white" }} />
					</a>
				</div>

				<div className="footersubContainer">
					<h3>News & Update</h3>
					<p className="footerPar">
						We’d love it if you subscribed to our newsletter! You’ll love it
						too.
					</p>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div>
							<TextField
								id="outlined-end-adornment"
								size="small"
								label="Email"
								variant="outlined"
								type="email"
								className="contactInput"
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<Button type="submit">
												<SendIcon sx={{ ml: 5 }} />
											</Button>
										</InputAdornment>
									),
								}}
								placeholder="enter your email"
								{...register("email", {
									required: true,
									pattern:
										/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								})}
							/>
							{(errors.email && errors.email.type) === "required" && (
								<p>email is reuired</p>
							)}
							{(errors.email && errors.email.type) === "pattern" && (
								<p>email is invalid</p>
							)}
						</div>
					</form>
				</div>
			</div>
		</>
	);
};
export default Footer;
