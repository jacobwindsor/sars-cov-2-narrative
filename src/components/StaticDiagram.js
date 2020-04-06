import svgPanZoom from "svg-pan-zoom";
import React, { useRef, useEffect, forwardRef } from "react";
import { ReactComponent as Diag } from "./WP4846_109857.svg";

export default (props) => {
  const diagram = useRef(null);

  useEffect(() => {
    svgPanZoom(diagram.current, {
      fit: true,
    });
  });

  const containerStyle = {
    overflow: "hidden",
    width: "100%",
    height: "100%",
  };

  return (
    <div style={containerStyle}>
      <Diag
        ref={diagram}
        style={{ position: "relative", width: "100%", height: "100%" }}
      />
    </div>
  );
};
