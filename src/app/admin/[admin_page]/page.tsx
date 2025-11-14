import Link from "next/link";

const AdminPage = async ({
  params,
}: {
  params: Promise<{ admin_page: string }>;
}) => {
  const { admin_page } = await params;
  console.log("Hello, Admin:", admin_page);
  return (
    <div className="center-element">
      <h1>Hello, {admin_page}!</h1>
      <p>Welcome to your dashboard</p>
      <Link href="/">Home</Link>
    </div>
  );
};

export default AdminPage;
