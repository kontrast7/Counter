import React, { ChangeEvent, useEffect } from "react";
import s from "./Counter.module.css";
import { Table } from "./components/Table";
import { Button } from "./components/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "./BLL/store";
import {
  initialStateType,
  maxValueHandlerAC,
  numMaxAC,
  numMinAC,
  resetValueIncAC,
  setBtnAC,
  startValueHandlerAC,
  valueIncAC,
} from "./BLL/counterReducer";

export const CounterRedux = () => {
  const value = useSelector<AppStateType, initialStateType>(
    (state) => state.counter
  );

  const dispatch = useDispatch();

  const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(startValueHandlerAC(+e.currentTarget.value));
  };
  const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(maxValueHandlerAC(+e.currentTarget.value));
  };
  const setBtn = () => {
    dispatch(setBtnAC());
  };
  const valueInc = () => {
    dispatch(valueIncAC());
  };
  const resetValueInc = () => {
    dispatch(resetValueIncAC());
  };

  useEffect(() => {
    let maxLoc = localStorage.getItem("max");
    let minLoc = localStorage.getItem("start");
    if (minLoc != null) {
      let numMin = JSON.parse(minLoc);
      dispatch(numMinAC(numMin));
    }
    if (maxLoc != null) {
      let numMax = JSON.parse(maxLoc);
      dispatch(numMaxAC(numMax));
    }
  }, []);

  return (
    <>
      <div className={s.wrapper}>
        <span style={{ color: "white" }}>max Value</span>
        <input
          className={s.inp}
          type={"number"}
          placeholder={"Max value"}
          onChange={maxValueHandler}
          value={value.max}
        />
        <br />
        <span style={{ color: "white" }}>start Value</span>
        <input
          className={s.inp}
          type={"number"}
          placeholder={"Start value"}
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
            disable={value.isDisabledBtn || value.value === value.max}
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

/*    const [value, dispatchValue] = useReducer(ValueReducer, initialState);
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
  }, []);*/
