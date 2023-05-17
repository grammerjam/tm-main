import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { useState } from "react";
import CreditCardFormData from "./CreditCardFormData";

function App() {
  const [formData, setFormData] = useState({});

  const onSubmit = (formData: CreditCardFormData) => {
    console.log(JSON.stringify(formData));
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
