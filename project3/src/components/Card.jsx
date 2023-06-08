import cardBack from "/assets/bg-card-back.png";
import cardFront from "/assets/bg-card-front.png";

const Card = ({ formData }) => {
  return (
    <div className="text-white">
      <div className="obverse">
        <img src={cardFront} alt="card front" className="w-64 h-auto" />
        <div>{formData.cardNumber}</div>
        <div>{formData.cardholderName}</div>
        <div>{formData.expirationMonth}</div>
        <div>{formData.expirationYear}</div>
      </div>
      <div className="inverse">
        <img src={cardBack} alt="card back" className="w-64 h-auto" />
        <div>{formData.cvc}</div>
      </div>
    </div>
  );
};

export default Card;
