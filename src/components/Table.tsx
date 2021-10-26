import React from "react";
import s from "../Counter.module.css";

type propsType = {
  value: number | string;
  max: number;
  min: number;
};

export const Table = (props: propsType) => {
  return (
    <div className={props.value === props.max ? s.red : s.count}>
      {/*{props.min < props.max ? props.value : "error"}*/}
      {props.min > props.max || props.max < 0 || props.min < 0
        ? "Error"
        : props.value}
    </div>
  );
};
