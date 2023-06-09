import {
  nameCheck,
  cardCheck,
  monthCheck,
  yearCheck,
  cvcCheck,
} from "../utils/validation";
import Card from "./Card";
import Footer from "./Footer";
import Form from "./Form";
import Navbar from "./Navbar";
import { useState } from "react";

const defaultFormData = {
  cardholderName: "",
  cardNumber: "",
  expirationMonth: "",
  expirationYear: "",
  cvc: "",
};

function MainPage() {
  const [formData, setFormData] = useState(defaultFormData);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData));
    console.log("name", validateName());
    console.log("month", validateMonth());
    console.log("year", validateYear());
    console.log("card", validateCard());
    console.log("cvc", validateCVC());
  };

  const validateName = () => {
    return nameCheck.test(formData.cardholderName);
  };

  const validateCard = () => {
    return cardCheck.test(formData.cardNumber);
  };

  const validateMonth = () => {
    return monthCheck.test(formData.expirationMonth);
  };

  const validateYear = () => {
    return yearCheck.test(formData.expirationYear);
  };

  const validateCVC = () => {
    return cvcCheck.test(formData.cvc);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-[375px] mx-auto">
      <Navbar />

      <div className="bg-mobile bg-no-repeat">
        <Card formData={formData} />
        <Form
          formData={formData}
          onSubmit={onSubmit}
          handleChange={handleChange}
          setFormData={setFormData}
        />
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
