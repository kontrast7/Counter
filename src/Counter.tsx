import React, { ChangeEvent, useEffect, useReducer } from "react";
import s from "./Counter.module.css";
import { Table } from "./components/Table";
import { Button } from "./components/Button";
import {
  initialState,
  maxValueHandlerAC,
  numMaxAC,
  numMinAC,
  resetValueIncAC,
  setBtnAC,
  startValueHandlerAC,
  valueIncAC,
  ValueReducer,
} from "./reducers/valueReducer";

export const Counter = () => {
  const [value, dispatchValue] = useReducer(ValueReducer, initialState);

  const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatchValue(startValueHandlerAC(+e.currentTarget.value));
  };

  const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatchValue(maxValueHandlerAC(+e.currentTarget.value));
  };

  const setBtn = () => {
    dispatchValue(setBtnAC());
  };

  const valueInc = () => {
    dispatchValue(valueIncAC());
  };

  const resetValueInc = () => {
    dispatchValue(resetValueIncAC());
  };

  useEffect(() => {
    let maxLoc = localStorage.getItem("max");
    let minLoc = localStorage.getItem("start");
    if (minLoc != null) {
      let numMin = JSON.parse(minLoc);
      dispatchValue(numMinAC(numMin));
    }
    if (maxLoc != null) {
      let numMax = JSON.parse(maxLoc);
      dispatchValue(numMaxAC(numMax));
    }
  }, []);

  return (
    <>
      <div className={s.wrapper}>
        <span style={{ color: "white" }}>max Value</span>
        <input
          type={"number"}
          placeholder={"maxValue"}
          onChange={maxValueHandler}
          value={value.max}
        />
        <br />
        <span style={{ color: "white" }}>start Value</span>
        <input
          type={"number"}
          placeholder={"startValue"}
          onChange={startValueHandler}
          value={value.min}
        />
        <br />
        <Button
          callback={setBtn}
          nameButton={"set"}
          disable={value.isDisabledSet}
        />
      </div>
      <div className={s.wrapper}>
        <Table value={value.value} max={value.max} min={value.min} />
        <div className={s.buttons}>
          <Button
            callback={valueInc}
            nameButton={"inc"}
            disable={value.isDisabledBtn || value.max === value.value}
          />
          <Button
            callback={resetValueInc}
            nameButton={"reset"}
            disable={value.isDisabledBtn}
          />
        </div>
      </div>
    </>
  );
};
