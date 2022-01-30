import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";

export default function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_id", "template_id", formRef.current, "user_id")
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          e.target.user_name.value = "";
          e.target.user_email.value = "";
          e.target.message.value = "";
          setTimeout(function () {
            setDone(false);
          }, 2000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/handshake.svg" alt="handshake" />
      </div>
      <div className="right">
        <h2>Kontakt</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="user_name" />
          <input type="mail" placeholder="Email" name="user_email" />
          <textarea placeholder="Nachricht" name="message"></textarea>
          <button type="submit">Senden</button>
          <span>
            {done &&
              "Besten Dank, ich werde mich schnellstmöglich bei ihnen melden."}
          </span>
        </form>
      </div>
    </div>
  );
}
