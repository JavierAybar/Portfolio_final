/* eslint-disable react/jsx-no-comment-textnodes */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ReactIcon from "../icons/React.jsx"
import Redux from "../icons/Redux.jsx"
import Tailwind from '../icons/Tailwind.jsx';
import Rails from "../icons/Rails.jsx"
import Postgresql from "../icons/Postgresql.jsx"

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const TAGS = {
    REACT: {
        name: "React",
        class: "bg-[#003169]/95 text-[13px] text-white",
        icon: ReactIcon,
    },
    REDUX: {
        name: "Redux",
        class: "bg-[#040a44] text-[13px] text-white",
        icon: Redux,
    },
    TAILWIND: {
        name: "Tailwind CSS",
        class: "bg-[#003159] text-[13px] text-white",
        icon: Tailwind,
    },
    RAILS: {
        name: "Ruby on Rails",
        class: "bg-[#6f0000]/80 text-[13px] text-white",
        icon: Rails,
    },
    POSTGRESQL: {
        name: "PostgreSQL",
        class: "bg-[#27272a] text-[13px] text-white",
        icon: Postgresql,
    },
}
const PROJECTS = [
    {
        title: "SVGL - A beautiful library with SVG logos",
        description:
            "Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS.",
        tags: [TAGS.REACT, TAGS.REDUX, TAGS.TAILWIND, TAGS.RAILS, TAGS.POSTGRESQL],
    },
    {
        title: "SVGL - A beautiful library with SVG logos",
        description:
            "Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS.",
        tags: [TAGS.REACT, TAGS.REDUX, TAGS.TAILWIND],
    },
    {
        title: "SVGL - A beautiful library with SVG logos",
        description:
            "Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS.",
        tags: [TAGS.REDUX],
    },
]

export const Projects = () => {
    return (
        <div id='projects' className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <h2 className="mb-12 text-4xl font-bold leading-none tracking-tighter text-center text-white/80 lg:text-4xl">
                <span ><FontAwesomeIcon icon="fa-solid fa-code" /> </span>
                Projects
            </h2>
            <div className="grid items-center justify-center gap-24">
                {PROJECTS.map(({ title, description, tags }) => (
                    <div key={title} className="relative w-full max-w-[740px] shadow-lg group ">
                        <div className=" absolute -inset-0.5 bg-gradient-to-r from-blue-900 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        < Card className="relative w-full bg-black shadow-lg ">
                        <CardBody className='pb-0'>
                                <div className="flex items-center justify-between mb-3 ">
                                    <Typography variant="h5" className="mb-2 text-2xl font-bold text-blue-500 ">
                                        {title}
                                    </Typography>
                                </div>
                                <Typography className='text-gray-400 text-md'>
                                    {description}
                                </Typography>
                                <div className="inline-flex flex-wrap items-center gap-3 mt-8 group">
                                    {tags.map((tag) => (
                                        <li key={tag} className='list-none'>
                                            <span
                                                className={`hover:scale-110 transition-all flex items-center gap-x-2 rounded-full border border-white/20 text-xs ${tag.class} py-1 px-2 `}
                                            >
                                                <tag.icon className="size-5" />
                                                {tag.name}
                                            </span>
                                        </li>
                                    ))}
                                </div>
                            </CardBody>
                            <CardHeader floated={false} color="blue-gray">
                                <img
                                className="transition duration-500 md:group-hover:scale-105"
                                    src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                    alt="ui/ux review check"
                                                                  />
                                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60" />
                            </CardHeader>
                            <CardFooter className="flex gap-4 px-4 pt-6 pb-5">
                                <Button
                                    size="lg"
                                    className="border-white/10 border text-white/80 bg-gray-900/80 hover:bg-gray-900 hover:text-white capitalize group relative flex items-center gap-3 overflow-hidden pr-[72px] h-[45px] "
                                >
                                    Live version
                                    <span className="absolute right-0 grid w-12 h-full transition-colors place-items-center bg-light-gray-900capitalize">
                                        <FontAwesomeIcon className="w-6 h-6" icon="fa-solid fa-up-right-from-square" />
                                    </span>
                                </Button>
                                <Button
                                    size="lg"
                                    className="border-white/10 border hover:text-white  text-white/80 bg-gray-900/80 hover:bg-gray-900 capitalize group relative flex items-center gap-3 overflow-hidden pr-[72px] h-[45px]"
                                >
                                    Source code
                                    <span className="absolute right-0 grid w-12 h-full transition-colors place-items-center bg-light-gray-900">
                                        <FontAwesomeIcon className="h-7 w-7" icon="fa-brands fa-square-github" />
                                    </span>
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                ))
                }
            </div>

        </div >
    )
}




