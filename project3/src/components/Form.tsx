import { useState } from "react";

import CreditCardFormData from "../CreditCardFormData";

const Form = () => {
  const [formData, setFormData] = useState({});

  const onSubmit = (formData: CreditCardFormData) => {
    console.log(JSON.stringify(formData));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        name="cardholderName"
        type="text"
        onChange={handleChange}
        required
      />
      <input name="cardNumber" type="number" onChange={handleChange} required />
      <input
        name="expirationMonth"
        type="number"
        onChange={handleChange}
        required
      />
      <input
        name="expirationYear"
        type="number"
        onChange={handleChange}
        required
      />
      <input name="cvc" type="number" onChange={handleChange} required />

      <input type="submit" />
    </form>
  );
};

export default Form;
