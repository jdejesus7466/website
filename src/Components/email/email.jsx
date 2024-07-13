import React from 'react';
import './email.css';

const Email = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "121a7dbb-217a-480e-b44f-10111922bd7e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
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
    <div className='contact-container'>
      <h1>Contact Me</h1>
      <div className='contact-content'>
        <div className='email-form'>
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type='text' name='name' placeholder='Enter your name' required />

            <label>Phone Number</label>
            <input type='text' name='phone' placeholder='Enter your phone number' required />

            <label>Message to Send</label>
            <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>

            <button type='submit' className='btn dark-btn'>Submit Form</button>
          </form>

          <span>{result}</span>
        </div>
        <div className='contact-info'>
          <h2>Contact Information</h2>
          <p>Email: example@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Example St, City, Country</p>
        </div>
      </div>
    </div>
  );
};

export default Email;
