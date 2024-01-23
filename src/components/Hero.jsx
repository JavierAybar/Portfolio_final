const Hero = () => {
    return (
        <section>
            <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
                <div className="flex flex-wrap items-center mx-auto max-w-7xl">
                    <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pt-32 xl:pl-24 xl:pr-24 md:mb-0 xl:mt-0">
                        <span className="mb-4 text-sm font-bold tracking-widest uppercase">Javier Aybar </span>
                        <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter md:text-7xl lg:text-7xl">
                            <span className="text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">Full Stack</span> Developer.
                        </h1>
                        <p className="mb-8 text-xl leading-relaxed text-left text-gray-500">I’m a software developer! I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
