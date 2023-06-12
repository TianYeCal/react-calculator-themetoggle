import { createContext, useContext, useState } from "react";

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [calc, setCalc] = useState("");
  const ops = ["+", "-", "/", "*", "."];
  const deleteNum = () => {
    setCalc(calc.slice(0, -1));
  };
  const showResult = () => {
    // eslint-disable-next-line no-eval
    setCalc(eval(calc).toString());
  };
  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
  };
  return (
    <AppContext.Provider
      value={{ calc, setCalc, updateCalc, deleteNum, showResult }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => useContext(AppContext);
