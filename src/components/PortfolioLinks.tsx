import React from "react";

export const PortfolioLinks = () => {
  let portLinks = [
    { name: "All", link: "/" },
    { name: "Packaging", link: "/" },
    { name: "Mockup", link: "/" },
    { name: "Typography", link: "/" },
    { name: "Photography", link: "/" },
  ];
  return (
    <div className="">
      <p className=" xl:ml-96 xl:mb-8 xl:text-5xl text-gray-600">
        My Portfolio
      </p>
      <nav className=" xl:justify-center">
        <ul className=" lg:flex xl:flex xl:mt-4 xl:justify-center mx-auto">
          {portLinks.map((link) => (
            <li>
              <a
                href={link.link}
                className=" lg:text-lg xl:text-sm xl:ml-12 text-gray-400 hover:text-gray-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
