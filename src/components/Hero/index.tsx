const Hero = () => {
  return (
    <>
      <section className="flex items-center justify-center  mt-16 gap-5 ">
        <section className="w-full  ">
          <h1 className="  font-bold text-5xl">Hi, I'm Glenard 👋</h1>
          <p className="text-xl text-[#353637] mt-2">
            Passion-driven and dedicated to creating websites. I am eager to
            apply my extensive knowledge in web development to craft innovative
            and user-friendly online experiences.
          </p>
        </section>
        <section className="w-[200px]  ">
          <img
            src="/profile-pic.png"
            alt=""
            className=" w-[130px] h-[130px] rounded-full object-fill"
          />
        </section>
      </section>
    </>
  );
};

export default Hero;
