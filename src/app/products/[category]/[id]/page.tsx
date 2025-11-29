import Link from "next/link";

const SelectedProductPage = async ({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}) => {
  const { category, id } = await params;
  console.log(id);
  console.log(category)
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-5">
      <h1>Welcome to the selected product page...</h1>
      <h2>You have selected {id}</h2>
      <Link href="/">Home</Link>
    </div>
  );
};

export default SelectedProductPage;
