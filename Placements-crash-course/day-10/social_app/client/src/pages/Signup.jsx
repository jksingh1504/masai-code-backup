import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(
      await axios.post("http://localhost:5000/api/user/register", formData)
    );
    navigate("/");
  }
  return (
    <div style={{ textAlign: "center" }}>
      <br />
      <br />
      <h3>Sign up form</h3>
      <br />
      <br />
      <form
        style={{
          border: "1px solid black",
          padding: "40px 60px",
          maxWidth: "max-content",
          borderRadius: "10px",
        }}
        onSubmit={handleSubmit}
      >
        <input
          onChange={handleChange}
          type="text"
          name="username"
          placeholder="enter username"
          required
        />
        <br />
        <br />
        <input
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="enter email"
          required
        />
        <br />
        <br />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="enter password"
          required
        />
        <br />
        <br />
        <input
          onChange={handleChange}
          type="text"
          name="Role"
          placeholder="enter role"
          required
        />
        <br />
        <br />
        <input
          onChange={handleChange}
          type="text"
          name="location"
          placeholder="enter location"
          required
        />
        <br />
        <br />
        <button style={{ cursor: "pointer" }} type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
}
