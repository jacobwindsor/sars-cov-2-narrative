import React, { useState, useEffect, Suspense } from "react";
import { Box, Image } from "grommet";
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

const Pathway = ({ wpId }) => {
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

const Illustration = ({ image }) => (
  <Image
    src={`${process.env.PUBLIC_URL}/images/${image}`}
    fit="cover"
    alignSelf="center"
    fill
  />
);

const Data = ({ component }) => {
  const LazyComponent = React.lazy(() =>
    import(`../+data-components/${component}`)
  );

  return (
    <Box pad="medium">
      <Suspense fallback={<p>Loading...</p>}>
        <LazyComponent />
      </Suspense>
    </Box>
  );
};

const Content = (props) => {
  if (
    Object.values(props).filter((val) => val != null && val !== false).length >
    1
  ) {
    throw new Error(
      "Interaction can only contain one of pathway, image, or component."
    );
  }

  const { wpId, image, component } = props;
  return (
    <>
      {wpId ? <Pathway wpId={wpId} /> : ""}
      {image ? <Illustration image={image} /> : ""}
      {component ? <Data component={component} /> : ""}
    </>
  );
};

export default ({ wpId, image, component }) => {
  return (
    <Box
      gridArea="interaction"
      background="light-2"
      align="center"
      justify="center"
    >
      <ErrorBoundary>
        <Content wpId={wpId} image={image} component={component} />
      </ErrorBoundary>
    </Box>
  );
};
