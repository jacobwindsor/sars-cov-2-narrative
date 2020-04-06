import React from "react";
import { Box, Button } from "grommet";

const getNavItems = (contents, setPage, currentPage) =>
  contents.map((page, i) => (
    <Button
      margin={{ bottom: "small" }}
      label={page.title}
      plain
      onClick={() => setPage(i)}
      active={i === currentPage}
      key={i.toString()}
    />
  ));

export default ({ contents, setPage, currentPage }) => (
  <Box
    margin={{ top: "small", bottom: "small" }}
    gridArea="nav"
    background="light-2"
  >
    {getNavItems(contents, setPage, currentPage)}
  </Box>
);
