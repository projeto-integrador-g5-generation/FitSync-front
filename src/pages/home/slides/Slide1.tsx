function Slide1() {
  return (
    <div
      className="flex justify-center bg-cyan-200 min-h-screen w-full bg-no-repeat bg-cover h-screen p-4"
      style={{
        backgroundImage:
          "url('https://ik.imagekit.io/z8ilvvp84p/Screenshot_2.png?updatedAt=1740674570168')",
      }}
    >
      <div className="flex flex-col gap-5 w-full justify-center items-center">
        <h1 className="text-cyan-800 text-7xl sm:text-8xl font-bold drop-shadow-lg">
          FITSYNC
        </h1>
        <div className="flex flex-col w-full justify-center items-center">
          <p className="text-cyan-800 drop-shadow-md text-3xl sm:text-4xl">Corpo e Mente</p>
          <p className="text-cyan-800 drop-shadow-md text-3xl sm:text-5xl">Sinconizados</p>
          <button className="p-2 text-cyan-800 bg-white shadow-md rounded-md hover:scale-105 transition-all cursor-pointer text-2xl mt-8">Comece Agora</button>
        </div>
      </div>
      <div className="w-full hidden md:flex justify-center items-center">
        <img
          src="https://ik.imagekit.io/z8ilvvp84p/Design_sem_nome__2_-removebg-preview.png?updatedAt=1740674334647"
          alt=""
          className="w-full max-w-4/6 drop-shadow-2xl"
        />
      </div>
    </div>
  );
}

export default Slide1;
