import Image from 'next/image'
import React from 'react'

function Artical() {
    return (
        <div className="px-4 py-16 mx-auto flex items-center justify-center flex-col gap-8 sm:max-w-xl md:max-w-full lg:w-full  lg:py-20">
            <div className="w-full mb-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12">

                <h2 className="w-full mb-6 font-sans lg:text-5xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    Browse our

                    <span className="bg-gradient-to-l from-blue-500 to-purple-800 bg-clip-text text-transparent"> latest articles
                    </span>
                    &nbsp;and resources
                </h2>

            </div>
            <div className="grid gap-8 w-[95%] place-content-center place-items-center grid-cols-1 lg:grid-cols-3">
                <div className="max-w-sm mb-6 md:md-0  border rounded-lg shadow-lg">
                    <a href="#">
                        {/* <img src="https://laravelnews.imgix.net/images/laravel9-1646792144.jpg?ixlib=php-3.3.1 1x,https://laravelnews.imgix.net/images/laravel9-1646792144.jpg?dpr=2&amp;ixlib=php-3.3.1 2x" src="https://laravelnews.imgix.net/images/laravel9-1646792144.jpg?ixlib=php-3.3.1" className="w-full mb-4 rounded-lg shadow-none transition transition-shadow duration-500 ease-in-out group-hover:shadow-lg" alt="laravel9-1646792144.jpg" /> */}
                        <Image
                            alt="logo"
                            src='https://img.freepik.com/free-photo/view-iceberg-water_23-2150701811.jpg?ga=GA1.1.1644054542.1679813660&semt=ais_hybrid'
                            height={20}
                            width={200}
                            unoptimized={true}
                            quality={100}
                            priority={true}
                            className="object-cover h-64 w-96"
                        >

                        </Image>
                        <div className="flex items-center mb-3 p-4">
                            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold leading-5 text-white font-display mr-2 capitalize bg-red-500" >
                                News
                            </span>
                            <p className="font-mono text-xs font-normal opacity-75 text-black">September 28th, 2022</p>
                        </div>
                        <p className="font-display max-w-sm text-2xl font-bold leading-tight p-4">
                            <span className="link-underline link-underline-black text-black">
                                Laravel 9.32 Released
                            </span>
                        </p>
                    </a>
                </div>
                <div className="max-w-sm mb-6 md:md-0  border  rounded-lg shadow-lg">
                    <a href="#">

                        <Image
                            alt="logo"
                            src='https://img.freepik.com/free-photo/mountain-landscape-with-fantasy-style-scene_23-2151125079.jpg?ga=GA1.1.1644054542.1679813660&semt=ais_hybrid'
                            height={20}
                            width={200}
                            unoptimized={true}
                            quality={100}
                            priority={true}
                            className="object-cover h-64 w-96"
                        >

                        </Image>
                        <div className="flex items-center mb-3 p-4">
                            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold leading-5 text-white font-display mr-2 capitalize bg-red-500" >
                                News
                            </span>
                            <p className="font-mono text-xs font-normal opacity-75 text-black">September 28th, 2022</p>
                        </div>
                        <p className="font-display max-w-sm text-2xl font-bold leading-tight p-4">
                            <span className="link-underline link-underline-black text-black">
                                Laravel 9.32 Released
                            </span>
                        </p>
                    </a>
                </div>
                <div className="max-w-sm mb-6 md:md-0  border  rounded-lg shadow-lg">
                    <a href="#">
                        <Image
                            alt="logo"
                            src='https://img.freepik.com/free-photo/night-time-scene-with-nature-glacier_23-2151795146.jpg?ga=GA1.1.1644054542.1679813660&semt=ais_hybrid'
                            height={20}
                            width={200}
                            unoptimized={true}
                            quality={100}
                            priority={true}
                            className="object-cover h-64 w-96"
                        >

                        </Image>
                        <div className="flex items-center mb-3 p-4">
                            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold leading-5 text-white font-display mr-2 capitalize bg-red-500" >
                                News
                            </span>
                            <p className="font-mono text-xs font-normal opacity-75 text-black">September 28th, 2022</p>
                        </div>
                        <p className="font-display max-w-sm text-2xl font-bold leading-tight p-4">
                            <span className="link-underline link-underline-black text-black">
                                Laravel 9.32 Released
                            </span>
                        </p>

                    </a>
                </div>


            </div>
        </div>
    )
}

export default Artical
