import Link from "next/link";

const CablesPage = () => {
  const cable = "HDMI-cables";
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1>Welcome to the cables page...</h1>
      <Link href={`/products/cable/${cable}`}>{cable}</Link>
    </div>
  );
};

export default CablesPage;
