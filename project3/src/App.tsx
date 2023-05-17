import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Form from "./components/Form";
import Footer from "./components/Footer";
import React, { useState } from "react";
import CreditCardFormData from "./CreditCardFormData";

const defaultFormData: CreditCardFormData = {
  cardholderName: "",
  cardNumber: 0,
  expirationMonth: 0,
  expirationYear: 0,
  cvc: 0,
};

function App() {
  const [formData, setFormData] = useState(defaultFormData);

  const onSubmit = (
    e: React.FormEvent<HTMLInputElement>,
    formData: CreditCardFormData
  ) => {
    e.preventDefault();
    // debugger;
    console.log("SUBMIT!" + JSON.stringify(formData));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <Card formData={formData} />
      <Form
        formData={formData}
        onSubmit={onSubmit}
        handleChange={handleChange}
      />
      <Footer />
    </>
  );
}

export default App;
