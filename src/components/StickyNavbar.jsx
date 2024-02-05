import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

const NavbarDefault = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li>
        <a href="#" className="text-sm  px-3 py-1  text-gray-300 text-neutral-600 relative before:absolute before:inset-0 before:bg-white/20 before:bg-neutral-400/20 z-[2] before:rounded-full before:scale-0 before:transition-transform before:hover:scale-100 hover:text-white hover:text-neutral-800 transition-colors">
          <FontAwesomeIcon className="mr-2 hover:text-white" color="#808080" icon="fa-solid fa-folder-open" />
          Projects
        </a>
      </li>
      <li>
        <a href="#" className=" text-sm px-3 py-1 text-gray-300 text-neutral-600 relative before:absolute before:inset-0 before:bg-white/20 before:bg-neutral-400/20 z-[2] before:rounded-full before:scale-0 before:transition-transform before:hover:scale-100 hover:text-white hover:text-neutral-800 transition-colors">
          <FontAwesomeIcon className="mr-2 hover:text-white" color="#808080" icon="fa-solid fa-user" />
          About
        </a>
      </li>
      <li>
        <a href="#" className="text-sm px-3 py-1 text-gray-300 text-neutral-600 relative before:absolute before:inset-0 before:bg-white/20 before:bg-neutral-400/20 z-[2] before:rounded-full before:scale-0 before:transition-transform before:hover:scale-100 hover:text-white hover:text-neutral-800 transition-colors">
          <FontAwesomeIcon className="mr-2 hover:text-white" color="#808080" icon="fa-solid fa-envelope" />
          Contact
        </a>
      </li>
    </ul>
  );


  return (
    <div className='sticky top-0 z-[1]  pt-6'>
      <Navbar className=" lg:rounded-full z-[1] w-[90%] px-4  py-1 mx-auto bg-gray-800 border-0 lg:w-fit lg:px-8 lg:py-1">
        <div className="container flex items-center justify-between gap-4 mx-auto text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="text-white font-bold text-xl mr-4 cursor-pointer py-1.5 "
          >
            [Javier]
          </Typography>
          <div className="hidden mx-4 lg:block ">{navList}</div>
          <div className="flex items-center gap-x-4">
            <Button fullWidth variant="gradient" size="sm" className="hidden bg-gradient-to-tr from-black to-gray-800 font-2xl lg:inline-block hover:scale-110 hover:bg-white/1">
              <FontAwesomeIcon size="xl" icon="fa-brands fa-github" />
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="hidden bg-gradient-to-tr from-black to-gray-800 lg:inline-block hover:scale-110 hover:bg-white/10">
              <FontAwesomeIcon size="xl" icon="fa-brands fa-linkedin-in" />
            </Button>
          </div>
          <IconButton
            variant="text"
            className="w-6 h-6 ml-autotext-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                color="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                color="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <div className="container mx-auto">
            {navList}
            <div className="flex items-center justify-center gap-x-3">
              <Button fullWidth variant="gradient" size="sm" className="bg-gradient-to-tr from-black to-gray-800 w-[40%] font-2xl">
                <FontAwesomeIcon icon="fa-brands fa-github" />
              </Button>
              <Button fullWidth variant="gradient" size="sm" className="bg-gradient-to-tr from-black to-gray-800 w-[40%]">
                <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
              </Button>
            </div>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarDefault;

// align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] block w-[45%] font-2xl