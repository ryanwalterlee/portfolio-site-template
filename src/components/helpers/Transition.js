import Grow from "@mui/material/Grow";
import { useState } from "react";
import VizSensor from "react-visibility-sensor";

export default function Transition(props) {

  let [active, setActive] = useState(false);

  return (
    <VizSensor
      onChange={(isVisible) => {
        if (isVisible) {
          setActive(isVisible);
        }
      }}
      // partialVisibility='top'
      // offset={{top:10}}
      // minTopValue='200'
    >
      <Grow in={active}>
        {props.children}
      </Grow>
    </VizSensor>
  );
}