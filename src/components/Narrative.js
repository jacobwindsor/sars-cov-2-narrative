import React, { useEffect, useRef } from "react";
import { Box, Button, Footer, Markdown, Main, Heading } from "grommet";
import { FormClose, FormAdd, LinkNext, LinkPrevious } from "grommet-icons";
import ErrorBoundary from "./ErrorBoundary";

export default ({
  setShowInteraction,
  showInteraction,
  title,
  markdown,
  nextPage,
  prevPage,
}) => {
  const scrollingContainer = useRef(null);

  useEffect(() => {
    console.log(scrollingContainer);
    if (scrollingContainer.current) {
      scrollingContainer.current.scrollTop = 0;
    }
  }, [title, markdown]);

  return (
    <ErrorBoundary>
      <Box
        pad="medium"
        fill="vertical"
        flex="grow"
        overflow="auto"
        gridArea="main"
        className="hide-scroll"
        ref={scrollingContainer}
      >
        <Heading>{title}</Heading>
        <Markdown size="fill">{markdown}</Markdown>
        <Footer margin={{ top: "small" }} direction="row" justify="between">
          <Button
            icon={<LinkPrevious />}
            onClick={prevPage}
            alignSelf="start"
          />
          <Button icon={<LinkNext />} onClick={nextPage} alignSelf="end" />
        </Footer>
      </Box>
    </ErrorBoundary>
  );
};
