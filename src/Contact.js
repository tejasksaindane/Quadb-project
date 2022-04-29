import React, { useState } from "react";
import "./styles/Contact.css";
const Contact = () => {
  const handle = () => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Phone", phone);
    localStorage.setItem("Email", mail);
    // localStorage.setItem("Subject", subject);
    // localStorage.setItem("message", message);
  };

  const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [gender, setGender] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="Contact">
      <div className="ContactBanner">
        <img
          src="https://www.thehindu.com/entertainment/reviews/as1p9p/article25800858.ece/alternates/LANDSCAPE_1200/KGF"
          alt=""
        />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div className="contact-address">
              <h1>Contact us</h1>
              <p>The Movie App </p>
              <p></p>
              <p>QuadB Tech, Chandigarh, Punjab, India</p>
              <p>Email: QuadBTech@gmail.com</p>
              <p>Phone: +9897198971</p>
            </div>
          </div>
          <div class="col-sm">{/*  <div class="responsive-map"></div>*/}</div>
        </div>
      </div>

      <div className="message">
        <h1>Drop us a Message</h1>
      </div>
      <div className="form">
        <div className="form-Name">
          <label>
            FullName <span>*</span>
          </label>
          <br />
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-Phone">
          <label>
            Phone<span>*</span>
          </label>
          <br />
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <div className="form">
        <div className="form-email">
          <label>
            Email<span>*</span>
          </label>
          <br />
          <input
            type="email"
            // name="name"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <div className="form-subject">
          <label>
            Subject<span></span>
          </label>
          <br />
          <input type="text" />
        </div>
      </div>
      <div className="typo">
        <label className="typo-label" htmlFor="leave us a message">
          Leave us a message
        </label>
        <input className="typo-input" type="text" />
        <button onClick={handle}>Submit</button>
      </div>
    </div>
  );
};

export default Contact;
