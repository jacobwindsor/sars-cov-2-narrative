import React from "react";
import { Box, Button } from "grommet";

const getNavItems = (contents, setPage) =>
  contents.map((page, i) => (
    <Button
      margin={{ bottom: "small" }}
      label={page.title}
      plain
      onClick={() => setPage(i)}
      key={i.toString()}
    />
  ));

export default ({ contents, setPage }) => (
  <Box pad="small" gridArea="nav">
    {getNavItems(contents, setPage)}
  </Box>
);
