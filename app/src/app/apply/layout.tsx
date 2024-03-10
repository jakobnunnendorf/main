export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section className=" h-screen w-full flex justify-center items-center">
            <div className="rounded-3xl bg-white w-5/12 h-2/3 ">{children}</div>
        </section>
    );
}
