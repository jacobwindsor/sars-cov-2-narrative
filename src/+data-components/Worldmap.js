import React from "react";
import { WorldMap } from "grommet";

export default () => (
  <WorldMap
    color="neutral-1"
    continents={[
      {
        name: "Africa",
        color: "light-5",
        onClick: (name) => {},
      },
    ]}
    onSelectPlace={(lat, lon) => {}}
    places={[
      {
        name: "Sydney",
        location: [-33.8830555556, 151.216666667],
        color: "accent-2",
        onClick: (name) => {},
      },
    ]}
    selectColor="accent-2"
  />
);
