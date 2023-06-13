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
    <div className="text-sm text-darkViolet md:self-center tracking-widest w-11/12 md:w-8/12 justify-self-center">
      <form onSubmit={onSubmit} className="grid grid-cols-4 grid-rows-4 gap-4 md:gap-6">
        <div className=" col-span-4">
          <h2>CARDHOLDER NAME</h2>
          <input
            name="cardholderName"
            type="text"
            onChange={handleChange}
            value={formData.cardholderName}
            placeholder="e.g. Jane Appleseed"
            className={`border ${
              nameIsValid ? "border-lightGrayViolet" : "border-red"
            } placeholder:text-lightGrayViolet rounded w-full p-3 mt-1 md:placeholder:text-base`}
          />
          {nameIsValid ? (
            ""
          ) : (
            <p className="text-red text-xs tracking-normal mt-2">
              Name is required buddy
            </p>
          )}
        </div>
        <div className="col-span-4">
          <h2>CARD NUMBER</h2>
          <input
            name="cardNumber"
            type="text"
            onChange={handleChange}
            value={formData.cardNumber}
            placeholder="e.g. 1234 5678 9123 0000"
            className={`border ${
              cardIsValid ? "border-lightGrayViolet" : "border-red"
            }  placeholder:text-lightGrayViolet focus:border-gradient-a rounded w-full shadow-sm p-3 mt-1 md:placeholder:text-base`}
          />
          {cardIsValid ? (
            ""
          ) : (
            <p className="text-red text-xs tracking-normal mt-2">
              Wrong format, numbers only
            </p>
          )}
        </div>
          <div className="col-span-2">
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
                } placeholder:text-lightGrayViolet rounded w-20 shadow-sm p-2 md:placeholder:text-base`}
              />
              <input
                name="expirationYear"
                type="text"
                onChange={handleChange}
                value={formData.expirationYear}
                placeholder="YY"
                className={`border ${
                  yearIsValid ? "border-lightGrayViolet" : "border-red"
                } placeholder:text-lightGrayViolet rounded w-20 shadow-sm p-2 ml-2 md:placeholder:text-base`}
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
          <div className="col-span-2">
            <h2>CVC</h2>
            <input
              name="cvc"
              type="text"
              onChange={handleChange}
              value={formData.cvc}
              placeholder="e.g. 123"
              className={`border ${
                cvcIsValid ? "border-lightGrayViolet" : "border-red"
              } placeholder:text-lightGrayViolet rounded w-full shadow-sm p-2 mt-1 md:placeholder:text-base`}
            />
            {cvcIsValid ? (
              ""
            ) : (
              <p className="text-red text-xs tracking-normal mt-2">
                Can't be blank
              </p>
            )}
        </div>

        <input
          type="submit"
          value="Confirm"
          className="border rounded-md h-14 bg-darkViolet text-white text-lg w-full col-span-4"
        />
      </form>
    </div>
  );
};

export default Form;
