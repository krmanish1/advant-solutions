import React from 'react'

function Testimonial() {
    return (
        <div className="px-4 py-8 mx-auto flex items-center justify-center flex-col gap-8 sm:max-w-xl md:max-w-full lg:w-full">
            <div className="w-full mb-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12">

                {/* <h2 className="w-full mb-6 font-sans lg:text-5xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    What our great customers say
                </h2> */}
                <h2 className="w-full mb-6 lg:text-5xl lg:leading-[62px] font-bold  tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    What our
                    <span className="bg-gradient-to-l from-blue-500 to-blue-800 bg-clip-text text-transparent"> great customers
                    </span>
                    &nbsp;say
                </h2>
                <p className="text-base text-gray-500 md:text-lg">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque rem aperiam, eaque ipsa quae.
                </p>
            </div>
            <div className=" w-[90%] ">

                <ul role="list"
                    className="mx-auto  grid w-full grid-cols-1 gap-6 sm:gap-8 lg:max-w-none lg:grid-cols-3">
                    <li>
                        <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                            <li>
                                <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"><svg aria-hidden="true"
                                    width="105" height="78" className="absolute left-6 top-6 fill-slate-100">
                                    <path
                                        d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                                    </path>
                                </svg>
                                    <blockquote className="relative">
                                        <p className="text-lg tracking-tight text-gray-500">I love the fitness apparel and gear I purchased from
                                            this site. The quality is exceptional and the prices are unbeatable.</p>
                                    </blockquote>
                                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                                        <div>
                                            <div className="font-display text-base text-slate-700">Sheryl Berge</div>
                                        </div>
                                        <div className="overflow-hidden rounded-full bg-slate-50">
                                            {/* <img alt="" className="h-14 w-14 object-cover" style="color:transparent" src="https://randomuser.me/api/portraits/men/15.jpg"> */}
                                        </div>
                                    </figcaption>
                                </figure>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                            <li>
                                <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"><svg aria-hidden="true"
                                    width="105" height="78" className="absolute left-6 top-6 fill-slate-100">
                                    <path
                                        d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                                    </path>
                                </svg>
                                    <blockquote className="relative">
                                        <p className="text-lg tracking-tight text-gray-500">As a professional athlete, I rely on high-performance
                                            gear for my training. This site offers a great selection of top-notch products.</p>
                                    </blockquote>
                                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                                        <div>
                                            <div className="font-display text-base text-slate-700">Leland Kiehn</div>
                                        </div>
                                        <div className="overflow-hidden rounded-full bg-slate-50">
                                            {/* <img alt="" className="h-14 w-14 object-cover" style="color:transparent" src="https://randomuser.me/api/portraits/women/15.jpg"> */}
                                        </div>
                                    </figcaption>
                                </figure>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                            <li>
                                <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"><svg aria-hidden="true"
                                    width="105" height="78" className="absolute left-6 top-6 fill-slate-100">
                                    <path
                                        d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                                    </path>
                                </svg>
                                    <blockquote className="relative">
                                        <p className="text-lg tracking-tight text-gray-500">The fitness apparel I bought here fits perfectly and
                                            feels amazing. I highly recommend this store to anyone looking for quality gear.</p>
                                    </blockquote>
                                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                                        <div>
                                            <div className="font-display text-base text-slate-700">Peter Renolds</div>
                                        </div>
                                        <div className="overflow-hidden rounded-full bg-slate-50">
                                            {/* <img alt="" className="h-14 w-14 object-cover" style="color:transparent" src="https://randomuser.me/api/portraits/men/10.jpg"> */}
                                        </div>
                                    </figcaption>
                                </figure>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonial
