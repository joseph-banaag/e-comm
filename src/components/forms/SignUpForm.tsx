"use client";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormValue {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
}

const SignUpForm = ({ link }: { link: string }) => {
  const { register, handleSubmit } = useForm<FormValue>();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValue> = (data) => {
    console.log("this is the data from the form: ", data);
    router.push(`${link}${data.userName}`)
  };

  return (
    <div>
      <form
        className="flex flex-col justify-center items-center mt-5 p-2 gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          placeholder="First name"
          className="inputForm"
          type="text"
          {...register("firstName", { required: true, maxLength: 20 })}
        />
        <input
          placeholder="Last name "
          className="inputForm"
          type="text"
          {...register("lastName", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        <input
          placeholder="User name"
          className="inputForm"
          type="text"
          {...register("userName", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        <input
          placeholder="email"
          className="inputForm"
          type="text"
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          })}
        />
        <button
          className="btn cursor-pointer border rounded-2xl px-4 py-1"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
