import Link from "next/link";

const CpuCoolerAIOProducts = async ({
  params,
}: {
  params: Promise<{ cpu_aio: string }>;
}) => {
  const { cpu_aio } = await params;
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1>Welcome to the products page of:</h1>
      <h2>{cpu_aio}</h2>
      <Link href="/">Home</Link>
    </div>
  );
};

export default CpuCoolerAIOProducts;
