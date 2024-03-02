import Image from "next/image";

export default function Home() {
  return (
      <main className="grid min-h-screen place-content-center h-full w-full">
          <figure className="w-screen h-screen absolute">
              <Image
                  src={"/bg_stars.png"}
                  alt="Starry night sky background image"
                  fill
                  className="object-cover"
              />
          </figure>
          <div className="flex flex-col items-center justify-center z-10 text-center font-extrabold px-2">
              <h1 className="text-5xl text-white">jqode_ software</h1>
              <h2 className="lg:text-5xl text-2xl text-white mt-4 mb-8">
                  Presenting your company <br /> to the world.
              </h2>
              <a href={"mailto:info@jqode.eu"} className=" w-fit">
                  <div className="py-2 px-4 w-fit rounded-lg text-xl text-white border-2 border-white">
                      Start now
                  </div>
              </a>
          </div>
      </main>
  );
}
