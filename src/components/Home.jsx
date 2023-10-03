import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Cars } from "../Constant/Cars";
import CarCard from "./CarCard";
import { Grid } from "@mui/material";
import Paginate from "./Paginate";

const Home = () => {
  const navigate = useNavigate();
  const { pageNumber } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(Cars.length / itemsPerPage);

  useEffect(() => {
    if (pageNumber) {
      const parsedPageNumber = parseInt(pageNumber, 10);
      if (!isNaN(parsedPageNumber)) {
        setCurrentPage(parsedPageNumber);
      }
    }
  }, [pageNumber]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const itemsToDisplay = Cars.slice(startIndex, endIndex);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage); 
    navigate(`/page/${newPage}`); 
  };

  return (
    <div>
        <Paginate
          currentPage={currentPage}
          onPageChange={handlePageChange}
          totalPages={totalPages}
        />
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
        {itemsToDisplay.map((car) => (
          <Grid item xs={12} sm={6} md={4} key={car.id}>
            <CarCard key={car.id} {...car} />
          </Grid>
        ))}
      </Grid>

    </div>
  );
};

export default Home;
