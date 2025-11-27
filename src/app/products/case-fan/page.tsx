import Link from "next/link";

const CaseFansPage = () => {
  const caseFans = "thermalright-tl-h12-x28"
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1>Welcome to the case fans page...</h1>
      <Link href={`/products/case-fan/${caseFans}`}>{caseFans}</Link>
    </div>
  );
};

export default CaseFansPage;
