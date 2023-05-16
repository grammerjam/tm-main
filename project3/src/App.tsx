import { useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Form from "./components/Form";
import Footer from "./components/Footer";

interface ICardData {
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}

function App() {
  const [cardData, setCardData] = useState({});

  const handleChange = (newCardData: ICardData) => {
    setCardData({ ...newCardData });
  };

  console.log(cardData);

  return (
    <>
      <Navbar />
      <Card cardData={cardData} />
      <Form cardData={cardData} handleChange={handleChange} />
      <Footer />
    </>
  );
}

export default App;
