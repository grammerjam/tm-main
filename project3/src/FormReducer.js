export const initialFormState = {
  cardholderName: {
    isValid: false,
    errorMessage: "",
    data: "",
  },
  cardNumber: {
    isValid: false,
    errorMessage: "",
    data: "",
  },
  expirationMonth: {
    isValid: false,
    errorMessage: "",
    data: "",
  },
  expirationYear: {
    isValid: false,
    errorMessage: "",
    data: "",
  },
  cvc: {
    isValid: false,
    errorMessage: "",
    data: "",
  },
  formSubmitted: false,
  formIsValid: false,
};

export const ACTIONS = {
  // UPDATE_FIELD: "update-field",
  UPDATE_NAME: "update-name",
  UPDATE_CARD_NUMBER: "update-card-number",
  UPDATE_MONTH: "update-card-number",
  UPDATE_YEAR: "update-card-number",
  UPDATE_CVC: "update-card-number",
  SUBMIT_FORM: "submit-form",
  VALIDATE_FORM: "validate-form",
  RESET_FORM: "reset-form",
};

const formReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.UPDATE_NAME:
      console.log("Update Name: " + payload);
      return {
        ...state,
        cardholderName: { ...payload },
      };
    case ACTIONS.UPDATE_CARD_NUMBER:
      console.log("Update Card Number: " + payload);
      return {
        ...state,
        cardNumber: { ...payload },
      };
    case ACTIONS.UPDATE_MONTH:
      console.log("Update Month: " + payload);
      return {
        ...state,
        expirationMonth: { ...payload },
      };
    case ACTIONS.UPDATE_YEAR:
      console.log("Update Year: " + payload);
      return {
        ...state,
        expirationYear: { ...payload },
      };
    case ACTIONS.UPDATE_CVC:
      console.log("Update CVC: " + payload);
      return {
        ...state,
        cvc: { ...payload },
      };
    case ACTIONS.SUBMIT_FORM:
      return {
        ...state,
        formSubmitted: true,
      };
    case ACTIONS.VALIDATE_FORM:
      return {
        ...state,
        formIsValid: true,
      };
    case ACTIONS.RESET_FORM:
      return initialFormState;
    default:
      throw new Error(`No case for type ${type} in form reducer`);
  }
};

export default formReducer;
