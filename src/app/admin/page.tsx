import Link from "next/link";

const AdminLoginPage = () => {
  const admin_1 = "admin_doks"
 
  // username should not contain white space
  // todo: create regex for username that will invalidate white spaces it between words.

  return (
    <div className="center-element">
      <h1>This is the Admin log in page...</h1>
      <section className="p-5 m-5">
        <Link href={`/admin/${admin_1}`}>Log in now!</Link>
      </section>
      
      <Link href="/">Go to the Home page...</Link>
    </div>
  );
};

export default AdminLoginPage;
