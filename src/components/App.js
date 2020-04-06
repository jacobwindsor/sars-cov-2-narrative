import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Grommet,
  Heading,
  ResponsiveContext,
  Grid,
} from "grommet";
import theme from "../theme";
import Interaction from "./Interaction";
import Narrative from "./Narrative";
import Nav from "./Nav";
import LoadingShimmer from "./LoadingShimmer";

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

const Content = ({
  title,
  markdown,
  size,
  nextPage,
  prevPage,
  contents,
  setPage,
  currentPage,
  wpId,
  image,
}) => (
  <>
    {size == "large" ? (
      <Nav contents={contents} setPage={setPage} currentPage={currentPage} />
    ) : (
      ""
    )}
    <Narrative
      title={title}
      markdown={markdown}
      nextPage={nextPage}
      prevPage={prevPage}
    />
    <Interaction size={size} wpId={wpId} image={image} />
  </>
);

const useContents = () => {
  const [contents, setContents] = useState([]);

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
      contents.length > 0 &&
      fetch(`${process.env.PUBLIC_URL}/data/${contents[pageNumber].file}`)
        .then((res) => res.json())
        .then(setPageData);
  }, [pageNumber, contents]);

  return pageData;
};

const App = () => {
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

  const getRows = (size) => {
    switch (size) {
      case "large":
        return ["xsmall", "flex"];
      case "medium":
        return ["xsmall", "flex"];
      case "small":
        return ["xsmall", "flex", "flex"];
      default:
        return ["xsmall", "flex"];
    }
  };

  const getColumns = (size) => {
    switch (size) {
      case "large":
        return ["small", "flex", "flex"];
      case "medium":
        return ["flex", "flex"];
      case "small":
        return ["flex"];
      default:
        return ["small", "flex", "flex"];
    }
  };

  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Grid
            areas={getGridAreas(size)}
            rows={getRows(size)}
            columns={getColumns(size)}
            fill
          >
            <AppBar size={size} gridArea="header" />
            {pageData ? (
              <Content
                title={pageData.title}
                markdown={pageData.markdown}
                size={size}
                setPageNumber={setPageNumber}
                nextPage={nextPageNumber}
                prevPage={prevPageNumber}
                contents={contents}
                setPage={setPageNumber}
                currentPage={pageNumber}
                wpId={pageData.wpId}
                image={pageData.image}
              />
            ) : (
              <LoadingShimmer size={size} />
            )}
          </Grid>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default App;
