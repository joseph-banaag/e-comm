import Link from "next/link";

const ComputerCasePage = () => {
  const computerCase = "deepcool-ch260_white";
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1>Welcome to the cables page...</h1>
      <Link href={`/products/computer-case/${computerCase}`}>
        {computerCase}
      </Link>
    </div>
  );
};

export default ComputerCasePage;
