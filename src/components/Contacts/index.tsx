const Contacts = () => {
  const email = "glenardrefamonte1@gmail.com";
  return (
    <>
      {" "}
      <section
        id="contacts"
        className="mt-16  text-center pb-64 text-sm max-sm:text-xs"
      >
        <span className=" bg-black text-white px-3 py-1 rounded-md  mb-1">
          Contacts{" "}
        </span>
        <h1 className="text-5xl font-semibold mt-3">Get in Touch</h1>
        <h1 className="text-lg mt-3">
          I'm currently actively seeking new opportunities, and my inbox is
          always open. Whether you'd like to discuss something specific or
          simply reach out, I'll make every effort to respond promptly.
        </h1>
        <a href={`mailto:${email}`}>
          <button className=" bg-black text-white w-32 md:w-40 h-12 border-[1px] rounded-md  border-[#ccd6f6]  mt-5 hover:shadow-md hover:bg-[#454545] hover:shadow-white">
            Say Hello
          </button>
        </a>
      </section>
    </>
  );
};

export default Contacts;
