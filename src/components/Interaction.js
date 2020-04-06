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
  if (props.show)
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
};
