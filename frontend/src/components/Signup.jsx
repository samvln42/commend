import { useState, useEffect } from "react";
import axios from "axios";

const Signup = () => {
  const [data, setData] = useState({
    nickname: "",
    password: "",
  });

  const email = "tom@gmail.com";
  const code = "222121";

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/signup/", {
        email,
        code,
        ...data,
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          {/* <input type="email" name="email" onChange={handleChange} required />
          <input type="text" name="code" onChange={handleChange} required /> */}
          <input type="text" name="nikname" onChange={handleChange} required />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            required
          />
          <button type="submit">Add Note</button>
        </div>
      </form>
    </>
  );
};

export default Signup;
