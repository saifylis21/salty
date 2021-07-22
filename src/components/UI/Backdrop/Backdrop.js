import React from "react";
import { CSSTransition } from "react-transition-group";

import classes from "./Backdrop.module.css";

const backdrop = (props) => {

  const nodeRef = React.createRef(null);

  return (
    <>
      <CSSTransition
        in={props.show}
        timeout={200}
        unmountOnExit
        classNames={{
          enter: classes.fade_enter,
          enterActive: classes.fade_enter_active,
          exit: classes.fade_exit,
          exitActive: classes.fade_exit_active,
        }}
        nodeRef={nodeRef}
      >
        <div className={classes.Backdrop} onClick={props.clicked} ref={nodeRef}></div>
      </CSSTransition>
    </>
  );
};

export default backdrop;
