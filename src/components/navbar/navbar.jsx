import * as React from "react";
import "./navbar.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { orange } from "@mui/material/colors";
import { Button, ButtonGroup } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import profilePhoto from "../../assets/imgs/reading.png";
import photo from "../../assets/imgs/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTotals } from "../../redux/cartslice";

export default function NavBar() {
	const { cartTotalQuantity } = useSelector((state) => state.BReducer);
	const Books = useSelector((state) => state.BReducer.Books);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getTotals());
	}, [Books]);

	function SigningOut() {
		localStorage.clear();
	}
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};
	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};
	const mobileMenuId = "primary-search-account-menu-mobile";
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<IconButton size="large" aria-label="show 0" color="inherit">
					<Badge badgeContent={cartTotalQuantity} color="success" showZero>
						<Link to="/cart">
							<ShoppingCartIcon sx={{ color: orange["900"], fontSize: 30 }} />
						</Link>
					</Badge>
				</IconButton>
				<p>Cart</p>
			</MenuItem>
			<MenuItem>
				<IconButton
					size="large"
					aria-label="account of current user"
					aria-controls="primary-search-account-menu"
					aria-haspopup="true"
					color="inherit"
				>
					<img className="profilePhoto" src={profilePhoto} alt="" />
				</IconButton>
				<p>Profile</p>
			</MenuItem>
			<MenuItem>
				<IconButton>
					<ButtonGroup
						variant="contained"
						aria-label="outlined primary button group"
					>
						<Link to="/home">
							<Button>Books</Button>
						</Link>
						<Button>Comics</Button>
					</ButtonGroup>
				</IconButton>
			</MenuItem>
			<MenuItem>
				<IconButton>
					<Link to="/" style={{ alignSelf: "center" }}>
						<Button
							className="signOut"
							variant="contained"
							onClick={SigningOut}
						>
							Sign Out
						</Button>
					</Link>
				</IconButton>
			</MenuItem>
		</Menu>
	);
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="static"
				style={{
					backgroundColor: "#fff",
					paddingLeft: 20,
					paddingRight: 20,
					marginBottom: 20,
				}}
			>
				<Toolbar>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ display: { xs: "none", sm: "block" } }}
					>
						<img src={photo} alt="" className="logoContainer" />
					</Typography>
					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ display: { xs: "none", md: "flex" } }}>
						<IconButton>
							<ButtonGroup
								variant="contained"
								aria-label="outlined primary button group"
							>
								<Link to="/home">
									<Button>Books</Button>
								</Link>
								<Button>Comics</Button>
							</ButtonGroup>
						</IconButton>
						<IconButton size="large" color="inherit">
							<Badge badgeContent={cartTotalQuantity} color="success" showZero>
								<Link to="/cart">
									<ShoppingCartIcon
										sx={{ color: orange["900"], fontSize: 30 }}
									/>
								</Link>
							</Badge>
						</IconButton>
						<IconButton
							size="large"
							edge="end"
							aria-label="account of current user"
							aria-haspopup="true"
							color="inherit"
						>
							<img
								className="profilePhoto profilePhotoBig"
								src={profilePhoto}
								alt="profilePhoto"
							/>
						</IconButton>
						<Link to="/" style={{ alignSelf: "center" }}>
							<Button
								className="signOut"
								variant="contained"
								onClick={SigningOut}
							>
								Sign Out
							</Button>
						</Link>
					</Box>
					<Box sx={{ display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
							color="inherit"
						>
							<MenuIcon
								sx={{ color: orange["900"], fontSize: 35, fontWeight: "bold" }}
							/>
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
		</Box>
	);
}
