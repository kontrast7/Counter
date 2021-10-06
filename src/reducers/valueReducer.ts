export type initialStateType = {
  value: number | string;
  max: number;
  min: number;
  isDisabledSet: boolean;
  isDisabledBtn: boolean;
};
export let initialState = {
  value: "0",
  max: 5,
  min: 0,
  isDisabledSet: false,
  isDisabledBtn: true,
};

export const ValueReducer = (
  state: initialStateType = initialState,
  action: allType
): initialStateType => {
  switch (action.type) {
    case "START_VALUE_HANDLER": {
      return {
        ...state,
        value: "Введите данные и нажмите set",
        min: action.e,
        isDisabledBtn: true,
        isDisabledSet: false,
      };
    }
    case "MAX_VALUE_HANDLER": {
      return {
        ...state,
        value: "Введите данные и нажмите set",
        max: action.e,
        isDisabledBtn: true,
        isDisabledSet: false,
      };
    }
    case "SET_BTN": {
      localStorage.setItem("start", JSON.stringify(state.min));
      localStorage.setItem("max", JSON.stringify(state.max));
      return {
        ...state,
        value: state.min,
        isDisabledBtn: false,
        isDisabledSet: true,
      };
    }
    case "RESET_VALUE_INC": {
      return { ...state, value: state.min };
    }
    case "VALUE_INC": {
      if (typeof state.value === "number" && state.value < state.max) {
        return { ...state, value: state.value + 1 };
      }else return state
    }
    case "NUM_MAX": {
      return {
        ...state,
        max: action.n,
      };
    }
    case "NUM_START": {
      return {
        ...state,
        value: action.n,
        min: action.n,
      };
    }
    default:
      return state;
  }
};

export type allType =
  | startValueHandlerACType
  | maxValueHandlerACType
  | setBtnACType
  | resetValueIncACType
  | valueIncACType
  | numMaxACType
  | numMinACType;

type startValueHandlerACType = ReturnType<typeof startValueHandlerAC>;
type maxValueHandlerACType = ReturnType<typeof maxValueHandlerAC>;
type setBtnACType = ReturnType<typeof setBtnAC>;
type resetValueIncACType = ReturnType<typeof resetValueIncAC>;
type valueIncACType = ReturnType<typeof valueIncAC>;
type numMaxACType = ReturnType<typeof numMaxAC>;
type numMinACType = ReturnType<typeof numMinAC>;

export const startValueHandlerAC = (e: number) => {
  return {
    type: "START_VALUE_HANDLER",
    e,
  } as const;
};
export const maxValueHandlerAC = (e: number) => {
  return {
    type: "MAX_VALUE_HANDLER",
    e,
  } as const;
};
export const setBtnAC = () => {
  return {
    type: "SET_BTN",
  } as const;
};
export const resetValueIncAC = () => {
  return {
    type: "RESET_VALUE_INC",
  } as const;
};
export const valueIncAC = () => {
  return {
    type: "VALUE_INC",
  } as const;
};
export const numMaxAC = (n: number) => {
  return {
    type: "NUM_MAX",
    n,
  } as const;
};
export const numMinAC = (n: number) => {
  return {
    type: "NUM_START",
    n,
  } as const;
};
