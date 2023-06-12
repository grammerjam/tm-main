import {
  nameCheck,
  cardCheck,
  monthCheck,
  yearCheck,
  cvcCheck,
} from "../utils/validation";

const Form = ({ formData, onSubmit, handleChange, nameError }) => {
  return (
    <div className="mt-12 text-sm tracking-widest">
      <form onSubmit={onSubmit} className="flex flex-col px-4 mx-auto">
        <div>
          <h2>CARDHOLDER NAME</h2>
          <input
            name="cardholderName"
            type="text"
            onChange={handleChange}
            required
            value={formData.cardholderName}
            placeholder="e.g. Jane Appleseed"
            pattern="^[a-zA-Z\s]+$"
            className="border border-lightGrayViolet placeholder:text-lightGrayViolet text-darkGrayViolet rounded w-full shadow-sm p-2 mt-1"
          />
        </div>
        <div className="mt-4">
          <h2>CARD NUMBER</h2>
          <input
            name="cardNumber"
            type="text"
            onChange={handleChange}
            value={formData.cardNumber}
            required
            placeholder="e.g. 1234 5678 9123 0000"
            pattern="^(1298|1267|4512|4567|8901|8933)([\-\s]?[0-9]{4}){3}$"
            className="border border-lightGrayViolet placeholder:text-lightGrayViolet rounded w-full shadow-sm p-3 mt-1 mb-2"
          />
        </div>
        <div className="flex mt-4">
          <div className="w-2/3">
            <h2>Exp. Date (MM/YY)</h2>
            <div className="flex mt-1">
              <input
                name="expirationMonth"
                type="text"
                onChange={handleChange}
                required
                value={formData.expirationMonth}
                placeholder="MM"
                pattern="^(0[1-9]|1[0-2])$"
                className="border border-lightGrayViolet placeholder:text-lightGrayViolet rounded w-20 mb-2 shadow-sm p-2"
              />
              <input
                name="expirationYear"
                type="text"
                onChange={handleChange}
                required
                value={formData.expirationYear}
                placeholder="YY"
                pattern="^[0-9]{2}$"
                className="border border-lightGrayViolet placeholder:text-lightGrayViolet rounded w-20 mb-2 shadow-sm p-2 ml-2"
              />
            </div>
          </div>
          <div>
            <h2>CVC</h2>
            <input
              name="cvc"
              type="text"
              onChange={handleChange}
              required
              value={formData.cvc}
              placeholder="e.g. 123"
              pattern="^\d{3}$"
              className="border border-lightGrayViolet placeholder:text-lightGrayViolet rounded w-full shadow-sm p-2 mt-1"
            />
          </div>
        </div>

        <input
          type="submit"
          value="Confirm"
          className="border rounded-md h-10 bg-darkViolet text-white w-full mt-6"
        />
      </form>
    </div>
  );
};

export default Form;
