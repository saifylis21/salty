import React, { useRef } from "react";

import classes from "./Modal.module.css";
import Aux from "../../../hoc/Aux/Aux";
import Backdrop from "../Backdrop/Backdrop";
import { CSSTransition } from "react-transition-group";

const Modal = (props) => {

  const nodeRef = useRef(null);

  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <CSSTransition
        in={props.show}
        timeout={250}
        unmountOnExit
        classNames={{
          enter: classes.fade_enter,
          enterActive: classes.fade_enter_active,
          exit: classes.fade_exit,
          exitActive: classes.fade_exit_active
        }}
        nodeRef={nodeRef}
      >
        <div className={classes.Modal}>{props.children}</div>
      </CSSTransition>
    </Aux>
  );
};

export default React.memo(Modal, (prevProps, nextProps) => {
  return nextProps.show === prevProps.show && nextProps.children === prevProps.children;
});
