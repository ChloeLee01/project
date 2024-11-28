import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchPostAuthData } from "../redux/slices/authSlice";


const Register = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  
  const [value, setValue] = useState({
    username: "",
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

    if (value.username === "" || value.email === "" || value.password === "") {
      alert("이름과 이메일, 비밀번호는 필수 입력값입니다.");
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
        navigator("/login")
        return;
      }

      if(response.data.success === false) {
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
        <h2 className="text-lg font-bold mb-4">SIGNUP</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full px-3 py-2 border"
              name="username"
              onChange={handleChange}
            />
          </div>
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
          <span>이미 회원이라면 | </span>
          <Link to="/login" className="underline hover:no-underline">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
