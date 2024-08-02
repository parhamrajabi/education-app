import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9a62d380-3d29-42cc-b5bd-411b5eaebd66");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send Us A Message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima saepe
          sed, iure similique reiciendis velit maxime cumque magni mollitia
          labore. Veniam minus optio expedita enim, repellat ex assumenda earum
          pariatur.
        </p>
        <ul>
          <li>
            {" "}
            <img src={mail_icon} alt="" /> Parhamrajabi7981@gmail.com
          </li>
          <li>
            {" "}
            <img src={phone_icon} alt="" /> 09380518158
          </li>
          <li>
            {" "}
            <img src={location_icon} alt="" />
            IRAN , TEHRAN
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onsubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label>Your Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Phone"
            required
          />
          <label>Write Your Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <button type="submit" className="btn , dark-btn">
            Submit Now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}
