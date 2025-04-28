"use client";

import { useForm } from "@formspree/react";
import { Loader } from "lucide-react";

const Concert: React.FC = () => {
  

  const [state, handleSubmit] = useForm("xpwdwvrb");

  return (
    <div>
      <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 bg-white rounded-lg shadow-md"
    >
      <input
        type="text"
        name="fullName"
        placeholder="Full name"
        required
        className="w-full border p-2 rounded"
      />
      <input
        type="text"
        name="fullAddress"
        placeholder="Full address"
        required
        className="w-full border p-2 rounded"
      />
      <input
        type="tel"
        name="phoneNumber"
        placeholder="Phone number"
        required
        className="w-full border p-2 rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail address"
        required
        className="w-full border p-2 rounded"
      />
      <button
      style={{
        display: "flex",
        justifyContent: "center",
      }}
        type="submit"
        className="w-full bg-[#040725] black-button text-white py-2 rounded font-[inter-bold]"
      >
        {state.submitting ? <Loader /> : "Submit"}
      </button>
    </form>
      {state.succeeded && (
        <p className="text-green-500 mt-4">
          Thank you for your registration! We will get back to you soon.
        </p>
      )}
      {state.errors && (
        <p className="text-red-500 mt-4">
          There was an error submitting the form. Please try again.
        </p>
      )}
    </div>
  );
};

export default Concert;
