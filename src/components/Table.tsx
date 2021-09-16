import React from "react";
import s from "../Counter.module.css";

type propsType = {
  count: number;
};

export const Table = (props: propsType) => {
  return (
    <div className={props.count === 5 ? s.red : s.count}>{props.count}</div>
  );
};
