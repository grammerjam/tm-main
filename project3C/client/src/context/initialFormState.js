/**
 * form input object
 * @typedef {Object} FormInput
 * @property {string} data
 * @property {boolean} isValid
 * @property {string} errorMessage
 */

/**
 * Initial form state
 * @typedef {Object} InitialFormState
 * @property {FormInput} cardholderName
 * @property {FormInput} cardNumber
 * @property {FormInput} expirationMonth
 * @property {FormInput} expirationYear
 * @property {FormInput} cvc
 * @property {boolean} formSubmitted
 * @property {boolean} formIsValid
 * @property {string} cardType
 */

/**
 * @type {InitialFormState}
 */
export const initialFormState = {
  cardholderName: {
    isValid: false,
    errorMessage: "Name is required buddy!",
    data: "",
  },
  cardNumber: {
    isValid: false,
    errorMessage: "What's your credit card number?",
    data: "",
  },
  expirationMonth: {
    isValid: false,
    errorMessage: "Enter two digit month.",
    data: "",
  },
  expirationYear: {
    isValid: false,
    errorMessage: "Enter two digit year.",
    data: "",
  },
  cvc: {
    isValid: false,
    errorMessage: "Enter your cvc code.",
    data: "",
  },
  formSubmitted: false,
  formIsValid: false,
  cardType: "invalid",
};
