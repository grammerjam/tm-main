import formReducer, { initialFormState, ACTIONS } from "./FormReducer";
import {
  nameCheck,
  cardCheck,
  monthCheck,
  yearCheck,
  cvcCheck,
} from "./utils/validation";
import { createContext, useReducer, useContext } from "react";

export const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialFormState);

  const updateField = (e) => {
    // run validations on fields as they are being updated
    switch (e.target.name) {
      case "cardholderName":
        console.log("Choosing " + e.target.name);
        return checkName(e.target.value);
      case "cardNumber":
        console.log("Choosing " + e.target.name);
        return checkNumber(e.target.value);
      case "expirationMonth":
        console.log("Choosing " + e.target.name);
        return checkMonth(e.target.value);
      case "expirationYear":
        console.log("Choosing " + e.target.name);
        return checkYear(e.target.value);
      case "cvc":
        console.log("Choosing " + e.target.name);
        return checkCVC(e.target.value);
      default:
        return;
    }
  };

  const checkName = (name) => {
    console.log("CHECKING NAME: " + name);
    name = name.trimStart();
    const checkedName = () => {
      /* error if name is empty */
      if (name === "") {
        return {
          data: name,
          isValid: false,
          errorMessage: "Name is required buddy",
        };
      }

      /* name is filled out but doesn't pass all validations */
      /* We might need multiple checks - for now it's the old one */
      if (!nameCheck.test(name)) {
        return {
          data: name,
          isValid: false,
          errorMessage: "Wrong Format - no numbers allowed",
        };
      }

      /* name passes all validations */
      if (nameCheck.test(name)) {
        return { data: name, isValid: true, errorMessage: "" };
      }
    };

    dispatch({
      type: ACTIONS.UPDATE_NAME,
      payload: checkedName(name),
    });
  };

  const checkNumber = (number) => {
    // trim input and format with spaces
    console.log("CHECKING NUMBER: " + number);

    // strip spaces out of input - easier to enforce 16 digit limit
    number = number.trim();

    // run validations
    const checkedNumber = (number) => {
      // number is empty
      if (number === "") {
        return { data: number, isValid: false, errorMessage: "Can't be blank" };
      }

      // number is not empty but doesn't pass tests

      // we need separate tests for only numbers, length, and valid prefix
      if (!cardCheck.test(number)) {
        return {
          data: number,
          isValid: false,
          errorMessage: "Credit card numbers only",
        };
      }

      // number passes all validations
      if (cardCheck.test(number)) {
        return { data: number, isValid: true, errorMessage: "" };
      }
    };

    dispatch({
      type: ACTIONS.UPDATE_CARD_NUMBER,
      payload: checkedNumber(number),
    });
  };

  const checkMonth = (month) => {
    // clean input
    //
    // run validations
    const checkedMonth = (month) => {
      // month is empty
      if (month === "") {
        return {
          data: month,
          isValid: false,
          errorMessage: "Month can't be blank.",
        };
      }

      // month is not empty but doesn't pass tests
      if (!monthCheck.test(month)) {
        return {
          data: month,
          isValid: false,
          errorMessage: "Month must be two digits between 01 to 12.",
        };
      }

      // month passes all validations
      if (monthCheck.test(month)) {
        return { data: month, isValid: true, errorMessage: "" };
      }
    };

    dispatch({
      type: ACTIONS.UPDATE_MONTH,
      payload: checkedMonth(month),
    });
  };

  const checkYear = (year) => {
    // trim input and format with spaces
    //
    // run validations
    const checkedYear = (year) => {
      // year is empty

      // year is not empty but doesn't pass tests

      // year passes all validations
      if (year) {
        return { data: year, isValid: true, errorMessage: "" };
      }
    };

    dispatch({
      type: ACTIONS.UPDATE_YEAR,
      payload: checkedYear(year),
    });
  };

  const checkCVC = (cvc) => {
    // trim input and format with spaces
    //
    // run validations
    const checkedCVC = (cvc) => {
      // cvc is empty

      // cvc is not empty but doesn't pass tests

      // cvc passes all validations
      if (cvc) {
        return { data: cvc, isValid: true, errorMessage: "" };
      }
    };

    dispatch({
      type: ACTIONS.UPDATE_CVC,
      payload: checkedCVC(cvc),
    });
  };

  const submitForm = () => {
    dispatch({
      type: ACTIONS.SUBMIT_FORM,
      payload: null,
    });
    // if(all fields are valid) {
    //   dispatch({
    //     type: ACTIONS.VALIDATE_FORM
    //   })
    // }
  };

  const resetForm = () => {
    dispatch({
      type: ACTIONS.RESET_FORM,
      payload: null,
    });
  };

  const value = {
    cardholderName: state.cardholderName,
    cardNumber: state.cardNumber,
    expirationMonth: state.expirationMonth,
    expirationYear: state.expirationYear,
    cvc: state.cvc,
    formIsValid: state.formIsValid,
    formSubmitted: state.formSubmitted,
    updateField,
    submitForm,
    resetForm,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

const useForm = () => {
  const context = useContext(FormContext);

  if (context === undefined) {
    throw new Error("useForm must be within FormContext");
  }

  return context;
};

export default useForm;
