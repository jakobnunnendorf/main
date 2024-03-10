import { Metadata } from "next";
import { ApplicationForm } from "./Form/ApplicationForm";
import Image from "next/image";

export const metadata = {
    title: "",
    description: "",
};

export default function Page() {
    return (
        <section className="grid grid-rows-3 overflow-hidden h-full">
            <div className="grid grid-rows-2 ">
                <div className="grid-cols-3 self-end grid">
                    <div className=" col-span-2 ">
                        <h1 className="text-center text-3xl ">Apply now</h1>
                    </div>
                    <div className=" grid place-content-center">
                        <button className="flex flex-col items-center">
                            <figure className="relative w-6 h-6 ">
                                <Image
                                    src={"/paper-plane-regular.svg"}
                                    alt=""
                                    fill
                                />
                            </figure>
                            <p className="text-blue-400 text-sm">Send</p>
                        </button>
                    </div>
                </div>
                <div className=" grid grid-rows-2">
                    <div className="border-b flex items-center px-4 ">
                        <div className="text-slate-400">To:</div>
                        <div className="px-4 text-blue-400"> info@jqode.eu</div>
                    </div>
                    <div className="border-b flex items-center px-4 ">
                        <div className="text-slate-400">From:</div>
                        <input
                            type="text"
                            placeholder="enter your email here"
                            className="focus:outline-none text-blue-400 border-none border-0 ring-0 w-full p-0 m-0 mx-4 bg-transparent"
                        />
                    </div>
                </div>
            </div>
            <div className="row-span-2 p-8 ">
                <div>
                    <h3 className="font-bold">What does your business do?</h3>
                    <textarea className="focus:outline-none ring-0 w-full" />
                </div>
                <div>
                    <h3 className="font-bold">How can we help you?</h3>
                    <textarea className="focus:outline-none ring-0 w-full" />
                </div>
                <div>
                    <h3 className="font-bold">
                        What would a succesful outcome look like to you?
                    </h3>
                    <textarea className="focus:outline-none ring-0 w-full" />
                </div>
                <div>
                    <h3>Best regards,</h3>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="focus:outline-none ring-0 w-full"
                    />
                </div>
            </div>
        </section>
    );
}
