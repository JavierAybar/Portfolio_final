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
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center p-1 font-medium gap-x-2"
      >
  <FontAwesomeIcon className="text-sm" color="#808080" icon="fa-solid fa-folder-open" />
        <a href="#" className="flex items-center">
          Projects
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center p-1 font-medium gap-x-2"
      >
     <FontAwesomeIcon className="text-sm" color="#808080" icon="fa-solid fa-user" />
        <a href="#" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center p-1 font-medium gap-x-2"
      >
     <FontAwesomeIcon className="text-sm" color="#808080" icon="fa-solid fa-envelope" />
        <a href="#" className="flex items-center">
          Contact
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="max-w-screen-xl px-4 py-2 mx-auto lg:px-8 lg:py-4">
      <div className="container flex items-center justify-between mx-auto text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="font-bold text-xl mr-4 cursor-pointer py-1.5 "
        >
          [Javier]
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-3">
          <Button fullWidth variant="gradient" size="sm" className="hidden font-2xl lg:inline-block">
              <FontAwesomeIcon size="xl" icon="fa-brands fa-github" />
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="hidden lg:inline-block">
              <FontAwesomeIcon size="xl" icon="fa-brands fa-linkedin-in" />
            </Button>
        </div>
        <IconButton
          variant="text"
          className="w-6 h-6 ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
          <div className="flex items-center justify-center gap-x-1">
            <Button fullWidth variant="gradient" size="sm" className="w-[45%] font-2xl">
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="w-[45%]">
              <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
            </Button>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavbarDefault;