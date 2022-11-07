import React from "react";
function Form() {
  return (
    <div>
      <form>
        <label htmlFor="email">To</label>
        <br />
        <input type="email" id="email" />
        <br />
        <label htmlFor="message">Message</label>
        <br />
        <textarea id="message"></textarea>
        <br />
        <button type="submit">Send!</button>
      </form>
    </div>
  );
}
export default Form;
