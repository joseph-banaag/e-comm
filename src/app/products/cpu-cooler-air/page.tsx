import Link from "next/link";

const CpuCoolerAIR = () => {
  const cpu_cooler_air = "thermalright-peerless-assassin-120";
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1>Welcome to the cables page...</h1>
      <Link href={`/products/cable/${cpu_cooler_air}`}>{cpu_cooler_air}</Link>
    </div>
  );
};

export default CpuCoolerAIR;
