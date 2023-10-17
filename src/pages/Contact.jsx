import React from "react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import emailAdresses from "../assets/data/emailAdresses";
import "../styles/contact.css";

const Contact = () => {
  const [subject, setSubject] = useState("Choose subject");
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: "",
  });
  const subjects = [
    "Accident",
    "CarSharing",
    "Invoices",
    "Service comment",
    "Car damage",
    "Long-term rent",
    "Other",
  ];

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formElements = e.target.elements;
    for (const element of formElements) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        if (!element.value.trim()) {
          element.parentNode.classList.add('error');
        } else {
          element.parentNode.classList.remove('error');
        }
      }
    }
  };

  return (
    <div className="contact">
      <div className="contact-content-left">
        <h2>
          Please choose the topic you would like to get the information about
        </h2>
        <select onChange={(e) => setSubject(e.target.value)}>
          {subject === "Choose subject" ? (
            <option className={"default-option"}>{subject}</option>
          ) : null}
          {subjects.map((subj, index) => (
            <option key={index} value={subj}>
              {subj}
            </option>
          ))}
        </select>

        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFormData}
            />
          </label>
          <label>
            Phone
            <PhoneInput
            containerClass="phone-input-container"
              className="phone-input"
              inputClass="phone-input"
              country={"pl"}
              value={formData.phone}
              onChange={(value) => setFormData({ ...formData, phone: value })}
              inoputProps={{
                required: true,
              }}
            />
          </label>
          <label>
            Message
            <textarea
              type="message"
              name="message"
              value={formData.message}
              onChange={handleFormData}
            />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>

      <div className="contact-content-right">
        {emailAdresses.map((dep, idx) => (
          <div>
            <h3>{dep.department}</h3>
            <p>{dep.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
