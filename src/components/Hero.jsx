import ProfileImg from "../assets/Profile.png"
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import CopyEmail from "./CopyEmail";
import BadgeSocial from "./BadgeSocial"

const Hero = () => {
    return (
        <section id='Home' className="mb-8">
            <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
                <div className="flex flex-wrap items-center mx-auto max-w-7xl">
                    <div className="flex flex-col items-center mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pt-14 xl:pl-24 xl:pr-24 md:mb-0 xl:mt-0">
                        <div className="mb-3 relative mx-auto size-36 lg:size-[11.25rem]">
                            <img className="rounded-full mx-auto size-36 lg:size-[11.25rem] aspect-square" src={ProfileImg} />
                            <a href="https://www.linkedin.com/in/aybar-javier/" rel="noreferrer" target="_blank" className="absolute bottom-4 -right-16 bg-green-400 rounded-full font-medium text-black text-xs py-1 px-2 flex items-center gap-[6px] leading-none
      hover:bg-green-900/80 hover:text-white transition-colors group">
                                <span className="inline-block w-2 h-2 rounded-full bg-green-900/90 group-hover:bg-green-400"></span>
                                <span>OPEN TO WORK</span>
                            </a>
                        </div>
                        <h1 className="mb-4 text-3xl font-bold leading-snug text-center text-white lg:text-5xl text-balance text-neutral-800">
                            <span className="bg-gradient-to-r from-blue-900 dark:from-purple-400 leading-snug to-blue-400 via-pink-400 dark:via-pink-500 via-40% bg-clip-text text-transparent">Full Stack Developer: </span>
                            Crafting Digital Experiences
                        </h1>
                        <p className="mb-8 leading-relaxed text-center text-gray-400 text-pretty">I’m a software developer! I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.</p>
                    </div>
                </div>
                <div className="flex justify-center gap-2 text-gray-300 ">
                    <CopyEmail client:load />
                    <BadgeSocial href="https://www.linkedin.com/in/aybar-javier/" className="">
                        <span className="hidden sm:block">
                            Linkedin
                        </span>
                        <IconBrandLinkedin width={16} />
                    </BadgeSocial>
                    <BadgeSocial href="https://github.com/JavierAybar" className="">
                        <span className="hidden sm:block">
                            GitHub
                        </span>
                        <IconBrandGithub width={16} />
                    </BadgeSocial>
                </div>
            </div>
        </section>
    )
}

export default Hero;
