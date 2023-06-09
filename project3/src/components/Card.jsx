import cardBack from "/assets/bg-card-back.png";
import cardFront from "/assets/bg-card-front.png";

const Card = ({ formData }) => {
  return (
    <div className="text-white w-full grid columns-1 grid-rows-6 pt-8 px-4">
      <div className="obverse z-10 col-start-1 row-start-3 row-end-7">
        <img src={cardFront} alt="card front" className="w-[280px] h-auto" />
        <div>{formData.cardNumber}</div>
        <div>{formData.cardholderName}</div>
        <div>{formData.expirationMonth}</div>
        <div>{formData.expirationYear}</div>
      </div>
      <div className="inverse col-start-1 row-start-1 row-end-4 justify-self-end">
        <img src={cardBack} alt="card back" className="w-[280px] h-auto" />
        <div>{formData.cvc}</div>
      </div>
    </div>
  );
};

export default Card;
