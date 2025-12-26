"use client";
import React, { useState } from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

interface UserFormInput {
  userName: string;
  password: string;
  confirmPassword: string;
  email?: string;
}

const UserLoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<UserFormInput>();
  
  // eslint-disable-next-line react-hooks/incompatible-library
  const password = watch("password");
  
  // State for toggling password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const onSubmit: SubmitHandler<UserFormInput> = (data) => {
    console.log("form data: ", data);
  };
  
  return (
    <div className="w-full h-screen flex justify-center">
      
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-[calc(100vh-25%)] flex flex-col justify-center items-center gap-3 px-1"
      >
        {/* USERNAME */}
        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor="userName"
            className="w-full text-sm font-medium text-gray-700 flex justify-start ps-1">
            User name:
          </label>
          <input
            id="userName"
            type="text"
            {...register("userName", {
              required: "Username is required",
              pattern: {
                value: /^[a-zA-Z0-9_-]{3,20}$/,
                message: "Username must be 3-20 characters (letters, numbers, _ or -)"
              }
            })}
            className="border rounded-lg w-full py-2 px-2 border-gray-500/40 shadow-lg text-sm focus:outline-2 focus:outline-gray-800/70"
          />
          {errors.userName && (
            <span className="text-red-500 text-xs ps-1">{errors.userName.message}</span>
          )}
        </div>
        
        {/* PASSWORD */}
        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor="password"
            className="w-full text-sm font-medium text-gray-700 flex justify-start ps-1">
            Password:
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_+=\-\[\]{}|;:',.<>/`~])[A-Za-z\d@$!%*?&#^()_+=\-\[\]{}|;:',.<>/`~]{8,}$/,
                  message: "Password must be 8+ characters with uppercase, lowercase, number, and special character"
                }
              })}
              className="border rounded-lg w-full py-2 px-2 pr-10 border-gray-500/40 shadow-lg text-sm focus:outline-2 focus:outline-gray-800/70"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 text-sm"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.password && (
            <span className="text-red-500 text-xs ps-1">{errors.password.message}</span>
          )}
        </div>
        
        {/* CONFIRM PASSWORD */}
        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor="confirmPassword"
            className="w-full text-sm font-medium text-gray-700 flex justify-start ps-1">
            Confirm Password:
          </label>
          <div className="relative">
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: value => value === password || "Passwords do not match"
              })}
              className="border rounded-lg w-full py-2 px-2 pr-10 border-gray-500/40 shadow-lg text-sm focus:outline-2 focus:outline-gray-800/70"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 text-sm"
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.confirmPassword && (
            <span className="text-red-500 text-xs ps-1">{errors.confirmPassword.message}</span>
          )}
        </div>
        
        {/* EMAIL */}
        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor="email"
            className="w-full text-sm font-medium text-gray-700 flex justify-start ps-1">
            Email address:
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid email address"
              }
            })}
            className="border rounded-lg w-full py-2 px-2 border-gray-500/40 shadow-lg text-sm focus:outline-2 focus:outline-gray-800/70"
          />
          {errors.email && (
            <span className="text-red-500 text-xs ps-1">{errors.email.message}</span>
          )}
        </div>
        
        {/*submit btn*/}
        <button
          type="submit"
          className="border rounded-2xl mt-3 py-1 px-2 border-gray-500/40 text-sm font-medium shadow-lg bg-green-800 hover:bg-green-700 hover:border-green-900/50 focus:outline-2 focus:outline-green-800/70 text-gray-200 hover:text-gray-300 text-nowrap"
        >
          Create Account
        </button>
        <Link
          href="/user-login"
          className="text-xs underline underline-offset-2 text-nowrap"
        >
          Sign in
        </Link>
      </form>
    </div>
  );
};

export default UserLoginPage;