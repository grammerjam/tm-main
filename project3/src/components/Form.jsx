import {
  nameCheck,
  cardCheck,
  monthCheck,
  yearCheck,
  cvcCheck,
} from "../utils/validation";
import completedCheck from "/assets/icon-complete.svg";

const Form = ({
  formData,
  onSubmit,
  handleChange,
  nameIsValid,
  cardIsValid,
  monthIsValid,
  yearIsValid,
  cvcIsValid,
  formSubmitted,
  setFormSubmitted,
  formIsValid,
  resetForm,
}) => {
  const cardDateError = () => {
    if (!monthIsValid && !yearIsValid && formSubmitted) {
      return (
        <p className="text-red text-xs tracking-normal mt-2">Can't be blank</p>
      );
    } else {
      return "";
    }
  };

  return (
    <div className="text-sm text-darkViolet md:self-center tracking-widest w-11/12 md:w-8/12 justify-self-center">
      <form
        onSubmit={onSubmit}
        className={
          "grid grid-cols-4 gap-4 md:gap-6" +
          (formSubmitted ? "grid-rows-1" : "grid-rows-4")
        }
      >
        {!formSubmitted || !formIsValid ? (
          <>
            <div className="col-span-4">
              <h2>CARDHOLDER NAME</h2>
              <input
                name="cardholderName"
                type="text"
                onChange={handleChange}
                value={formData.cardholderName.data}
                placeholder="e.g. Jane Appleseed"
                maxLength="24"
                className={`border ${
                  !formData.cardholderName.isValid && formSubmitted
                    ? "border-red"
                    : "border-lightGrayViolet"
                } placeholder:text-lightGrayViolet rounded w-full p-3 mt-1 md:placeholder:text-base`}
              />
              {formSubmitted ? (
                <p className="text-red text-xs tracking-normal mt-2">
                  {formData.cardholderName.errorMessage}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="col-span-4">
              <h2>CARD NUMBER</h2>
              <input
                name="cardNumber"
                type="text"
                onChange={handleChange}
                value={formData.cardNumber.data}
                maxLength="16"
                placeholder="e.g. 1234 5678 9123 0000"
                className={`border ${
                  !formData.cardNumber.isValid && formSubmitted
                    ? "border-red"
                    : "border-lightGrayViolet"
                }  placeholder:text-lightGrayViolet focus:border-gradient-a rounded w-full shadow-sm p-3 mt-1 md:placeholder:text-base`}
              />
              {!cardIsValid && formSubmitted ? (
                <p className="text-red text-xs tracking-normal mt-2">
                  Wrong format, numbers only
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="col-span-2">
              <h2>Exp. Date (MM/YY)</h2>
              <div className="flex mt-1">
                <input
                  name="expirationMonth"
                  type="text"
                  onChange={handleChange}
                  value={formData.expirationMonth.data}
                  placeholder="MM"
                  maxLength="2"
                  className={`border ${
                    !formData.expirationMonth.isValid && formSubmitted
                      ? "border-red"
                      : "border-lightGrayViolet"
                  } placeholder:text-lightGrayViolet rounded w-20 shadow-sm p-2 md:placeholder:text-base`}
                />
                <input
                  name="expirationYear"
                  type="text"
                  onChange={handleChange}
                  value={formData.expirationYear.data}
                  placeholder="YY"
                  maxLength="2"
                  className={`border ${
                    !formData.expirationYear.isValid && formSubmitted
                      ? "border-red"
                      : "border-lightGrayViolet"
                  } placeholder:text-lightGrayViolet rounded w-20 shadow-sm p-2 ml-2 md:placeholder:text-base`}
                />
              </div>
              {cardDateError()}
            </div>
            <div className="col-span-2">
              <h2>CVC</h2>
              <input
                name="cvc"
                type="text"
                onChange={handleChange}
                value={formData.cvc.data}
                placeholder="e.g. 123"
                maxLength="3"
                className={`border ${
                  !formData.cvc.isValid && formSubmitted
                    ? "border-red"
                    : "border-lightGrayViolet"
                } placeholder:text-lightGrayViolet rounded w-full shadow-sm p-2 mt-1 md:placeholder:text-base`}
              />
              {!cvcIsValid && formSubmitted ? (
                <p className="text-red text-xs tracking-normal mt-2">
                  Can't be blank
                </p>
              ) : (
                ""
              )}
            </div>

            <input
              type="submit"
              value="Confirm"
              className="border rounded-md h-14 bg-darkViolet text-white text-lg w-full col-span-4"
            />
          </>
        ) : (
          <>
            <div className="col-span-4 text-center">
              <img
                className="block m-auto mb-8"
                src={completedCheck}
                alt="completed check"
              />
              <h1 className="text-3xl mb-4">THANK YOU!</h1>
              <p className="text-grayText mb-6">
                We've added your card details
              </p>
            </div>
            <input
              onClick={resetForm}
              type="submit"
              value="Continue"
              className="border rounded-md h-14 bg-darkViolet text-white text-lg w-full col-span-4"
            />
          </>
        )}
      </form>
    </div>
  );
};

export default Form;
