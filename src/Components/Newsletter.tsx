import { cn } from '@/lib/utils'
import React from 'react'
import DotPattern from './ui/dot-pattern'

function Newsletter() {
    return (

        <div className="relative flex h-full w-full items-center justify-around gap-8 overflow-hidden bg-background bg-gradient-to-br from-transparent to-blue-200 mt-20 -mb-10">
            <div className="mx-auto z-30  px-4 py-12 sm:px-6 lg:py-16">
                <div className="px-6 py-6 lg:flex lg:items-center flex-col gap-10">
                    <div className="lg:flex-1 text-center">
                        <h2 className="md:text-5xl font-extrabold tracking-tight text-gray-800 text-3xl">Email Newsletter</h2>
                        <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-500">Sign up for our email newsletter to stay up
                            to date.</p>
                    </div>
                    <div className="mt-8 sm:w-full md:max-w-2xl xl:mt-0 xl:ml-8">
                        <form className="sm:flex gap-5 w-full" id="revue-form" target="_blank">
                            <input type="email" className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-0" placeholder="Enter your email" />
                            <button type="submit" className="inline-block mt-4 md:mt-0 text-center w-full md:w-[150px] px-1 py-4 text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b dark:shadow-blue-900 shadow-blue-200 hover:shadow-2xl hover:shadow-blue-400 hover:-tranneutral-y-px ">Subscribe</button>
                        </form>
                        {/* <p className="mt-3 text-sm text-indigo-200">We will never send any spam emails. Promise.</p> */}
                    </div>
                </div>
            </div>
            <DotPattern
                width={20}
                height={20}
                cx={1}
                cy={1}
                cr={1}
                className={cn(
                    "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] ",
                )}
            />
        </div>

    )
}

export default Newsletter
