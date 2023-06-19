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
import { useState, useEffect } from "react";

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
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    console.log("test");

    if (runTests()) {
      setFormIsValid(true);
    }
  }, [formSubmitted]);

  const validateName = () => {
    return nameCheck.test(formData.cardholderName.trim());
    // let validName = formData.cardholderName.trim();
    // if (nameCheck.test(validName)) {
    //   setNameIsValid(true);
    // }
  };

  const validateCard = () => {
    // return cardCheck.test(formData.cardNumber.trim());
    let validCard = formData.cardNumber.trim();
    if (cardCheck.test(validCard)) {
      setCardIsValid(true);
      return true;
    }
    setCardIsValid(false);
    return false;
  };

  // if (
  //   validateName() &&
  //   validateCard() &&
  //   monthIsValid &&
  //   yearIsValid &&
  //   cvcIsValid &&
  //   formSubmitted
  // ) {
  //   setFormIsValid(true);
  // }

  const validateMonth = () => {
    return monthCheck.test(formData.expirationMonth);
    // setMonthIsValid(false);
    // if (monthCheck.test(formData.expirationMonth)) {
    //   setMonthIsValid(true);
    // }
  };

  const validateYear = () => {
    return yearCheck.test(formData.expirationYear);
    // setYearIsValid(false);
    // if (yearCheck.test(formData.expirationYear)) {
    //   setYearIsValid(true);
    // }
  };

  const validateCVC = () => {
    return cvcCheck.test(formData.cvc);
    // setCvcIsValid(false);
    // if (cvcCheck.test(formData.cvc)) {
    //   setCvcIsValid(true);
    // }
  };

  const runTests = () => {
    if (
      validateName() &&
      validateMonth() &&
      validateYear() &&
      validateCard() &&
      validateCVC()
    ) {
      return true;
    }
    return false;
  };
  console.log("run test", runTests());

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
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
          formIsValid={formIsValid}
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
