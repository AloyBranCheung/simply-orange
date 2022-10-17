import React from "react";
import { styled } from "@mui/material/styles";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "rgba(0, 98, 35, 0.15)",
  "&:hover": {
    backgroundColor: "rgba(0, 98, 35, 0.25)",
  },
  "&:focus-within": {
    backgroundColor: "rgba(0, 98, 35, 0.75)",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "white",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function SearchBar() {
  return (
    <Search>
      <SearchIconWrapper>
        <CurrencyExchangeIcon sx={{ color: "white" }} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Price"
        inputProps={{
          "aria-label": "input-price",
          type: "number",
          min: "0",
        }}
      />
    </Search>
  );
}
