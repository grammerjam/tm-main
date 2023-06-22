import formReducer, { initialFormState, ACTIONS } from "./FormReducer";
import { createContext, useReducer, useContext } from "react";

export const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialFormState);

  const updateField = (e) => {
    // run validations on fields as they are being updated
    switch (e.target.name) {
      case "cardholderName":
        return checkName(e.target.value);
      case "cardNumber":
        return checkNumber(e.target.value);
      case "expirationMonth":
        return checkMonth(e.target.value);
      case "expirationYear":
        return checkYear(e.target.value);
      case "cvc":
        return checkCVC(e.target.value);
      default:
        return;
    }
  };

  const checkName = (name) => {
    console.log("CHECKING NAME: " + name);
    const checkedName = () => {
      /* name is empty */
      if (name === "") {
        dispatch({
          type: ACTIONS.UPDATE_NAME,
          payload: {
            data: name,
            isValid: false,
            errorMessage: "Can't be blank",
          },
        });
      }

      /* name is filled out but doesn't pass all validations */
      // if (name) {
      //   return { data: name, isValid: false, errorMessage: "Wrong Format, Must have a space, No numbers, etc." };
      // }

      /* name passes all validations */
      if (name) {
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
    //
    // run validations
    const checkedNumber = (number) => {
      // number is empty

      // number is not empty but doesn't pass tests

      // number passes all validations
      if (number) {
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

      // month is not empty but doesn't pass tests

      // month passes all validations
      if (month) {
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
    });
    // if(all fields are valid) {
    //   dispatch({
    //     type: ACTIONS.VALIDATE_FORM
    //   })
    // }
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
    checkName,
    submitForm,
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
