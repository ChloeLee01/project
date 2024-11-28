import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPostAuthData } from "../redux/slices/authSlice";

const Login = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  // console.log(value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (value.email === "" || value.password === "") {
      alert("이메일과 비밀번호는 필수 입력값입니다.");
    }

    // const formData = new FormData();
    // formData.append("username", value.username);
    // formData.append("email", value.email);
    // formData.append("password", value.password);

    // console.log(formData);

    try {
      const response = await dispatch(fetchPostAuthData(value)).unwrap();
      // console.log(response);
      if (response.status === 201) {
        alert(response.data.msg);
        navigator("/login");
        return;
      }

      if (response.data.success === false) {
        alert(response.data.msg);
        return;
      }
    } catch (error) {
      alert(error.msg);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="shadow-lg px-8 py-5 w-[20%] border">
        <h2 className="text-lg font-bold mb-4">LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-3 py-2 border"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-3 py-2 border"
              name="password"
              onChange={handleChange}
            />
          </div>
          <button className="btn w-full">Submit</button>
        </form>
        <div className="mt-4">
          <span>아직 회원이 아니라면 | </span>
          <Link to="/register" className="underline hover:no-underline">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
