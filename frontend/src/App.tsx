import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect } from "react";
import { useAuth } from "./hooks/useAuth";
import Shop from "./pages/Shop";
import SingleMovie from "./pages/SingleMovie";

function App() {
  const {status, authenticate} = useAuth();

    useEffect(() => {
    authenticate()
  }, []);

  useEffect(() => {
  console.log(status); 
}, [status]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movie" element={<Home />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
