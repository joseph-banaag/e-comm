import Link from "next/link";

const CpuCoolerAIO = () => {
  const cpu_cooler_aio = "thermalright-frozen-warfare-360";
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1>Welcome to the cables page...</h1>
      <Link href={`/products/cable/${cpu_cooler_aio}`}>{cpu_cooler_aio}</Link>
    </div>
  );
};

export default CpuCoolerAIO;
