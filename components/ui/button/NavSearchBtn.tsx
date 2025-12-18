"use client";
import {SubmitHandler, useForm} from "react-hook-form";
import styles from "./navBtn.module.css";
import {Search} from "lucide-react";

interface FormValue {
  searchKeyword: string;
}

const NavSearchBtn = () => {
  const {register, handleSubmit} = useForm<FormValue>();
  
  const onSubmit: SubmitHandler<FormValue> = (data) => {
    alert(data.searchKeyword);
    console.log(data);
  };
  
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex gap-1"
      >
        <input type="text" {...register("searchKeyword", {required: true})}
               className="w-full h-3.5 px-px mt-px focus:outline-none text-gray-100 bg-none"/>
        <button
          type="submit"
          className="flex items-center gap-1 cursor-pointer"
        >
          <Search className={styles.icons}/>
        </button>
      </form>
    </div>
  );
};

export default NavSearchBtn;