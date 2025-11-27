import Link from "next/link";

const CpuProducts = async ({
  params,
}: {
  params: Promise<{ cpus: string }>;
}) => {
  const { cpus } = await params;
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1>Welcome to the products page of:</h1>
      <h2>{cpus}</h2>
      <Link href="/">Home</Link>
    </div>
  );
};

export default CpuProducts;
