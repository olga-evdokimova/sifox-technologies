import React, { useState } from "react";
import "./Form.scss";
import Title from "../Title/Title";
import Link from "next/link";

export default function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [privacyPolicyChecked, setPrivacyPolicyChecked] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Отправка данных на сервер или на почту
    // Здесь можно добавить логику для отправки данных

    // Сброс полей формы
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setPrivacyPolicyChecked(false);
  };

  const handlePrivacyPolicyChange = () => {
    setPrivacyPolicyChecked(!privacyPolicyChecked);
  };

  return (
    <div className="form">
      <Title>Get a consultation</Title>
      <p className="form__subtitle">
        The team of seasoned professionals with extensive IT and telecom
        expertise
      </p>

      <form onSubmit={handleSubmit} className="form__form">
        <label>
          <input
            className="form__input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Name"
          />
        </label>

        <label>
          <input
            className="form__input"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder="Phone"
          />
        </label>

        <label>
          <input
            className="form__input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="E-mail"
          />
        </label>

        <label>
          <textarea
            className="form__textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Comment"
          ></textarea>
        </label>

        <label className="form__checkbox">
          <input
            type="checkbox"
            checked={privacyPolicyChecked}
            onChange={handlePrivacyPolicyChange}
            required
          />
          privacy policy
        </label>

        <button className="form__btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}