import { Navlinks, SocialLinks } from "./icons";
const Navbar = () => {
  return (
    <>
      <section className="w-fit  flex   px-5 h-14 border shadow-lg rounded-full fixed  bottom-5 bg-white">
        <section className="flex border-r-2 pr-1">
          {Navlinks.map(link => (
            <section key={link.title} className="flex  py-1">
              <section
                title={link.title}
                className="rounded-full h-full w-full flex items-center justify-center cursor-pointer px-3  hover:bg-[#f5f5f5]"
              >
                <img src={link.src} alt={link.title} className="h-5" />
              </section>
            </section>
          ))}
        </section>
        <section className="flex  border-r-2 px-1">
          {SocialLinks.map(link => (
            <section key={link.title} className="flex  py-1">
              <section className="rounded-full h-full w-full flex items-center justify-center cursor-pointer px-3  hover:bg-[#f5f5f5]">
                <img src={link.src} alt={link.title} className="h-5" />
              </section>
            </section>
          ))}
        </section>
        <section className="flex pl-3   py-1">
          <section className="rounded-full h-full w-full flex items-center justify-center cursor-pointer px-2  hover:bg-[#f5f5f5]">
            <img src="./icon/sun.svg" alt="" className="h-5" />{" "}
          </section>
        </section>
      </section>
    </>
  );
};

export default Navbar;
