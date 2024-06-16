import { useState } from "react";
import { useAuth } from "../store/auth";

export const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [userData, setUserData] = useState(true);

  const { user } = useAuth();

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });

    setUserData(false);
  }
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading"> Contact Us </h1>
        </div>
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/images/support.png" alt="Available 24/7" />
          </div>
          <section className="contact-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username"> Username </label>
                <input
                  type="text"
                  name="username"
                  required
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="email"> Email </label>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="6"
                  required
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                ></textarea>
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </section>
        </div>

        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.853684552081!2d-74.07325922449651!3d40.8092089316597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f98d2dc94ddd%3A0x41e8d13cd9b43e7c!2sAmerican%20Dream!5e0!3m2!1sen!2sus!4v1717718823054!5m2!1sen!2sus"
            width="100%"
            height="450"
            // style="border:0;"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
};
