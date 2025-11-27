import Link from "next/link";

const CpuCoolerAIRProducts = async ({
  params,
}: {
  params: Promise<{ cpu_air: string }>;
}) => {
  const { cpu_air } = await params;
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1>Welcome to the products page of:</h1>
      <h2>{cpu_air}</h2>
      <Link href="/">Home</Link>
    </div>
  );
};

export default CpuCoolerAIRProducts;
