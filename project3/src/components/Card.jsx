import cardBack from "/assets/bg-card-back.png";
import cardFront from "/assets/bg-card-front.png";
import cardLogo from "/assets/card-logo.svg";

const Card = ({ formData }) => {
  const displayNumber =
    formData.cardNumber === "" ? "0000 0000 0000 0000" : formData.cardNumber;
  const displayName =
    formData.cardholderName === "" ? "Jane Appleseed" : formData.cardholderName;
  const displayMonth =
    formData.expirationMonth === "" ? "00" : formData.expirationMonth;
  const displayYear =
    formData.expirationYear === "" ? "00" : formData.expirationYear;
  const displayCode = formData.cvc === "" ? "000" : formData.cvc;

  const cardNumberSpacer = (cardNumber) => {
    const numArray = cardNumber.trim().replaceAll(" ", "").split("");
    let spacedCardNumber = [];
    for (let i = 0; i < numArray.length; i++) {
      if (i > 0 && i % 4 === 0) spacedCardNumber.push(" ");
      spacedCardNumber.push(numArray[i]);
    }
    console.log(spacedCardNumber);
    return spacedCardNumber.join("").trim();
  };

  return (
    <div className="text-white w-full grid grid-cols-1 grid-rows-6 pt-8 px-4">
      <div className="obverse z-10 col-start-1 row-start-3 row-end-7 grid grid-cols-1 w-72">
        <img
          src={cardFront}
          alt="card front"
          className="h-auto col-start-1 row-start-1"
        />
        <div className="col-start-1 row-start-1 flex flex-col">
          <div>
            <img src={cardLogo} alt="card logo" className="mt-4 ml-4 h-8" />
          </div>
          <div className="flex flex-col mt-8 mx-6">
            <div className="text-lg tracking-widest mb-3">
              {cardNumberSpacer(displayNumber)}
            </div>
            <div className="flex justify-between text-xs tracking-widest">
              <div>{displayName.toUpperCase()}</div>
              <div>
                {displayMonth}/{displayYear}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inverse col-start-1 row-start-1 row-end-4 justify-self-end grid grid-cols-1 w-72">
        <img
          src={cardBack}
          alt="card back"
          className="h-auto col-start-1 row-start-1"
        />
        <div className="col-start-1 row-start-1 pt-1 text-right mt-[4.15rem] mr-8">
          <div className="text-xs">{displayCode}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
