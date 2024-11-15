import { cn } from '@/lib/utils'
import React from 'react'
import AnimatedShinyText from '../ui/animated-shiny-text'
import { ArrowRightIcon } from 'lucide-react'
import AnimatedGridPattern from '../ui/animated-grid-pattern'

function HeroSection() {
    return (

        <div className="relative flex w-full items-center justify-center overflow-hidden bg-background py-28">
            <div className="flex z-10 justify-center flex-col items-center dark:bg-gray-800 ">
                <div className="text-center max-w-3xl mx-6">
                    <div className=" flex min-h-24 items-center justify-center">
                        <div
                            className={cn(
                                "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                            )}
                        >
                            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                                <span>✨ Innovate, Scale, Succeed</span>
                                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                            </AnimatedShinyText>
                        </div>
                    </div>
                    <h1 className="my-3  !leading-[62px] text-3xl font-bold tracking-tight text-gray-800 md:text-5xl dark:text-gray-100">
                        {/* Customized services to fit your bussiness needs */}
                        Tailored Technology Solutions for Your Business Success
                    </h1>
                    <div>
                        <p className="max-w-2xl mx-auto my-2 text-base text-gray-500 md:leading-relaxed md:text-xl dark:text-gray-400">
                            We offer custom software solutions that are crafted to meet your unique business needs. Our team is dedicated to providing innovative, scalable, and secure applications to help you thrive in a competitive market.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5 mt-6 md:flex-row"><a
                        className="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b dark:shadow-blue-900 shadow-blue-200 hover:shadow-2xl hover:shadow-blue-400 hover:-tranneutral-y-px "
                        href="">Schedule A Consultation
                    </a>
                        <a className="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all bg-gray-700 dark:bg-white dark:text-gray-800 rounded-md shadow-xl sm:w-auto hover:bg-gray-900 hover:text-white shadow-neutral-300 dark:shadow-neutral-700 hover:shadow-2xl hover:shadow-neutral-400 hover:-tranneutral-y-px"
                            href="">See Our Services
                        </a>
                    </div>
                </div>

            </div>
            <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.1}
                duration={3}
                repeatDelay={1}
                className={cn(
                    "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] w-full skew-y-0",
                )}
            />
        </div>



    )
}

export default HeroSection

{/* < section
className = "relative overflow-hidden  pb-12 pt-20 sm:pb-16 sm:pt-32 lg:pb-24 xl:pb-32 xl:pt-40 w-full mt-2" >
            <DotPattern
                width={20}
                height={20}
                cx={1}
                cy={1}
                cr={1}
                className={cn(
                    "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
                )}
            />
           
            <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-5xl font-bold sm:text-6xl">
                        Customized services to fit
                        <span className="bg-gradient-to-l from-blue-500 to-purple-800 bg-clip-text text-transparent"> your needs
                        </span>
                    </h1>
                    <h2 className="mt-6 text-lg leading-8 text-gray-500">
                        We offer custom software solutions that are crafted to meet your unique business needs. Our team is dedicated to providing innovative, scalable, and secure applications to help you thrive in a competitive market.
                    </h2>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Button className='bg-textBlack hover:bg-gray-700 h-12 w-32'>Get Started</Button>
                        <Button className='hover:bg-textBlack h-12 w-32 bg-white text-textBlack border-2 border-gray-200'>Our Services</Button>

                    </div>
                </div>
               
            </div>
        </section > */}