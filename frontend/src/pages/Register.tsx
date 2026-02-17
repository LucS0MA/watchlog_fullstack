import { useState } from "react";
import type { registerForm, registerPost } from "../types/Register.types";
import axios from "axios";
import { useNavigate } from "react-router";

const Register = () => {
  let navigate = useNavigate();
  const [form, setForm] = useState<registerForm>({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (form.password !== form.passwordConfirmation) {
        setError("Les mots de passe ne correspondent pas");
        return;
      }
      setError(null);
      console.log(form);
      const formData: registerPost = {
        username: form.username,
        email: form.email,
        password_hash: form.password,
      };
      console.log(formData);
      const response = await axios.post(
        "http://localhost:3000/users",
        formData,
      );
      console.log(response);
      setForm({
        ...form,
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
      });
      navigate("/login")
    } catch (err) {
      console.error("Failed to create the user", err);
    }
  };

  return (
    <div className="watch-container relative flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center px-40 py-10 bg-secondary min-w-2xs max-w-md relative"
      >
        <div className="flex flex-col gap-4 mb-6">
          <label htmlFor="email">Username</label>
          <input
            className="bg-white text-background px-2 py-1"
            type="username"
            name="username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            placeholder="janeDoe"
          ></input>
          <label htmlFor="email">E-mail</label>
          <input
            className="bg-white text-background px-2 py-1"
            type="email"
            name="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="janedoe@example.com"
          ></input>

          <label htmlFor="email">Password</label>
          <input
            className="bg-white text-background px-2 py-1"
            type="password"
            name="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            placeholder="●●●●●●●●"
          ></input>
          <label htmlFor="email">Confirm password</label>
          <input
            className="bg-white text-background px-2 py-1"
            type="password"
            name="passwordConfirmation"
            value={form.passwordConfirmation}
            onChange={(e) =>
              setForm({ ...form, passwordConfirmation: e.target.value })
            }
            placeholder="●●●●●●●●"
          ></input>
        </div>
        {error && (
          <p className="text-red-500 mt-2 absolute bottom-26">{error}</p>
        )}
        <button
          className="mt-8 text-background px-6 py-2 bg-foreground cursor-pointer hover:bg-background hover:text-white transition duration-150"
          role="submit"
        >
          register
        </button>
      </form>
    </div>
  );
};

export default Register;
