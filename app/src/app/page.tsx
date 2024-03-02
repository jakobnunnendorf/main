import Image from "next/image";

export default function Home() {
  return (
      <main className="grid min-h-screen place-content-center h-full w-full">
          <figure className="w-full h-full absolute">
              <Image src={"/bg_stars.png"} fill alt="Starry night sky" />
          </figure>
          <div className="z-10 text-center font-extrabold">
              <h1 className="text-5xl text-white">jqode_ software</h1>
              <h2 className="text-5xl text-white mt-4 mb-8">
                  Presenting your business <br /> to the world.
              </h2>
              <a
                  href={"mailto:info@jqode.eu"}
                  className="py-2 px-4 rounded-lg text-xl text-white border-2 border-white"
              >
                  Start now
              </a>
          </div>
      </main>
  );
}
