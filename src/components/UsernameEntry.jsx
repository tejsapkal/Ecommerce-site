import React, { useState } from "react";

export default function UserForm({ setUsername }) {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      alert("Please enter both name and email");
      return;
    }
    setUsername(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm text-center">
        <h2 className="text-3xl font-bold text-black mb-6">
          Enter Your Details
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border-b border-black focus:outline-none p-2 text-black text-lg placeholder-black/50 mb-4"/>

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border-b border-black focus:outline-none p-2 text-black text-lg placeholder-black/50 mb-6"/>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 text-lg font-medium rounded transition-colors" >
          Submit
        </button>
      </form>
    </div>
  );
}
