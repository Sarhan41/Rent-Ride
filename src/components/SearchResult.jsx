import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Cars } from "../Constant/Cars";
import { Grid, Typography } from "@mui/material";
import Home from "./Home";
import { CarCard, Paginate } from "./";

const SearchResult = () => {
  const { searchTerm } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredCars = Cars.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // console.log(filteredCars);

  const totalPages = Math.ceil(filteredCars.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const itemsToDisplay = filteredCars.slice(startIndex, endIndex);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  if (itemsToDisplay.length > 0) {
    return (
      <React.Fragment>
        <Paginate
          currentPage={currentPage}
          onPageChange={handlePageChange}
          totalPages={totalPages}
        />

        <Typography
          variant="h6"
          component="div"
          sx={{
            color: "#333333",
            fontWeight: "bold",
            mb: "16px",
            borderBottom: "1px solid #ccc",
            pb: "8px",
            mt: 2,
          }}
        >
          Search Results for:{" "}
          <span style={{ color: "#000000" }}>{searchTerm}</span>
        </Typography>

        <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
          {itemsToDisplay.map((car) => (
            <Grid item xs={12} sm={6} md={4} key={car.id}>
              <CarCard key={car.id} {...car} />
            </Grid>
          ))}
        </Grid>
      </React.Fragment>
    );
  } else {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: 4,
          padding: "16px",
          borderRadius: "5px",
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{ color: "#333333", marginBottom: 2 }}
        >
          No Search Found
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{
            color: "#666666",
            marginBottom: 2,
            borderBottom: "1px solid #ccc",
            paddingBottom: 2,
          }}
        >
          Here Are All the Cars
        </Typography>
        <Home />
      </div>
    );
  }
};

export default SearchResult;
