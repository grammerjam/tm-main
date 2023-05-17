import { useFieldArray, useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CreditCardFormData from "../CreditCardFormData";

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
  const [value, setValue] = useState(undefined);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreditCardFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (formData: CreditCardFormData) => {
    console.log(JSON.stringify(formData));
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
