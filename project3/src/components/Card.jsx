import useForm from "../FormContext";
import cardBack from "/assets/bg-card-back.png";
import cardFront from "/assets/bg-card-front.png";
import cardLogo from "/assets/card-logo.svg";

const Card = () => {
  const { cardholderName, cardNumber, expirationMonth, expirationYear, cvc } =
    useForm();
  // console.log(cardNumber, cardholderName, expirationMonth, expirationYear, cvc);
  const displayNumber =
    cardNumber.data === "" ? "0000 0000 0000 0000" : cardNumber.data;
  const displayName =
    cardholderName.data === "" ? "Jane Appleseed" : cardholderName.data;
  const displayMonth =
    expirationMonth.data === "" ? "00" : expirationMonth.data;
  const displayYear = expirationYear.data === "" ? "00" : expirationYear.data;
  const displayCode = cvc.data === "" ? "000" : cvc.data;

  return (
    <div className="text-white w-11/12 justify-self-center md:w-4/5 md:gap-10 md:self-center md:justify-self-end grid grid-cols-1 grid-rows-5 md:grid-cols-3 md:grid-rows-2 mt-8 md:mt-0">
      <div className="obverse z-10 col-start-1 row-start-3 md:row-start-1 md:row-end-2 row-end-6 grid grid-cols-1 w-72 md:w-[450px]">
        <img
          src={cardFront}
          alt="card front"
          className="h-auto col-start-1 row-start-1"
        />
        <div className="col-start-1 row-start-1 flex flex-col">
          <div>
            <img
              src={cardLogo}
              alt="card logo"
              className="mt-4 md:mt-6 ml-4 md:ml-6 h-8 md:h-12"
            />
          </div>
          <div className="flex flex-col mt-8 md:mt-16 mx-6">
            <div className="text-lg md:text-3xl tracking-widest text-center">
              {displayNumber}
            </div>
            <div className="flex justify-between text-xs md:text-sm tracking-widest md:tracking-[.2em] mt-3 md:mt-6">
              <div>{displayName.toUpperCase()}</div>
              <div>
                {displayMonth}/{displayYear}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inverse col-start-1 md:col-start-2 md:col-span-2 row-start-1 md:row-start-2 md:row-end-3 row-end-4 justify-self-end grid grid-cols-1 w-72 md:w-[450px]">
        <img
          src={cardBack}
          alt="card back"
          className="h-auto col-start-1 row-start-1"
        />
        <div className="col-start-1 row-start-1 pt-1 text-right mt-[4.15rem] md:mt-[6.6rem] mr-8 md:mr-14">
          <div className="text-xs md:text-sm md:tracking-[.2em]">
            {displayCode}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
