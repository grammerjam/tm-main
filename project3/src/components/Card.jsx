import cardBack from "/assets/bg-card-back.png";
import cardFront from "/assets/bg-card-front.png";

const Card = ({ formData }) => {
  const displayNumber =
    formData.cardNumber === "" ? "0000000000000000" : formData.cardNumber;
  const displayName =
    formData.cardholderName === "" ? "Jane Appleseed" : formData.cardholderName;
  const displayMonth =
    formData.expirationMonth === "" ? "00" : formData.expirationMonth;
  const displayYear =
    formData.expirationYear === "" ? "00" : formData.expirationYear;
  const displayCode = formData.cvc === "" ? "000" : formData.cvc;

  return (
    <div className="text-white w-full grid columns-1 grid-rows-6 pt-8 px-4">
      <div className="obverse z-10 col-start-1 row-start-3 row-end-7 grid columns-1">
        <img
          src={cardFront}
          alt="card front"
          className="w-[280px] h-auto col-start-1 row-start-1"
        />
        <div className="col-start-1 row-start-1">
          <div>{displayNumber}</div>
          <div>{displayName}</div>
          <div>{displayMonth}</div>
          <div>{displayYear}</div>
        </div>
      </div>
      <div className="inverse col-start-1 row-start-1 row-end-4 justify-self-end grid columns-1">
        <img
          src={cardBack}
          alt="card back"
          className="w-[280px] h-auto col-start-1 row-start-1"
        />
        <div className="col-start-1 row-start-1 mt-16 text-right mr-8">
          <div>{displayCode}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
