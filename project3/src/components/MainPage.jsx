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
  cardholderName: {
    isValid: false,
    errorMessage: "",
    data: "",
  },
  cardNumber: {
    isValid: false,
    errorMessage: "",
    data: "",
  },
  expirationMonth: {
    isValid: false,
    errorMessage: "",
    data: "",
  },
  expirationYear: {
    isValid: false,
    errorMessage: "",
    data: "",
  },
  cvc: {
    isValid: false,
    errorMessage: "",
    data: "",
  },
};

function MainPage() {
  const [formData, setFormData] = useState(defaultFormData);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  console.log("formData", formData.cardholderName);
  const validateName = () => {
    let validName = formData.cardholderName.data;
    validName.trim();
    if (nameCheck.test(validName)) {
      setFormData({ ...formData, cardholderName: { isValid: true } });
      return true;
    }
    setFormData.cardholderName({
      isValid: false,
      errorMessage: "Name is required buddy",
    });
    return false;
  };

  // const validateCard = () => {
  //   let validCard = formData.cardNumber.trim();
  //   if (cardCheck.test(validCard)) {
  //     setCardIsValid({ ...cardIsValid, isValid: true });
  //     return true;
  //   }
  //   setCardIsValid({ isValid: false, errorMessage: "Can't be blank" });
  //   return false;
  // };

  // const validateMonth = () => {
  //   let validMonth = formData.expirationMonth.trim();
  //   if (monthCheck.test(validMonth)) {
  //     setMonthIsValid({ ...monthIsValid, isValid: true });
  //     return true;
  //   }
  //   setMonthIsValid({ isValid: false, errorMessage: "Can't be blank" });
  //   return false;
  // };

  // const validateYear = () => {
  //   let validYear = formData.expirationYear.trim();
  //   if (yearCheck.test(validYear)) {
  //     setYearIsValid({ ...yearIsValid, isValid: true });
  //     return true;
  //   }
  //   setYearIsValid({ isValid: false, errorMessage: "Can't be blank" });
  //   return false;
  // };

  // const validateCVC = () => {
  //   let validCvc = formData.cvc.trim();
  //   if (cvcCheck.test(validCvc)) {
  //     setCvcIsValid(true);
  //     return true;
  //   }
  //   setCvcIsValid(false);
  //   return false;
  // };

  const runTests = () => {
    validateName();
    // validateMonth();
    // validateYear();
    // validateCard();
    // validateCVC();
  };

  const handleChange = (e) => {
    setFormData((prevState) => {
      ...prevState,
      [e.target.name]: { ...[e.target.name], data: [e.target.value] },
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    runTests();
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFormData(defaultFormData);
    // setNameIsValid(false);
    // setCardIsValid(false);
    // setMonthIsValid(false);
    // setYearIsValid(false);
    // setCvcIsValid(false);
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
          // nameIsValid={nameIsValid}
          // cardIsValid={cardIsValid}
          // monthIsValid={monthIsValid}
          // yearIsValid={yearIsValid}
          // cvcIsValid={cvcIsValid}
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
