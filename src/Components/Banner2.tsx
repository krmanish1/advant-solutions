import React from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import DotPattern from './ui/dot-pattern'

function Banner2() {
    return (
        <div className="relative flex h-full w-full items-center justify-around gap-8 overflow-hidden bg-background p-20 bg-gradient-to-br from-transparent to-pink-200 ">
            <div className=' flex gap-4 flex-col'>
                <p className="z-10 w-1/2 whitespace-pre-wrap text-left text-5xl font-bold tracking-tighter text-black dark:text-white">
                    Start working with us!
                </p>
                <p className=" w-1/2 text-base text-gray-500 md:text-lg">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque rem aperiam, eaque ipsa quae.
                </p>
            </div>
            <div className='flex gap-10'>
                <Button className='bg-textBlack hover:bg-gray-700 h-12 w-auto px-6'>Contact us</Button>
                <Button className='hover:bg-textBlack bg-white border-2 border-gray-200 text-textBlack hover:text-white h-12 w-auto px-6'>Our services</Button>
            </div>
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
        </div>
    )
}

export default Banner2
