import React from "react";
import s from "../Counter.module.css";

type propsType = {
  callback: () => void;
  nameButton: string;
  disable: boolean;
};

export const Button = (props: propsType) => {
  const onClickHandler = () => {
    props.callback();
  };

  return (
    <button className={s.btn} disabled={props.disable} onClick={onClickHandler}>
      {props.nameButton}
    </button>
  );
};
