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
      {props.max < props.min
        ? "Min > Max"
        : props.min < 0 || props.max < 0
        ? "Минус нельзя!"
        : props.value}
    </div>
  );
};

