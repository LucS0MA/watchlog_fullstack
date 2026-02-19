import { useState } from "react";
import type { loginForm } from "../types/FormLogin.types";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const {authenticate} = useAuth();
  const [form, setForm] = useState<loginForm>({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");
    console.log(form);
    try {
      await axios.post("http://localhost:3000/users/login", form, {
        withCredentials: true,
      });
      authenticate()
      navigate("/");
    } catch (err: any) {
      console.error("Failed to login", err);
      if (err.response) {
        console.error(err.response.data);
        setError(err.response.data.message);
      }
    }
  };

  return (
    <div className="watch-container relative flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center px-40 py-10 bg-secondary min-w-2xs max-w-md relative"
      >
        <div className="flex flex-col gap-4 mb-4">
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
        </div>
        {error && <p className="text-red-500  absolute bottom-31">{error}</p>}
        <button
          className="m-8 text-background px-6 py-2 bg-foreground cursor-pointer hover:bg-background hover:text-white transition duration-150"
          role="submit"
        >
          login
        </button>
        <p className="absolute left-0 bottom-0 m-4">
          No account yet ?{" "}
          <Link to="/register">
            <span className="decoration-white underline">Please register</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
