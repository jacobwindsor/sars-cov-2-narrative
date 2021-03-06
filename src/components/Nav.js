import React from "react";
import { Box, List } from "grommet";

export default ({ contents, setPage, currentPage }) => (
  <Box gridArea="nav" background="light-2">
    <List
      border={{ color: "transparent" }}
      primaryKey="title"
      data={contents}
      onClickItem={({ index }) => setPage(index)}
    />
  </Box>
);
