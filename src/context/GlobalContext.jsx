import { createContext, useReducer } from "react";

// This is a way to create a namespace for the actions.
const SET_PROJECT = "@@formProfile/SET_PROJECT";
const SET_CSV = "@@formSocial/SET_CSV";

// This is a React Hook that creates a context object that is used to pass data down the component tree without having to pass props through each child.
export const GlobalContext = createContext();

// This is the initial state of the form.
const initialState = {
  projectName: "",
  projectDescription: "",
  client: "",
  contractor: "",
  csvData: [],
  minMaxValues: [],
  max_X: "",
  min_X: "",
  max_Y: "",
  min_Y: "",
  max_Z: "",
  min_Z: "",
};

/* The `GlobalContext.Provider` component is a React Context Provider component that provides the `GlobalContext`
object to its children. */
export const GlobalProvider = ({ children }) => {
  // This is the reducer function that is used to update the state of the form.
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case SET_PROJECT:
        return {
          ...state,
          projectName: payload.projectName,
          projectDescription: payload.projectDescription,
          client: payload.client,
          contractor: payload.contractor,
        };
      case SET_CSV:
        return {
          ...state,
          csvData: payload.csvData,
          minMaxValues: payload.minMaxValues,
          max_X: payload.max_X,
          min_X: payload.min_X,
          max_Y: payload.max_Y,
          min_Y: payload.min_Y,
          max_Z: payload.max_Z,
          min_Z: payload.min_Z,
        };
      default:
        return state;
    }
  };

  // This is a React Hook that creates a state object and a dispatch function that is used to update the state.
  const [state, dispatch] = useReducer(reducer, initialState);

  // This is a function that is used to update the state of the form.
  const setProject = (payload) => dispatch({ type: SET_PROJECT, payload });
  const setCsv = (payload) => dispatch({ type: SET_CSV, payload });

  return (
    <GlobalContext.Provider value={{ ...state, setProject, setCsv }}>
      {children}
    </GlobalContext.Provider>
  );
};
