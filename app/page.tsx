import Image from "next/image";

const Home = () => {
  return (
    <div>
      <h1>IT GyaNepal</h1>
      <p>Under Development</p>
      <Image
        src="/images/logo.svg"
        alt="IT GyaNepal"
        width={500}
        height={500}
      />
    </div>
  );
};

export default Home;
