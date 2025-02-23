import { Navlinks, SocialLinks } from "./icons";
import { useTheme } from "../../Context/ThemeContext";

const Navbar = () => {
  const { handleChangeTheme, theme } = useTheme();

  return (
    <>
      <section className="w-fit  flex    px-5 h-14 border shadow-custom rounded-full fixed  bottom-5 bg-white">
        <section className="flex border-r-2 dark:border-r-[#cccaca] pr-1">
          {Navlinks.map(link => (
            <section key={link.title} className="flex  py-1">
              <a href={link.link}>
                <section
                  title={link.title}
                  className="rounded-full h-full w-full flex items-center justify-center cursor-pointer px-3  hover:bg-[#f5f5f5] hover:scale-110"
                >
                  <img src={link.src} alt={link.title} className="h-5" />
                </section>
              </a>
            </section>
          ))}
        </section>
        <section className="flex  border-r-2 dark:border-r-[#cccaca] px-1">
          {SocialLinks.map(link => (
            <section key={link.title} className="flex  py-1">
              <a href={link.link} target="_blank">
                <section className="rounded-full h-full w-full flex items-center justify-center cursor-pointer px-3  hover:bg-[#f5f5f5] hover:scale-110">
                  <img src={link.src} alt={link.title} className="h-5" />
                </section>
              </a>
            </section>
          ))}
        </section>
        <section className="flex pl-3   py-1">
          <section
            onClick={handleChangeTheme}
            className="rounded-full h-full w-full flex items-center justify-center cursor-pointer px-2  hover:bg-[#f5f5f5] hover:scale-110 "
          >
            <img
              src={theme ? "./icon/sun.svg" : "./icon/moon-star.svg"}
              alt=""
              className="h-5"
            />{" "}
          </section>
        </section>
      </section>
    </>
  );
};

export default Navbar;
