import {
  nameCheck,
  cardCheck,
  monthCheck,
  yearCheck,
  cvcCheck,
} from "../utils/validation";

const Form = ({ formData, onSubmit, handleChange }) => {
  return (
    <div className="container">
      <form onSubmit={onSubmit} className="form">
        <h2>CARDHOLDER NAME</h2>
        <input
          name="cardholderName"
          type="text"
          onChange={handleChange}
          required
          value={formData.cardholderName}
          placeholder="e.g. Jane Appleseed"
          pattern="^[a-zA-Z\s]+$"
          className="input"
        />
        <h2>CARD NUMBER</h2>
        <input
          name="cardNumber"
          type="text"
          onChange={handleChange}
          value={formData.cardNumber}
          required
          placeholder="e.g. 1234 5678 9123 0000"
          pattern="^(1298|1267|4512|4567|8901|8933)([\-\s]?[0-9]{4}){3}$"
          className="input"
        />
        <h2>Exp. Date (MM/YY)</h2>
        <input
          name="expirationMonth"
          type="text"
          onChange={handleChange}
          required
          value={formData.expirationMonth}
          placeholder="MM"
          pattern="^(0[1-9]|1[0-2])$"
          className="input"
        />
        <input
          name="expirationYear"
          type="text"
          onChange={handleChange}
          required
          value={formData.expirationYear}
          placeholder="YY"
          pattern="^[0-9]{2}$"
          className="input"
        />
        <h2>CVC</h2>
        <input
          name="cvc"
          type="text"
          onChange={handleChange}
          required
          value={formData.cvc}
          placeholder="e.g. 123"
          pattern="^\d{3}$"
          className="input"
        />

        <input type="submit" value="Confirm" className="btn bg-black" />
      </form>
    </div>
  );
};

export default Form;
