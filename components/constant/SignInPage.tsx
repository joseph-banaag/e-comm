"use client";
import React, {useState} from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import {Eye, EyeOff} from "lucide-react";
import Link from "next/link";

interface UserLoginInput {
  userName: string,
  password: string,
}

interface CredentialProps {
  credential: string
}

const UserLoginPage = ({credential}: CredentialProps) => {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<UserLoginInput>();
  
  // State for toggling password visibility
  const [showPassword, setShowPassword] = useState(false);
  
  /*
  * todo:
  *  get user data from the database and verify if a proper account is stored
  * */
  const onSubmit: SubmitHandler<UserLoginInput> = (data) => {
    console.log(data);
  };
  
  console.log(credential);
  
  
  return (
    <div className="w-full h-screen flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-[calc(100vh-25%)] flex flex-col justify-center items-center gap-3"
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
              })}
              className="border rounded-lg w-full py-2 px-2 pr-10 border-gray-500/40 shadow-lg text-sm focus:outline-2 focus:outline-gray-800/70"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 text-sm"
            >
              {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
            </button>
          </div>
          {errors.password && (
            <span className="text-red-500 text-xs ps-1">{errors.password.message}</span>
          )}
        </div>
        
        {/* SUBMIT */}
        <button
          type="submit"
          className="border rounded-2xl mt-3 py-1 px-2.5 border-gray-500/40 text-sm font-medium shadow-lg bg-green-800 hover:bg-green-700 hover:border-green-900/50 focus:outline-2 focus:outline-green-800/70 text-gray-200 hover:text-gray-300 text-nowrap"
        >
          Log in
        </button>
        <Link
          href={credential}
          className="text-xs underline underline-offset-2 text-nowrap"
        >
          Sign up
        </Link>
      </form>
    </div>
  );
};

export default UserLoginPage;