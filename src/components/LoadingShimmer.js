import React from "react";
import { Box } from "grommet";

const ShimmerBox = (props) => (
  <Box
    className="infinite-animation"
    animation={{
      type: "fadeOut",
      duration: 3000,
      iterationCount: Infinity,
    }}
    background="light-5"
    margin="small"
    round
    {...props}
  />
);

export default (props) => (
  <>
    <ShimmerBox gridArea="nav" />
    <ShimmerBox gridArea="main" />
    <ShimmerBox gridArea="interaction" />
  </>
);
