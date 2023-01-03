import { Button } from "@mui/material";
import "./notfound.scss";
import NavBar from "../../components/navbar/navbar";
import {Link} from "react-router-dom";
const NotFound = () => {
  return (
    <>
    <NavBar />
      <div className="notFoundContainer">
        {/* <h1 className="notFound">4o4</h1>
        <h2 className="notFound">Page not found</h2>
        <p className="notFound">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </p> */}
        <Link to='/home'><Button variant="contained" className="notfoundButtton">
          Back to Home
        </Button></Link>
      </div>
    </>
  );
};
export default NotFound;
