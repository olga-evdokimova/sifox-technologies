//@ts-nocheck
import React, { useState } from "react";
import "./Form.scss";
import Title from "../Title/Title";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  question: string;
  checkbox: boolean;
};
export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormValues>({
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
 
   const handleCloseSubmittedMessage = () => {
     setIsSubmitted(false);
   };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setIsSubmitted(true);
    reset();
    console.log("Форма отправлена!");
    console.log(data);
  };

  return (
    <div className="form">
      <Title>LET US HELP YOU</Title>
      <p className="form__subtitle">
        The team of seasoned professionals with extensive IT and telecom
        expertise
      </p>

      <form className="form__form" onSubmit={handleSubmit(onSubmit)}>
        <label
          className={`form__label ${
            errors.name ? "label-error" : isValid ? "label-success" : ""
          }`}
        >
          <input
            className="form__input"
            placeholder="Name"
            type="text"
            {...register("name", {
              pattern: {
                value: /.*/,
              },
            })}
        
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

        <label
          className={`form__label ${
            errors.email ? "label-error" : isValid ? "label-success" : ""
          }`}
        >
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
          {errors.email && (
            <p className="message-error">{errors.email.message}</p>
          )}
        </label>

        <label
          className={`form__label-textarea ${
            errors.question ? "label-error" : isValid ? "label-success" : ""
          }`}
        >
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
            <p className="message-error">{errors.question.message}</p>
          )}
        </label>

        <label className="form__checkbox">
          <input type="checkbox" required {...register("checkbox", { required: true })} />
          <span className="checkbox__label">I Agree to the Privacy Policy</span>
        </label>

        <button className="form__btn" type="submit">
          Submit
        </button>
      </form>
      {isSubmitted && (
        <div className="submitted-message">
          <p>
            The application has
            <br /> been sent successfully!
            <div
              className="submitted-message__close"
              onClick={handleCloseSubmittedMessage}
            >
              {" "}
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41 1L21 21M1 41L21 21M21 21L1 1L41 41"
                  stroke="#0A0714"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </p>
        </div>
      )}
    </div>
  );
}
