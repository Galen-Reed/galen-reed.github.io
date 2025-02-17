import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_4ydrvko", 
      "template_r084ylh",
      {
        user_name: formData.name,
        user_email: formData.email,
        message: formData.message,
      },
      "JU-47V1sduDDIOAtd"
    )
    .then(() => setStatus("Email sent successfully!"))
    .catch(() => setStatus("Failed to send email. Please try again."));
  };

  return (
    <div>
      <h1>Contact Us</h1>
      {status && <p>{status}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
}

export default Contact;
