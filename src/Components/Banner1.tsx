import React from 'react'
import { cn } from '@/lib/utils'
import GridPattern from './magicui/grid-pattern'
import { Button } from './ui/button'

function Banner1() {
    return (
        <div className="relative flex h-full w-full items-center justify-center flex-col gap-8 overflow-hidden bg-background py-6 md:p-20 bg-gradient-to-bl from-indigo-200 via-transparent to-blue-200 mt-10">
            <div className='w-[90%] flex items-center justify-center gap-8 flex-col'>
                <p className="z-10 w-full whitespace-pre-wrap text-center text-2xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-black dark:text-white">
                    Ready to start working together with our team?
                </p>
                <div className='flex gap-10 z-10'>
                    <Button className='bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b dark:shadow-blue-900 shadow-blue-200 hover:shadow-2xl hover:shadow-blue-400 hover:-tranneutral-y-px h-12 w-auto px-6'>Contact us</Button>
                    <Button className='text-white transition-all bg-gray-700 dark:bg-white dark:text-gray-800 rounded-md shadow-xl sm:w-auto hover:bg-gray-900 hover:text-white shadow-neutral-300 dark:shadow-neutral-700 hover:shadow-2xl hover:shadow-neutral-400 hover:-tranneutral-y-px h-12 w-auto px-6'>Our services</Button>
                </div>
            </div>
            <GridPattern
                width={30}
                height={30}
                x={-1}
                y={-1}
                strokeDasharray={"4 2"}
                className={cn(
                    "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                )}
            />
        </div>
    )
}

export default Banner1