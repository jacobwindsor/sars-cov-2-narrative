import React, { useState, useEffect } from "react";
import { Box, Button, Collapsible, Layer } from "grommet";
import { FormClose } from "grommet-icons";
import { Pvjs } from "@wikipathways/pvjs";
import ErrorBoundary from "./ErrorBoundary";
import StaticDiagram from "./StaticDiagram";

const usePathway = (wpId) => {
  const [pathway, setPathway] = useState(null);
  const [entitesById, setEntitiesById] = useState(null);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/pathways/${wpId}.json`)
      .then((res) => res.json())
      .then((json) => {
        setPathway(json.pathway);
        setEntitiesById(json.entitiesById);
      });
  }, [wpId]);

  return [pathway, entitesById];
};

const Pathway = (props) => {
  const wpId = "WP4846";
  const [pathway, entitiesById] = usePathway(wpId);

  if (pathway && entitiesById)
    return (
      <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
        <Pvjs
          pathway={pathway}
          entitiesById={entitiesById}
          theme="plain"
          hiddenEntites={["b920a", "a9a90"]}
        />
      </div>
    );

  return <p>Loading...</p>;
};

const Content = (props) => {
  return (
    <ErrorBoundary>
      <Pathway />
    </ErrorBoundary>
  );
};

export default (props) => {
  if (props.show)
    return (
      <Box
        gridArea="interaction"
        background="light-2"
        align="center"
        justify="center"
      >
        <Content />
      </Box>
    );
};
