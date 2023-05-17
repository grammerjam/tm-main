const Card = ({ formData }) => {
  return (
    <div className="text-4xl">
      Card
      <div>{formData.expirationMonth}</div>
    </div>
  );
};

export default Card;
