import Image from 'next/image'
import React from 'react'

function CaseStudy() {
    return (
        <div className="px-4 py-16 mx-auto flex items-center justify-center flex-col gap-8 w-full md:max-w-full lg:w-full  lg:py-20">
            <div className="w-full mb-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12">

                {/* <h2 className="w-full mb-6 font-sans lg:text-5xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    Discover how we had helped world class companies in the past
                </h2> */}

                <h2 className="w-full mb-6 lg:text-5xl lg:leading-[62px] font-bold  tracking-tight text-gray-900 text-2xl text-center md:text-4xl md:mx-auto">
                    Discover how we had
                    <span className="bg-gradient-to-l from-blue-500 to-blue-800 bg-clip-text text-transparent">
                        &nbsp;helped world class companies
                    </span>
                    &nbsp;in the past
                </h2>
                <p className="text-base text-center text-gray-500 md:text-lg">
                    Explore our success stories and see how our solutions have driven innovation, efficiency, and growth for top global brands.
                </p>
            </div>
            <div className="grid gap-8 w-[95%] row-gap-0 place-content-center place-items-center lg:grid-cols-3">
                <div className=" w-full">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">

                        <div className='h-48 w-full bg-gradient-to-tr from-indigo-500 to-purple-500 px-10'>

                            <Image
                                src="https://cdn.prod.website-files.com/64e61e9bfaf90bd7fd8ac39b/65b2961b76948b9689ee922d_company-white-logo-cases-study-devtech-x-webflow-template.svg"
                                alt="blog"
                                width={100}
                                height={100}
                                className="h-48 w-full object-contain object-center"
                            />
                        </div>

                        <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                            <p className="leading-relaxed mb-3">
                                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing
                                tousled waistcoat.
                            </p>
                            <div className="flex items-center flex-wrap">
                                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                                    Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                    1.2K
                                </span>
                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>6
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-full">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <div className='h-48 w-full bg-gradient-to-tr from-orange-400 to-pink-400 px-10'>

                            <Image
                                src="https://cdn.prod.website-files.com/64e61e9bfaf90bd7fd8ac39b/65b29512e0be158b45784efc_agency-white-logo-cases-study-devtech-x-webflow-template.svg"
                                alt="blog"
                                width={100}
                                height={100}
                                className="h-48 w-full object-contain object-center"
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                            <p className="leading-relaxed mb-3">
                                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing
                                tousled waistcoat.
                            </p>
                            <div className="flex items-center flex-wrap">
                                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                                    Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                    1.2K
                                </span>
                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>6
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-full">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <div className='h-48 w-full bg-gradient-to-tr from-teal-400 to-green-400 px-10'>

                            <Image
                                src="https://cdn.prod.website-files.com/64e61e9bfaf90bd7fd8ac39b/65b2971662d9250a28ef4f44_enterprise-white-logo-cases-study-devtech-x-webflow-template.svg"
                                alt="blog"
                                width={100}
                                height={100}
                                className="h-48 w-full object-contain object-center"
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                            <p className="leading-relaxed mb-3">
                                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing
                                tousled waistcoat.
                            </p>
                            <div className="flex items-center flex-wrap">
                                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                                    Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                    1.2K
                                </span>
                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>6
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseStudy
