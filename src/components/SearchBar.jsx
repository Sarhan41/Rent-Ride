import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import { IconButton, Input, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {

    if (searchTerm.trim() === "") {
      navigate("/");
    } else {
      navigate(`/search/${searchTerm.trim()}`);
      setSearchTerm("");
    }
  };
  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: "#fff",
        padding: "6px 12px",
        display: "flex",
        alignItems: "center",
        borderRadius: 5,
        height: "fit-content",
      }}
    >
      <Input
        placeholder="Search cars..."
        inputProps={{ style: { color: "#333", fontSize: "14px" } }}
        sx={{ "&::placeholder": { color: "#666" } }}
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        onKeyPress={handleKey}
      />
      <IconButton
        color="inherit"
        size="small"
        sx={{ marginLeft: 8 }}
        onClick={handleSearch}
      >
        <Search color="#333" />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
