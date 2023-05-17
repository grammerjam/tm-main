import { useState } from "react";
import { useForm, useController, UseControllerProps } from "react-hook-form";
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

function Input(props: UseControllerProps<CreditCardFormData>) {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <input {...field} placeholder={props.name} />
      <p>{fieldState.isTouched && "Touched"}</p>
      <p>{fieldState.isDirty && "Dirty"}</p>
      <p>{fieldState.invalid ? "invalid" : "valid"}</p>
    </div>
  );
}

const Form = () => {
  const [value, setValue] = useState(undefined);

  const {
    control,
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
      {/* <input {...register("cardholderName")} /> */}
      <Input
        control={control}
        name="cardholderName"
        rules={{ required: true }}
      />

      <p>{errors.cardholderName?.message}</p>

      {/* <input {...register("cardNumber")} />
      <p>{errors.cardNumber?.message}</p>

      <input {...register("expirationMonth")} />
      <p>{errors.expirationMonth?.message}</p>

      <input {...register("expirationYear")} />
      <p>{errors.expirationYear?.message}</p>

      <input {...register("cvc")} />
      <p>{errors.cvc?.message}</p> */}

      <input type="submit" />
    </form>
  );
};

export default Form;
