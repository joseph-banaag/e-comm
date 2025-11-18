import SignUpForm from "@/components/SignUpForm";
import Link from "next/link";

const UsersLoginPage = () => {
  return (
    <section className="center-element">
      <h1>This is the User log in page...</h1>
      <div className="p-5 m-5">
        <SignUpForm link={"/user/"} />
      </div>
      <Link href="/">Home</Link>
    </section>
  );
};

export default UsersLoginPage;
