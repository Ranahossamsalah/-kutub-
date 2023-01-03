import "./search-bar.scss";

import { searchContext } from "../../context/search";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const SearchBar = () => {
  const { setSearchKey } = useContext(searchContext);
  const navigate = useNavigate();

  const { handleSubmit, register } = useForm({});
  const [key, setKey] = useState("");

  const searchSubmit = (input) => {
    setSearchKey(input.search);
    setKey("");
    navigate("/search", { replace: true });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(searchSubmit)} className="search-bar">
        <Box
          sx={{
            width: 500,
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextField
            {...register("search", { required: true, maxLength: 20 })}
            color="warning"
            helperText="Please enter your search keyword"
            id="search-bar"
            label="Search..."
            onChange={(event) => setKey(event.target.value)}
            value={key}
          />
        </Box>
        <Button type="submit" variant="outlined" color="warning">
          Search
        </Button>
      </form>
    </div>
  );
};
export default SearchBar;
