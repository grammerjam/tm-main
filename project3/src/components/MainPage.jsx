import { useState } from "react";

import Navbar from "./Navbar";
import Card from "./Card";
import Form from "./Form";
import Footer from "./Footer";

function MainPage() {
  const [formData, setFormData] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData));
  };

  const handleChange = (e) => {
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
        setFormData={setFormData}
      />
      <Footer />
    </>
  );
}

export default MainPage;
