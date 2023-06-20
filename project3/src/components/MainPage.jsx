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
  const [nameIsValid, setNameIsValid] = useState(false);
  const [cardIsValid, setCardIsValid] = useState(false);
  const [monthIsValid, setMonthIsValid] = useState(false);
  const [yearIsValid, setYearIsValid] = useState(false);
  const [cvcIsValid, setCvcIsValid] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const validateName = () => {
    let validName = formData.cardholderName.trim();
    if (nameCheck.test(validName)) {
      setNameIsValid(true);
      return true;
    }
    setNameIsValid(false);
    return false;
  };

  const validateCard = () => {
    let validCard = formData.cardNumber.trim();
    if (cardCheck.test(validCard)) {
      setCardIsValid(true);
      return true;
    }
    setCardIsValid(false);
    return false;
  };

  const validateMonth = () => {
    setMonthIsValid(false);
    if (monthCheck.test(formData.expirationMonth)) {
      setMonthIsValid(true);
      return true;
    }
    setMonthIsValid(false);
    return false;
  };

  const validateYear = () => {
    setYearIsValid(false);
    if (yearCheck.test(formData.expirationYear)) {
      setYearIsValid(true);
      return true;
    }
    setYearIsValid(false);
    return false;
  };

  const validateCVC = () => {
    setCvcIsValid(false);
    if (cvcCheck.test(formData.cvc)) {
      setCvcIsValid(true);
      return true;
    }
    setCvcIsValid(false);
    return false;
  };

  const runTests = () => {
    if (
      validateName() &&
      validateMonth() &&
      validateYear() &&
      validateCard() &&
      validateCVC()
    ) {
      setFormIsValid(true);
      return true;
    }
    return false;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    runTests();
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFormData(defaultFormData);
    setNameIsValid(false);
    setCardIsValid(false);
    setMonthIsValid(false);
    setYearIsValid(false);
    setCvcIsValid(false);
    setFormSubmitted(false);
    setFormIsValid(false);
  };

  return (
    <div className="w-[375px] md:w-[1440px] mx-auto">
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 md:h-[900px] bg-mobile md:bg-desktop bg-no-repeat">
        <Card formData={formData} />
        <Form
          formData={formData}
          nameIsValid={nameIsValid}
          cardIsValid={cardIsValid}
          monthIsValid={monthIsValid}
          yearIsValid={yearIsValid}
          cvcIsValid={cvcIsValid}
          formSubmitted={formSubmitted}
          setFormSubmitted={setFormSubmitted}
          formIsValid={formIsValid}
          onSubmit={onSubmit}
          handleChange={handleChange}
          setFormData={setFormData}
          resetForm={resetForm}
        />
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
