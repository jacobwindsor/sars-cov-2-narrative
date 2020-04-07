import React from "react";
import { Box, Button } from "grommet";
import { ShareOption, Twitter, Linkedin, Menu } from "grommet-icons";

const ShareIcons = () => (
  <Box direction="row" justify="evenly" width="small">
    <Button plain icon={<Twitter color="dark-4" />} focusIndicator={false} />
    <Button plain icon={<Linkedin color="dark-4" />} focusIndicator={false} />
    <Button
      plain
      icon={<ShareOption color="dark-4" />}
      focusIndicator={false}
    />
  </Box>
);

export default (props) => (
  <Box
    flex
    tag="header"
    direction="row"
    justify="between"
    background="light-1"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  >
    <Box width="small">
      <Button plain icon={<Menu color="dark-4" />} focusIndicator={false} />
    </Box>
    <ShareIcons />
  </Box>
);
