"use client";
import { useState, useEffect } from "react";
import GetData from "./components/GetData";

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://script.google.com/macros/s/AKfycbwo6vOPEdfcLiqUSD3RGnOkCzdP1-brsVy4_HFH3iFqpB9mbZN-SCJ0Sca8j5NRy-TC/exec', { // Replace with your Google Script URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone
      })
    });

    const result = await response.json();
    if (result.result === 'success') {
      alert('Form submitted successfully');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
    } else {
      alert('Form submission failed');
    }
  };

  return (
    <main className="min-h-screen w-full p-24">
      <GetData />
      {/* <h1>{cmsData['first part']?.['Title'] || 'כותרת מה שאתה רוצה'}</h1> */}
      <div className="p-4">
        {/* <p>{cmsData['first part']?.['Content'] || 'קצת תוכן'}</p> */}
        {/* <iframe
          src="https://www.youtube.com/embed/j440-D5JhjI"
          className="w-full h-full"
          allowFullScreen
        ></iframe> */}
        <form onSubmit={handleSubmit} className="grid gap-3 max-w-[300px] mx-auto">
          <input
            placeholder="שם פרטי"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            required
          />
          <input
            placeholder="שם משפחה"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            placeholder="מייל"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            placeholder="טלפון"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
}
