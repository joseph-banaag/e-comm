import Link from "next/link";

const AudioPage = () => {
  const audio = "asus-headphones";
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1>Welcome to the audio page...</h1>
      <Link href={`/products/audio/${audio}`}>{audio}</Link>
    </div>
  );
};

export default AudioPage;
