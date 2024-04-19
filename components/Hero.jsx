import HeaderImg from "../public/assets/header.webp";
import Image from "next/image";

export default function Hero({ state }) {
  return (
    <header className="h-[500px] w-full overflow-hidden">
      {state ? (
        <div className="absolute h-ful w-full">
          <div className="mb-5 w-10/12 max-w-7xl text-white mx-auto mt-[350px]">
            <h1 className="text-2xl lg:text-3xl font-serif">
              Introducing LWS Shop Center
            </h1>
            <p>Your whole week at a glance</p>
            <button className="bg-[#ffd160] hover:bg-[#e4be60] border border-black w-60 mt-2 py-3 rounded-full text-center text-black">
              Get the Weekly Kit
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="h-[100%] overflow-hidden flex justify-center items-center">
        <Image src={HeaderImg} width="full" alt="Header Image" />
      </div>
    </header>
  );
}
