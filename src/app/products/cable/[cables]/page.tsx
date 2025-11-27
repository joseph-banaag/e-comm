import Link from "next/link";

const CableProducts = async ({
  params,
}: {
  params: Promise<{ cables: string }>;
}) => {
  const { cables } = await params;
  console.log("Product: ", cables)

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1>Welcome to the products page of:</h1>
      <h2>{cables}</h2>
      <Link href="/">Home</Link>
    </div>
  );
};

export default CableProducts;
