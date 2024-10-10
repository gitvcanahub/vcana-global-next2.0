import { createContext, useState } from "react";

export const CalculatorContext = createContext({
  finalPrice: 0,
  setFinalPrice: () => {},
  formValue: {},
  setFormValue: () => {},
});

const ContextProvider = (props) => {
  const [finalPrice, setFinalPrice] = useState(0);
  const [formValue, setFormValue] = useState(0);

  return (
    <CalculatorContext.Provider
      value={{ finalPrice, setFinalPrice, formValue, setFormValue }}
    >
      {props.children}
    </CalculatorContext.Provider>
  );
};

export default ContextProvider;
