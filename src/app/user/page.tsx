import Link from "next/link";

const UsersLoginPage = () => {
  const user_1 = "doks"
  return (
    <div className="center-element">
      <h1>This is the User log in page...</h1>
      <section className="p-5 m-5">
        <Link href={`/user/${user_1}`}>Log in now!</Link>
      </section>
      <Link href="/">Go to the Home page...</Link>
    </div>
  );
};

export default UsersLoginPage;
