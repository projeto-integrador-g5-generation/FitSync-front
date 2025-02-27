function Slide2() {
  return (
    <div
      className="flex justify-center bg-cyan-200 min-h-screen w-full bg-no-repeat bg-cover h-screen p-4"
      style={{
        backgroundImage:
          "url('https://ik.imagekit.io/z8ilvvp84p/Screenshot_3.png?updatedAt=1740676939882')",
      }}
    >
      <div className="w-full hidden md:flex justify-center items-center">
        <img
          src="https://ik.imagekit.io/z8ilvvp84p/Design_sem_nome__3_-removebg-preview.png?updatedAt=1740676764760"
          alt=""
          className="w-full max-w-4/6 drop-shadow-2xl"
        />
      </div>
      <div className="flex flex-col gap-5 w-full justify-center items-center">
        <h1 className="md:text-cyan-800 text-white text-7xl sm:text-8xl font-bold drop-shadow-lg">
          FITSYNC
        </h1>
        <div className="flex flex-col w-full justify-center items-center gap-8">
          <p className="md:text-cyan-800 text-white text-3xl sm:text-4xl drop-shadow-lg text-center">Venha treinar com um plano feito sob medida para você!</p>
          <button className="p-2 bg-cyan-800 text-white shadow-md rounded-md hover:scale-105 transition-all cursor-pointer text-2xl">Comece Agora</button>
        </div>
      </div>
    </div>
  );
}

export default Slide2;
