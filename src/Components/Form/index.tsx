import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  fullName: yup.string().required("Coloque Nombre y Apellido."),
  email: yup.string().required("Coloque un email."),
  phone: yup.string().required("Coloque un numero de celular."),
  message: yup.string().required("Tienes que escribir algo."),
});

type FormData = yup.InferType<typeof schema>;

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = React.useState("");

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com/api/send-email",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Nombre y Apellido" {...register("fullName")} />
      <p className="parrafo">{errors.fullName?.message}</p>
      <input placeholder="Email" {...register("email")} />
      <p className="parrafo">{errors.email?.message}</p>
      <input placeholder="Telefono" {...register("phone")} />
      <p className="parrafo">{errors.phone?.message}</p>
      <textarea placeholder="Mensaje" {...register("message")} />
      <p className="parrafo">{errors.message?.message}</p>
      {loading ? <p>Loading...</p> : null}
      {error ? <p>{error}</p> : null}
      <input type="submit" />
    </form>
  );
}
