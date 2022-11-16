import { forwardRef } from "react";
import TestDiv from "./components/TestDiv";

function SimpleRef(props, ref) {
  const onMouseDown = () => {
    props.setClicked(props.color);
  };

  return <TestDiv ref={props.clicked === props.color ? ref : null} color={props.color} onMouseDown={onMouseDown} />;
}

export default forwardRef(SimpleRef);
