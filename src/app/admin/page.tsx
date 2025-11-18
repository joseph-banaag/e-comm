import SignUpForm from "@/components/SignUpForm";
import Link from "next/link";

const AdminLoginPage = () => {
  return (
    <section className="center-element">
      <h1>This is the Admin log in page...</h1>
      <div className="p-5 m-5">
        <SignUpForm link="/admin/" />
      </div>
      <Link href="/">Go to the Home page...</Link>
    </section>
  );
};

export default AdminLoginPage;
