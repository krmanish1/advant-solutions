import { FolderCode, Lightbulb, MoveRight, Rocket } from 'lucide-react'
import React from 'react'

function ServicesStep() {
    return (
        <div className="px-4 py-16 mx-auto flex items-center justify-center flex-col gap-8 w-full  lg:py-20">
            <div className=" mb-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12 w-[90%]">

                <h2 className="w-full mb-6 text-center  md:text-4xl lg:text-5xl lg:leading-[62px] font-bold  tracking-tight text-gray-900 text-2xl md:mx-auto">
                    We have a simple, yet
                    <span className="bg-gradient-to-l from-blue-500 to-blue-800 bg-clip-text text-transparent"> bulletproof and effective
                    </span>
                    &nbsp;process
                </h2>
                <p className="text-base text-center text-gray-500 md:text-xl">
                    Our step-by-step process is designed to deliver exceptional results with clarity and precision. Experience a seamless journey from idea to implementation.
                </p>
            </div>
            <div className="grid gap-8 w-[90%] row-gap-0 place-content-center place-items-center lg:grid-cols-3">
                <div className="relative  text-center">
                    <div className="flex items-center text-blue-500 justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50">
                        <Lightbulb />
                    </div>
                    <h6 className="text-lg font-semibold text-gray-800 mb-2">Project Idea</h6>
                    <p className="max-w-md mb-3 text-[16px] text-gray-500 sm:mx-auto px-4">
                        We start by understanding your vision and refining it into a solid foundation for development. Together, we outline goals, functionality, and key features to align with your business objectives.
                    </p>
                    {/* <a
                        href="/"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                        Learn more
                    </a> */}
                    <div className="top-0 right-0 flex text-gray-300 items-center justify-center h-24 lg:-mr-8 lg:absolute">
                        <MoveRight size={64} />
                    </div>
                </div>
                <div className="relative  text-center">
                    <div className="flex items-center text-blue-500 justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50">
                        <FolderCode />
                    </div>
                    <h6 className="text-lg font-semibold text-gray-800 mb-2">Development & Execution</h6>
                    <p className="max-w-md mb-3 text-[16px] text-gray-500 sm:mx-auto px-4">
                        Our team brings your ideas to life with agile development and meticulous execution. We focus on building high-quality, reliable software through consistent collaboration and feedback.
                    </p>
                    {/* <a
                        href="/"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                        Learn more
                    </a> */}
                    <div className="top-0 right-0 text-gray-300 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
                        <MoveRight size={64} />
                    </div>
                </div>
                <div className="relative text-center">
                    <div className="flex items-center text-blue-500 justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 ">
                        <Rocket />
                    </div>
                    <h6 className="text-lg font-semibold text-gray-800 mb-2">Launch & Scale</h6>
                    <p className="max-w-md mb-3 text-[16px] text-gray-500 sm:mx-auto px-4">
                        With a successful launch, our support continues as you grow. We help you scale your software seamlessly, ensuring it’s optimized to support your expanding needs and long-term goals.
                    </p>
                    {/* <a
                        href="/"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                        Learn more
                    </a> */}
                </div>
            </div>
        </div>
    )
}

export default ServicesStep
