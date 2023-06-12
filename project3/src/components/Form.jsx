import {
  nameCheck,
  cardCheck,
  monthCheck,
  yearCheck,
  cvcCheck,
} from "../utils/validation";

const Form = ({
  formData,
  onSubmit,
  handleChange,
  nameIsValid,
  cardIsValid,
  monthIsValid,
  yearIsValid,
  cvcIsValid,
}) => {
  return (
    <div className="mt-12 text-sm text-darkViolet md:self-center tracking-widest">
      <form onSubmit={onSubmit} className="flex flex-col px-4 mx-auto">
        <div>
          <h2>CARDHOLDER NAME</h2>
          <input
            name="cardholderName"
            type="text"
            onChange={handleChange}
            value={formData.cardholderName}
            placeholder="e.g. Jane Appleseed"
            className={`border ${
              nameIsValid ? "border-lightGrayViolet" : "border-red"
            } placeholder:text-lightGrayViolet rounded w-full md:w-80 shadow-sm p-2 mt-1`}
          />
          {nameIsValid ? (
            ""
          ) : (
            <p className="text-red text-xs tracking-normal mt-2">
              Name is required buddy
            </p>
          )}
        </div>
        <div className="mt-4">
          <h2>CARD NUMBER</h2>
          <input
            name="cardNumber"
            type="text"
            onChange={handleChange}
            value={formData.cardNumber}
            placeholder="e.g. 1234 5678 9123 0000"
            className={`border ${
              cardIsValid ? "border-lightGrayViolet" : "border-red"
            }  placeholder:text-lightGrayViolet rounded w-full md:w-80 shadow-sm p-3 mt-1`}
          />
          {cardIsValid ? (
            ""
          ) : (
            <p className="text-red text-xs tracking-normal mt-2">
              Wrong format, numbers only
            </p>
          )}
        </div>
        <div className="flex mt-4">
          <div className="w-2/3 md:w-1/4">
            <h2>Exp. Date (MM/YY)</h2>
            <div className="flex mt-1">
              <input
                name="expirationMonth"
                type="text"
                onChange={handleChange}
                value={formData.expirationMonth}
                placeholder="MM"
                className={`border ${
                  monthIsValid ? "border-lightGrayViolet" : "border-red"
                } placeholder:text-lightGrayViolet rounded w-20 shadow-sm p-2`}
              />
              <input
                name="expirationYear"
                type="text"
                onChange={handleChange}
                value={formData.expirationYear}
                placeholder="YY"
                className={`border ${
                  yearIsValid ? "border-lightGrayViolet" : "border-red"
                } placeholder:text-lightGrayViolet rounded w-20 shadow-sm p-2 ml-2`}
              />
            </div>
            {monthIsValid && yearIsValid ? (
              ""
            ) : (
              <p className="text-red text-xs tracking-normal mt-2">
                Can't be blank
              </p>
            )}
          </div>
          <div className="ml-6">
            <h2>CVC</h2>
            <input
              name="cvc"
              type="text"
              onChange={handleChange}
              value={formData.cvc}
              placeholder="e.g. 123"
              className={`border ${
                cvcIsValid ? "border-lightGrayViolet" : "border-red"
              } placeholder:text-lightGrayViolet rounded w-full md:w-32 shadow-sm p-2 mt-1`}
            />
            {cvcIsValid ? (
              ""
            ) : (
              <p className="text-red text-xs tracking-normal mt-2">
                Can't be blank
              </p>
            )}
          </div>
        </div>

        <input
          type="submit"
          value="Confirm"
          className="border rounded-md h-10 bg-darkViolet text-white w-full md:w-80 mt-6"
        />
      </form>
    </div>
  );
};

export default Form;
