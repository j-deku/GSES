import axios from 'axios';
import { useState } from 'react';

const LoginForm = () => {
  const [loginData, setLoginData] = useState("");
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "/api/user/login",
        {
          email: values.email,
          password: values.password,
        },
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        const role = res.data.userRole;
        loginData("agent");
        setLoginData(role);
        localStorage.setItem("User", role);
      }
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <input
          type='email'
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
        <input
          type='password'
          value={values.password}
          onChange={(e) => setValues({ ...values, password: e.target.value })}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
