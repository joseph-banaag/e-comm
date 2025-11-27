import Link from "next/link";

const AudioProducts = async ({
  params,
}: {
  params: Promise<{ audios: string }>;
}) => {
  const { audios } = await params;
  console.log("Product: ", audios)
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1>Welcome to the products page of:</h1>
      <h2>{audios}</h2>
      <Link href="/">Home</Link>
    </div>
  );
};

export default AudioProducts;
