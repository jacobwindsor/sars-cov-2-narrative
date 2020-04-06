import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Grommet,
  Heading,
  ResponsiveContext,
  Grid,
} from "grommet";
import { FormClose, FormAdd } from "grommet-icons";
import theme from "../theme";
import Interaction from "./Interaction";
import Narrative from "./Narrative";
import Nav from "./Nav";

const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  >
    <Heading level="3" margin="none">
      {process.env.REACT_APP_APP_NAME}
    </Heading>
  </Box>
);

const Loading = (props) => <p>Loading...</p>;

const Content = ({
  title,
  markdown,
  showInteraction,
  setShowInteraction,
  size,
  nextPage,
  prevPage,
  contents,
  setPage,
}) => (
  <>
    {size == "large" ? <Nav contents={contents} setPage={setPage} /> : ""}
    <Narrative
      title={title}
      markdown={markdown}
      showInteraction={showInteraction}
      setShowInteraction={setShowInteraction}
      nextPage={nextPage}
      prevPage={prevPage}
    />
    <Interaction
      show={showInteraction}
      setShow={setShowInteraction}
      size={size}
    />
  </>
);

const useContents = () => {
  const [contents, setContents] = useState(null);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/mapping.json`)
      .then((res) => res.json())
      .then(setContents);
  }, []);
  return contents;
};

const usePageData = (pageNumber, contents) => {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    contents &&
      fetch(`${process.env.PUBLIC_URL}/data/${contents[pageNumber].file}`)
        .then((res) => res.json())
        .then(setPageData);
  }, [pageNumber, contents]);

  return pageData;
};

const App = () => {
  const [showInteraction, setShowInteraction] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);

  const contents = useContents();
  const pageData = usePageData(pageNumber, contents);

  const nextPageNumber = () => {
    if (pageNumber + 1 >= contents.length) return;
    setPageNumber(pageNumber + 1);
  };

  const prevPageNumber = () => {
    if (pageNumber - 1 < 0) return;
    setPageNumber(pageNumber - 1);
  };

  const getGridAreas = (size) => {
    if (size === "large")
      return [
        { name: "header", start: [0, 0], end: [2, 0] },
        { name: "nav", start: [0, 1], end: [0, 1] },
        { name: "main", start: [1, 1], end: [1, 1] },
        { name: "interaction", start: [2, 1], end: [2, 1] },
      ];
    else if (size === "medium")
      return [
        { name: "header", start: [0, 0], end: [1, 0] },
        { name: "main", start: [0, 1], end: [0, 1] },
        { name: "interaction", start: [1, 1], end: [1, 1] },
      ];
    else
      return [
        { name: "header", start: [0, 0], end: [0, 0] },
        { name: "main", start: [0, 1], end: [0, 1] },
        { name: "interaction", start: [0, 2], end: [0, 2] },
      ];
  };

  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Grid
            areas={getGridAreas(size)}
            rows={["fill", "fill", "fill"]}
            columns={["auto", "auto", "auto"]}
            fill
          >
            <AppBar size={size} gridArea="header" />
            {pageData ? (
              <Content
                title={pageData.title}
                markdown={pageData.markdown}
                showInteraction={showInteraction}
                setShowInteraction={setShowInteraction}
                size={size}
                setPageNumber={setPageNumber}
                nextPage={nextPageNumber}
                prevPage={prevPageNumber}
                contents={contents}
                setPage={setPageNumber}
              />
            ) : (
              <Loading gridArea="main" />
            )}
          </Grid>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default App;
