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
  const [nameIsValid, setNameIsValid] = useState(true);
  const [cardIsValid, setCardIsValid] = useState(true);
  const [monthIsValid, setMonthIsValid] = useState(true);
  const [yearIsValid, setYearIsValid] = useState(true);
  const [cvcIsValid, setCvcIsValid] = useState(true);

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
    if (nameCheck.test(formData.cardholderName)) {
      return setNameIsValid(true);
    }
    return setNameIsValid(false);
  };

  const validateCard = () => {
    if (cardCheck.test(formData.cardNumber)) {
      return setCardIsValid(true);
    }
    return setCardIsValid(false);
  };

  const validateMonth = () => {
    if (monthCheck.test(formData.expirationMonth)) {
      return setMonthIsValid(true);
    }
    return setMonthIsValid(false);
  };

  const validateYear = () => {
    if (yearCheck.test(formData.expirationYear)) {
      return setYearIsValid(true);
    }
    return setYearIsValid(false);
  };

  const validateCVC = () => {
    if (cvcCheck.test(formData.cvc)) {
      return setCvcIsValid(true);
    }
    return setCvcIsValid(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-[375px] md:w-[1440px] mx-auto">
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-2 md:h-[900px] bg-mobile md:bg-desktop bg-no-repeat">
        <Card formData={formData} />
        <Form
          formData={formData}
          nameIsValid={nameIsValid}
          cardIsValid={cardIsValid}
          monthIsValid={monthIsValid}
          yearIsValid={yearIsValid}
          cvcIsValid={cvcIsValid}
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
