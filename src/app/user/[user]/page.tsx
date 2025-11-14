import Link from "next/link"

const UserPage = async ({
    params,
}: {
    params: Promise<{user: string}>
}) => {
    const {user} = await params
    console.log("Hello: ",user)
  return (
    <div className="center-element">
        <h1>Welcome, {user}</h1>
        <p>This is your page. Happy shopping...</p>
        <Link href="/">Home</Link>
    </div>
  )
}

export default UserPage