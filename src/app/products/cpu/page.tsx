import Link from "next/link"

const CpuPage = () => {
  const cpu = "ryzen-7-7700"
  return (
     <div className="min-h-screen flex flex-col justify-center items-center">
          <h1>Welcome to the cables page...</h1>
      <Link href={`/products/cable/${cpu}`}>{cpu}</Link>
    </div>
  )
}

export default CpuPage