import React from "react";
import { Pagination, Box, useMediaQuery } from "@mui/material";


const Paginate = ({ currentPage, onPageChange, totalPages }) => {
  const handlePageChange = (event, newPage) => {
    if (onPageChange) {
      onPageChange(event, newPage);
    }
  };
  const isMobile = useMediaQuery("(max-width: 600px)");

  return totalPages > 1 ? (
    <Box display="flex" justifyContent="center" alignItems="center" my={2}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        size="large"
        shape="rounded"
        showFirstButton
        showLastButton
        siblingCount={isMobile ? 0 : 1}
      />
    </Box>
  ) : null;
};

export default Paginate;
