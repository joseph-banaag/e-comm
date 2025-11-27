import Link from "next/link";

const CaseFansProduct = async ({
  params,
}: {
  params: Promise<{ case_fans: string }>;
}) => {
  const { case_fans } = await params;
  console.log("Product: ", case_fans)

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1>Welcome to the products page of:</h1>
      <h2>{case_fans}</h2>
      <Link href="/">Home</Link>
    </div>
  );
};

export default CaseFansProduct;
