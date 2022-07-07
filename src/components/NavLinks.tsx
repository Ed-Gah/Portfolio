import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

const NavLinks = (props: any) => {
  const [wid, setWid] = React.useState(0);
  let links = [
    { name: "Home", link: "/" },
    { name: "Dropdown", link: "/" },
    { name: "About", link: "/about" },
    { name: "Porfolio", link: "/portfolio" },
    { name: "Services", link: "/services" },
    { name: "Resume", link: "/" },
    { name: "Blog", link: "/" },
    { name: "Contact", link: "/" },
  ];

  React.useEffect(() => {
    setWid(window.innerWidth);
    // console.log("Windows with", width);
  }, [wid]);

  return (
    <React.Fragment>
      {wid > 1023 ? (
        <div className={` xl:max-w-screen-lg xl:mx-auto xl:z-0 ${props.navDiv}`}>
          <div className={` lg:ml-16 lg:mt-2 xl:-ml-16 xl:p-1 ${props.logo}`}>
            <h1 className={` text-center ${props.logoText}`}>Ed-Gah</h1>
          </div>
          <div>
            <ul className=" lg:flex xl:flex xl:mr-52 xl:mt-4">
              {links.map((link) => (
                <li>
                  <a href={link.link} className={` lg:text-lg xl:text-sm ${props.linkDiv}`}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <React.Fragment>
          <div className=" md:flex pt-8 sm:flex">
            <div className={ ` md:ml-20 sm:ml-14 ${props.logo}`}>
              <h1 className={`text-left ${props.logoText}`}>Ed-Gah</h1>
            </div>
            <div className=" md:ml-auto md:mr-20 sm:mr-16 sm:ml-auto ">
              <FiMenu
                className={` -mt-4 ${props.menu}`}
                size="4em"
              />
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default NavLinks;
