import Link from "next/link";

const ComputerCaseProducts = async ({
  params,
}: {
  params: Promise<{ computer_cases: string }>;
}) => {
  const { computer_cases } = await params;
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1>Welcome to the products page of:</h1>
      <h2>{computer_cases}</h2>
      <Link href="/">Home</Link>
    </div>
  );
};

export default ComputerCaseProducts;
