//@ts-nocheck
import React, { useState, useRef } from "react";
import "./Form.scss";
import Title from "../Title/Title";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { PullState } from "../PullState/PullState";
import { Dictionary } from "../PullState/Dictionary";
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
const lang = PullState.useState((state) => state.lang);
  const [isSubmitted, setIsSubmitted] = useState(false);
 
  const handleCloseSubmittedMessage = () => {
    setIsSubmitted(false);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gkyuxkt', 'template_xk593fv', form.current, '0BBekWC46Hftu0d4A')
      .then((result) => {
          setIsSubmitted(true);
          reset();
          // console.log(result.text);
      }, (error) => {
          // console.log(error.text);
      });
  };

  return (
    <div className="form">
      <Title>{Dictionary[lang]["let_us_help_you"]}</Title>
      <p className="form__subtitle">
        {Dictionary[lang]["the_team_of_seasoned"]}
      </p>

      <form className="form__form" ref={form} onSubmit={sendEmail}>
        <label
          className={`form__label ${
            errors.name ? "label-error" : isValid ? "label-success" : ""
          }`}
        >
          <input
            className="form__input"
            placeholder={Dictionary[lang]["name"]}
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
            placeholder={Dictionary[lang]["phone"]}
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
                message: Dictionary[lang]["please_check"],
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
                message: Dictionary[lang]["please_provide"],
              },
            })}
          ></textarea>
          {errors.question && (
            <p className="message-error">{errors.question.message}</p>
          )}
        </label>

        <label className="form__checkbox">
          <input
            type="checkbox"
            required
            {...register("checkbox", { required: true })}
          />
          <span className="checkbox__label">
            {Dictionary[lang]["i_agree_to_the_privacy_policy"]}
          </span>
        </label>

        <button className="form__btn" type="submit">
          {Dictionary[lang]["submit"]}
        </button>
      </form>
      {isSubmitted && (
        <div className="submitted-message">
          <p>
            {Dictionary[lang]["the_application_has"]}
            <br /> {Dictionary[lang]["been_sent_successfully"]}
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
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </p>
        </div>
      )}
    </div>
  );
}
