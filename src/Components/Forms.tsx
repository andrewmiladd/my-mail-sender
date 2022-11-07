import React  from "react";
import "./Forms.css";

function Form() {
  return (
    <div>
      <section></section>
      <div className="container">
        <form>
          <h1>Send Your Message</h1>

          <div className="item">
            <label style={{ fontSize: "30px" }}> To </label>
            <input type="email" placeholder="Enter a valid email" />
          </div>
          <label style={{ fontSize: "30px" }}>Your Message</label>
          <textarea
            cols={35}
            rows={10}
            placeholder="Enter Your Message"
          ></textarea>

          <button>Send Your Message</button>
        </form>
      </div>
    </div>
  );
}
export default Form;
