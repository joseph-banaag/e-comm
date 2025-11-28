import Link from "next/link";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;
  console.log(`You are inside the ${category} page...`);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-5">
      <h1>
        This page will display the selected item/product from the category
        page...
      </h1>
      <h3>Welcome to {category} page...</h3>
      <div className={category === "motherboard" ? "flex" : "hidden"}>
        <h1>List of motherboards:</h1>
        <ul>
          <li>
            <Link href={`/items/${category}/asus-prime-b850m-a-wifi-csm`}>
              Asus Prime B850M-A Wifi-CSM
            </Link>
          </li>
          <li>
            <Link href={`/items/${category}/gigabyte-b850`}>
              Gigabyte B850m
            </Link>
          </li>
          <li>
            <Link href={`/items/${category}/msi-b850`}>MSI B850m</Link>
          </li>
          <li>
            <Link href={`/items/${category}/asrock-b850`}>Asrock B850M</Link>
          </li>
        </ul>
      </div>
      <Link href="/">Home</Link>
    </div>
  );
};

export default CategoryPage;
