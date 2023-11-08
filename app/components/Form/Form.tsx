//@ts-nocheck
import React, { useState } from "react";
import "./Form.scss";
import Title from "../Title/Title";
import { useForm } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};
export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const onSubmit = (data) => {
    console.log("Форма отправлена!");
    console.log(data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="form">
      <Title>Get a consultation</Title>
      <p className="form__subtitle">
        The team of seasoned professionals with extensive IT and telecom
        expertise
      </p>

      <form className="form__form" onSubmit={handleSubmit(onSubmit)}>
        <label className="form__label">
          <input
            className="form__input"
            placeholder="Name"
            type="text"
            {...register("name")}
          />
        </label>

        <label className="form__label">
          <input
            className="form__input"
            placeholder="Phone"
            type="text"
            {...register("phone")}
          />
        </label>

        <label className="form__label">
          <input
            className="form__input"
            placeholder="E-mail"
            type="text"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Please check if your e-mail is correct",
              },
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </label>

        <label className="form__label-textarea">
          <textarea
            className="form__textarea"
            placeholder="Question"
            {...register("question", {
              required: true,
              pattern: {
                value: /.{10,}/,
                message: "Please provide a bit more detail in your question",
              },
            })}
          ></textarea>
          {errors.question && (
            <p className="error">{errors.question.message}</p>
          )}
        </label>

        <label className="form__checkbox">
          <input type="checkbox" required {...register("checkbox")} />
          <span className="checkbox__label">Privacy Policy</span>
        </label>

        <button className="form__btn" type="submit">
          Submit
        </button>
        {isSubmitted && (
          <p className="form__notification">Form submitted successfully!</p>
        )}
      </form>
    </div>
  );
}
