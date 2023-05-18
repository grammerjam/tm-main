const Form = ({ formData, onSubmit, handleChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        name="cardholderName"
        type="text"
        onChange={handleChange}
        required
        value={formData.cardholderName}
        placeholder="e.g. Jane Appleseed"
      />
      <input
        name="cardNumber"
        type="text"
        onChange={handleChange}
        value={formData.cardNumber}
        required
        placeholder="e.g. 1234 5678 9123 0000"
      />
      <input
        name="expirationMonth"
        type="text"
        onChange={handleChange}
        required
        value={formData.expirationMonth}
        placeholder="MM"
      />
      <input
        name="expirationYear"
        type="text"
        onChange={handleChange}
        required
        value={formData.expirationYear}
        placeholder="YY"
      />
      <input
        name="cvc"
        type="text"
        onChange={handleChange}
        required
        value={formData.cvc}
        placeholder="e.g. 123"
      />

      <input type="submit" />
    </form>
  );
};

export default Form;
