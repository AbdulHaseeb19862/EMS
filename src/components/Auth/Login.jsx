import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Login({ handleLogin }) {
  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .min(3, "Password must be at least 3 characters")
      .required("Password is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema), // ✅ yup schema connected
  });

  const onSubmit = (data) => {
    const { email, password } = data;
    // console.log(email, password);
    handleLogin(email, password);

    reset();
  };
  return (
    <div className="w-full h-screen flex justify-center items-center px-2">
      <div className="w-full max-w-[500px]  border-emerald-300 border-2 p-6 md:p-12 rounded-3xl">
        <form
          action=""
          className="flex flex-col gap-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border-emerald-300 border-2 py-3 rounded-3xl outline-none text-gray-300 placeholder:text-gray-300 p-4  text-xl bg-transparent"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border-emerald-300 border-2 py-3 rounded-3xl outline-none text-gray-300 placeholder:text-gray-300 p-4 bg-transparent text-xl"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div className="w-full">
            <button className="w-full py-2 bg-green-600 hover:bg-green-500 transition-all duration-100  text-2xl text-white rounded-3xl cursor-pointer">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
