import React, { useState, useRef } from "react";
import "./Form.scss";
import Title from "../Title/Title";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { PullState } from "../PullState/PullState";
import { Dictionary } from "../PullState/Dictionary";

export default function Form() {
  
  const lang = PullState.useState((state) => state.lang);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formSchema = z.object({
    name: z.string().min(1, { message: Dictionary[lang]["name_is_required"] }),
    phone: z.string().optional(),
    email: z
      .string()
      .email({ message: Dictionary[lang]["please_check_if_your_email"] }),
    question: z
      .string()
      .min(10, { message: Dictionary[lang]["please_provide_question"] }),
    checkbox: z.boolean().refine((val) => val === true, {
      message: Dictionary[lang]["you_must_agree_to_the_privacy_policy"],
    }),
  });

  type FormValues = z.infer<typeof formSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
  });


  const handleCloseSubmittedMessage = () => {
    setIsSubmitted(false);
  };

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (data: FormValues) => {
    // e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "service_gkyuxkt",
          "template_xk593fv",
          form.current,
          "0BBekWC46Hftu0d4A"
        )
        .then(
          (result) => {
            setIsSubmitted(true);
            reset();
          },
          (error) => {}
        );
    }
  };

  return (
    <div className="form">
      <Title>{Dictionary[lang]["let_us_help_you"]}</Title>
      <p className="form__subtitle">
        {Dictionary[lang]["the_team_of_seasoned"]}
      </p>

      <form
        className="form__form"
        ref={form}
        onSubmit={handleSubmit(sendEmail)}
      >
        <label
          className={`form__label ${
            errors.name ? "label-error" : isValid ? "label-success" : ""
          }`}
        >
          <input
            className="form__input"
            placeholder={Dictionary[lang]["name"]}
            type="text"
            {...register("name")}
          />
          {errors.name && (
            <p className="message-error">{errors.name.message}</p>
          )}
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
            {...register("email")}
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
            {...register("question")}
          ></textarea>
          {errors.question && (
            <p className="message-error">{errors.question.message}</p>
          )}
        </label>

        <label className="form__checkbox">
          <input type="checkbox" {...register("checkbox")} />
          <span className="checkbox__label">
            {Dictionary[lang]["i_agree_to_the_privacy_policy"]}

            {errors.checkbox && (
              <p className="message-error checkbox__label-error">
                {errors.checkbox.message}
              </p>
            )}
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
