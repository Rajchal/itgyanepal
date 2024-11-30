import BuildLoader from "@/components/BuildLoader";
import Image from "next/image";
const Home = () => {
  return (
    <a href="/membership">
      <main className="text-center">
        <header className="h-24 bg-black-100 flex justify-center items-center">
          <Image src="/images/tempp.svg" width={160} height={60} alt="logo" />
        </header>
        <h1 className="pt-10 text-3xl">
          We are currenty building this page. Please check the membership paage.
        </h1>
        <h1 className="text-yellow-600 pt-3">press anywhere to continue...</h1>
        <BuildLoader />
      </main>
    </a>
  );
};

export default Home;
