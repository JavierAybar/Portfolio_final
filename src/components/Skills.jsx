import ReactIcon from "../icons/React.jsx";
import Redux from "../icons/Redux.jsx";
import Tailwind from '../icons/Tailwind.jsx';
import Rails from "../icons/Rails.jsx";
import Ruby from "../icons/Ruby.jsx";
import Postgresql from "../icons/Postgresql.jsx";
import Javascript from "../icons/Javascript.jsx";
import Git from "../icons/Git.jsx"

const TAGS = {
    JAVASCRIPT: {
        name: "JavaScript",
        class: "bg-[#27272a] text-[13px] text-white",
        icon: Javascript,
    },
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
    RUBY: {
        name: "Ruby",
        class: "bg-[#27272a] text-[13px] text-white",
        icon: Ruby,
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
    GIT: {
        name: "Git",
        class: "bg-[#27272a] text-[13px] text-white",
        icon: Git,
    },
};

const Skills = () => {
    return (
        <section id='Skills' className="flex flex-col items-center justify-center mb-4">
            {/* <h2 className="text-4xl font-bold leading-none tracking-tighter text-center text-white/80 lg:text-4xl">About</h2> */}
            <section className="flex justify-center items-center flex-col mt-6 max-w-[760px]">
                {/* <div className="mx-2 mb-10 max-w-[80%]">
                    <p className="leading-relaxed text-center text-gray-200 text-pretty">
                    Im Javier Aybar, a software developer specialized in Frontend. I have a strong enthusiasm for creating attractive and functional interfaces using technologies like HTML, CSS, and JavaScript. Currently, Im focused on learning and mastering the latest trends in Frontend development.
                    </p>
                </div> */}
                <h2 className="mb-12 text-4xl font-bold leading-none tracking-tighter text-center text-white/80 lg:text-4xl">Tech Stack</h2>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    
                    {Object.entries(TAGS).map(([name, { name: techName, icon: Icon }]) => (
                        <div key={name} className="flex flex-col items-center max-w-xs p-4 space-y-2 border border-gray-700 rounded-lg hover:animate-tilt text-neutral-900 bg-gray-800/30">
                            <Icon className="w-10 h-10 md:w-12 md:h-12" />
                            <p className="text-sm text-white">{techName}</p>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
};

export default Skills;