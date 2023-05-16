import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface CreditCardFormData {
  cardholderName: string;
  cardNumber: number;
  expirationMonth: number;
  expirationYear: number;
  cvc: number;
}

const schema = yup
  .object({
    cardholderName: yup.string().required(),
    cardNumber: yup.number().positive().integer().required(),
    expirationMonth: yup.number().positive().integer().required(),
    expirationYear: yup.number().positive().integer().required(),
    cvc: yup.number().positive().integer().required(),
  })
  .required();

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreditCardFormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={onSubmit}>
      <input {...register("cardholderName")} />
      <p>{errors.cardholderName?.message}</p>

      <input {...register("cardNumber")} />
      <p>{errors.cardNumber?.message}</p>

      <input {...register("expirationMonth")} />
      <p>{errors.expirationMonth?.message}</p>

      <input {...register("expirationYear")} />
      <p>{errors.expirationYear?.message}</p>

      <input {...register("cvc")} />
      <p>{errors.cvc?.message}</p>

      <input type="submit" />
    </form>
  );
};

export default Form;
