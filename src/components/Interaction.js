import React, { useState, useEffect } from "react";
import { Box, Button, Collapsible, Layer } from "grommet";
import { FormClose } from "grommet-icons";
import { Pvjs } from "@wikipathways/pvjs";
import ErrorBoundary from "./ErrorBoundary";
import StaticDiagram from "./StaticDiagram";

const Pathway = (props) => {
  console.log(props.pathway);
  return <Pvjs wpId={props.wpId} theme="plain" />;
};

const Content = (props) => {
  return (
    <ErrorBoundary>
      <StaticDiagram />
    </ErrorBoundary>
  );
};

export default (props) => {
  if (!props.show || props.size !== "small")
    return (
      <Box
        gridArea="interaction"
        position="fixed"
        width="fill"
        background="light-2"
        elevation="small"
        align="center"
        justify="center"
      >
        <Content />
      </Box>
    );

  return (
    <Layer>
      <Box
        background="light-2"
        tag="header"
        justify="end"
        align="center"
        direction="row"
      >
        <Button
          icon={<FormClose />}
          onClick={() => props.setShow(!props.show)}
        />
      </Box>
      <Box fill background="light-2" align="center" justify="center">
        <Content />
      </Box>
    </Layer>
  );
};
