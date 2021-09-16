import React, { useState } from "react";
import s from "./Counter.module.css";
import { Table } from "./components/Table";
import { Button } from "./components/Button";

export const Counter = () => {
  let [count, setCount] = useState<number>(0);

  const countInc = () => (count >= 5 ? setCount(count) : setCount(++count));
  const resetInc = () => setCount(0);

  return (
    <div className={s.wrapper}>
      <Table count={count} />
      <div className={s.buttons}>
        <Button callback={countInc} nameButton={"inc"} disable={count === 5} />
        <Button callback={resetInc} nameButton={"reset"} disable={count < 5} />
      </div>
    </div>
  );
};
