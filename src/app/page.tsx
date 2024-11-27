export default function Home() {
  return (
    <>
      <main className="flex items-start justify-between h-screen px-10 w-full bg-gray-100">
        <div className="w-[50%]">
          <h1 className="text-[45px] font-semibold mt-24 text-pink-600">
            Let's explore the <br />
            world together
          </h1>
          <p className="text-[20px] mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            obcaecati assumenda aperiam dolore minus delectus aliquid a <br />
            neque ipsam corrupti!
          </p>
          <div className="flex gap-3 mt-11">
            <button className="bg-gray-900 px-3 py-1 border border-gray-700 hover:bg-gray-700 transition-all text-white rounded-md">
              Get Started
            </button>
            <button className="border border-gray-600 hover:border-gray-700 transition-all px-3 py-1 rounded-md">
              Contact us
            </button>
          </div>
        </div>
        <aside className="w-[50%] rotate-45">
          <img
            src="/web.png"
            height={500}
            width={500}
            className="drop-shadow-3xl"
          />
        </aside>
      </main>
    </>
  );
}
