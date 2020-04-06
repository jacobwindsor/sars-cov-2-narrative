import React from "react";
import { Box, Button, Footer, Markdown, Main, Heading } from "grommet";
import { FormClose, FormAdd, LinkNext, LinkPrevious } from "grommet-icons";

export default ({
  setShowInteraction,
  showInteraction,
  title,
  markdown,
  nextPage,
  prevPage,
}) => (
  <Main pad="medium" gridArea="main" className="hide-scroll">
    <Heading>{title}</Heading>
    <Markdown>{markdown}</Markdown>
    <Footer margin={{ top: "small" }} direction="row" justify="between">
      <Button icon={<LinkPrevious />} onClick={prevPage} alignSelf="start" />
      <Button icon={<LinkNext />} onClick={nextPage} alignSelf="end" />
    </Footer>
  </Main>
);
