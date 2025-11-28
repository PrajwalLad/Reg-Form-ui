import React, { useState } from "react";
import { toast } from "react-toastify";

const RegistrationForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    class: "",
    guardian: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.class ||
      !form.guardian
    ) {
      toast.error("Please fill all the fields!");
      return;
    }

    if (form.phone.length !== 10) {
      toast.error("Contact number must be 10 digits!");
      return;
    }

    if (form.guardian.length !== 10) {
      toast.error("Guardian contact must be 10 digits!");
      return;
    }

    toast.success("Student registered successfully!");
  };

  return (
    <form
      className="flex flex-col rounded-sm mx-auto bg-stone-600 text-gray-300 px-3 py-3 gap-8 transition-all delay-75 hover:shadow-xl hover:border-gray-300 border-stone-600"
      onSubmit={handleRegister}
    >
      <h1 className="text-3xl text-center font-semibold">Sign up</h1>

      <div className="flex items-center justify-between gap-2 text-lg">
        <label htmlFor="name">Full name</label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          className="bg-gray-300 px-2 py-1 text-gray-800 rounded-sm focus:ring-cyan-700 ring ring-gray-300"
        />
      </div>

      <div className="flex items-center justify-between gap-2 text-lg">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="bg-gray-300 px-2 py-1 text-gray-800 rounded-sm focus:ring-cyan-700 ring ring-gray-300"
        />
      </div>

      <div className="flex items-center justify-between gap-2 text-lg">
        <label htmlFor="phone">Contact no.</label>
        <input
          id="phone"
          type="text"
          inputMode="numeric"
          pattern="\d*"
          maxLength={10}
          value={form.phone}
          onChange={(e) => {
            const val = e.target.value.replace(/\D/g, "");
            setForm({ ...form, phone: val });
          }}
          className="bg-gray-300 px-2 py-1 text-gray-800 rounded-sm focus:ring-cyan-700 ring ring-gray-300"
        />
      </div>

      <div className="flex items-center justify-between gap-2 text-lg">
        <label htmlFor="class">Class</label>
        <input
          id="class"
          type="number"
          max={12}
          min={1}
          value={form.class}
          onChange={handleChange}
          className="bg-gray-300 px-2 py-1 text-gray-800 rounded-sm focus:ring-cyan-700 ring ring-gray-300"
        />
      </div>

      <div className="flex items-center justify-between gap-2 text-lg">
        <label htmlFor="guardian">Guardian contact</label>
        <input
          id="guardian"
          type="text"
          inputMode="numeric"
          pattern="\d*"
          maxLength={10}
          value={form.guardian}
          onChange={(e) => {
            const val = e.target.value.replace(/\D/g, "");
            setForm({ ...form, guardian: val });
          }}
          className="bg-gray-300 px-2 py-1 text-gray-800 rounded-sm focus:ring-cyan-700 ring ring-gray-300"
        />
      </div>

      <button
        type="submit"
        className="bg-violet-900 cursor-pointer rounded-md text-lg px-1 py-1 hover:bg-violet-950"
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
