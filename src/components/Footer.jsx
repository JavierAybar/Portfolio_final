import { IconHeart, IconHeartFilled } from "@tabler/icons-react"
var year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="w-full px-4 mx-auto mt-auto text-sm text-white xl:px-0">
      <div className="mx-auto w-full py-6 xl:w-[1120px]">
        <p className="flex items-center justify-center pb-4 my-4 text-center border-b border-gray-100/15 sm:pb-6">Developed with

          <span className="group">
            <IconHeart width={16} className="mx-1 group-hover:hidden" />
            <IconHeartFilled width={16} className="hidden mx-1 text-red-500 group-hover:block" />
          </span>
          &
          <span>
            <a className="mx-1 transition-all hover:text-blue-300 hover:underline" target="_blank"
              href="https://react.dev/" rel="noreferrer">React</a>
          </span>
        by Javier
        </p>
        <div className="text-center sm:flex sm:items-center sm:justify-between">
          <p>© {year} - All rights reserved... I think.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;