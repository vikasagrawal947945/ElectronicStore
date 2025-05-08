import { useState } from "react";
import { useForm } from "react-hook-form";
import "./About.css";

function About() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const onSubmit = (formData) => {
    setData(JSON.stringify(formData)); // Show form data as JSON
  };

  return (
     <>
     <div className="Divform">
     <h1>Contact Us</h1>
    <form
      onSubmit={handleSubmit(onSubmit)}
      action="https://formsubmit.co/vikasagrawal947945@gmail.com"
      method="POST"
    >
      <input
        {...register("firstName", { required: "First name is required" })}
        placeholder="First name"
        required
      />

      <input
        type="email"
        {...register("email", { required: "Email is required" })}
        placeholder="Email"
        required
      />

      <textarea
        {...register("aboutYou")}
        placeholder="About you"
        required
      />

      <p>{data}</p>

      <button className="btn" type="submit">Submit</button>
    </form>
    </div>
    </>
  );
}

export default About;
