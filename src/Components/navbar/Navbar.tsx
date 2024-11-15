/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

'use client'
import Image from "next/image";
import React, { useState } from "react";


import Link from "next/link";


import { BicepsFlexed, ChevronDown, ChevronUp, Menu, Ribbon, ShipWheel, Sparkles, Waypoints, X, } from "lucide-react";
import { useRouter } from "next/navigation";
import DotPattern from "../ui/dot-pattern";


// type NavItem = {
//     label: string;
//     link?: string;
//     children?: NavItem[];
//     iconImage?: Element;
// };

const navItems = [
    {
        label: "About",
        link: "/",
        // children: [
        //     {
        //         label: "Our Story",
        //         link: "/",
        //         iconImage: (<Waypoints size={18} />)
        //     },
        //     {
        //         label: "Why CellStrat",
        //         link: "/",
        //         iconImage: (<Ribbon size={18} />)
        //     },
        //     {
        //         label: "Our Team",
        //         link: "/",
        //         iconImage: (<BicepsFlexed size={18} />)
        //     },
        //     {
        //         label: "What We Do",
        //         link: "/",
        //         iconImage: (<Sparkles size={18} />)
        //     },
        //     {
        //         label: "Our Impact",
        //         link: "/",
        //         iconImage: (<ShipWheel size={18} />)
        //     }
        // ]
    },

    // {
    //     label: "Products",
    //     link: "/",
    //     // children: [
    //     //     {
    //     //         label: "CellBot",
    //     //         link: "https://imagineview.com/cellbot-landing",
    //     //         iconImage: (<ShipWheel size={18} />)
    //     //     },
    //     //     {
    //     //         label: "Knowledge Base Miner",
    //     //         link: "https://imagineview.com/kb-miner",
    //     //         iconImage: (<ShipWheel size={18} />)
    //     //     },
    //     //     {
    //     //         label: "Virtual Chatbot",
    //     //         link: 'https://imagineview.com/chatbot',
    //     //         iconImage: (<ShipWheel size={18} />)
    //     //     }
    //     // ]
    // },
    {
        label: "Services",
        link: "/",
        // children: [
        //     {
        //         label: "History",
        //         link: "/dashboard",
        //         iconImage: (<ShipWheel size={18} />)
        //     },
        //     {
        //         label: "Our Team",
        //         link: "/",
        //         iconImage: (<ShipWheel size={18} />)
        //     },
        //     {
        //         label: "Blog",
        //         link: "/",
        //         iconImage: (<ShipWheel size={18} />)
        //     }
        // ]
    },
    // {
    //     label: "Careers",
    //     link: "/",
    //     // children: [
    //     //     {
    //     //         label: "Jobs",
    //     //         link: "/",
    //     //         iconImage: (<ShipWheel size={18} />)
    //     //     },
    //     //     {
    //     //         label: "Internships",
    //     //         link: "/",
    //     //         iconImage: (<ShipWheel size={18} />)
    //     //     },
    //     //     {
    //     //         label: "Community ",
    //     //         link: "/",
    //     //         iconImage: (<ShipWheel size={18} />)
    //     //     }
    //     // ]
    // },
    // {
    //     label: "Courses",
    //     link: "/",
    // },

    // {
    //     label: "Pricing",
    //     link: "/"
    // },
    {
        label: "Contact",
        link: "/"
    }
];

export default function Navbar() {

    const [isSideMenuOpen, setSideMenue] = useState(false);
    const router = useRouter()

    function openSideMenu() {
        setSideMenue(true);
    }
    function closeSideMenu() {
        setSideMenue(false);
    }

    return (
        <div className=" flex text-sm w-[90%] py-2 relative">
            <section className="flex w-full justify-between items-center">



                <Link className="flex items-center justify-center h-12 w-12" href="#">
                    {/* <Cpu className="h-8 w-8 text-purple-600" /> */}
                    <Image
                        alt="logo"
                        src='/icon/dark_logo.png'
                        height={30}
                        width={200}>

                    </Image>
                    <span className="text-gray-700 font-bold text-3xl -ml-1 -mt-3">vent</span>
                </Link>

                {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}

                <div className="hidden lg:flex items-center gap-10 transition-all">

                    {navItems.map((d, i) => (
                        <div
                            key={i}
                            // href={d.link ?? "#"}
                            onClick={() => router.push(d.link)}
                            className="relative group  px-2 py-3 transition-all "
                        >
                            <p className="flex cursor-pointer font-medium items-center gap-2 text-gray-500 group-hover:text-blue-600 ">
                                <span>{d.label}</span>
                                {/* {d.children && (
                                    < ChevronUp size={18} className=" rotate-180  transition-all group-hover:rotate-0" />
                                )} */}
                            </p>


                            {/* {d.children && (
                                <div className="absolute !z-50 right-[-10rem] pl-4 pb-4 pr-6  top-10 hidden w-auto rounded-lg bg-white py-3 shadow-md border border-gray-100 transition-all group-hover:flex ">
                                    <div className=" lg:w-[29rem] w-[15rem] grid grid-cols-1 lg:grid-cols-2  justify-items-start place-items-center gap-4">



                                        {d.children.map((ch, i) => (


                                            <div
                                                key={i}
                                                // onClick={() => router.push(ch.link)}
                                                // href='/'
                                                onClick={(event) => {
                                                    if (ch.link.startsWith('https://') || ch.link.startsWith('http://')) {
                                                        // External link, use href attribute
                                                        window.location.href = ch.link;
                                                    } else {
                                                        window.location.href = ch.link;
                                                        // Internal link, use router.push
                                                        // router.push(ch.link);
                                                    }
                                                }}

                                                className=" cursor-pointer text-neutral-400 hover:border-gray-100 hover:text-gray-400  rounded-md w-full"
                                            >

                                                <div className="flex items-center justify-center  rounded-lg  p-2 border-2 border-gray-100 w-full ">

                                                    <div className="bg-gray-200 p-2 rounded-md">
                                                        {ch.iconImage}
                                                    </div>
                                                    <div className="w-full">
                                                        <span className="whitespace-nowrap font-semibold  pl-3 ">
                                                            {ch.label}
                                                        </span>

                                                    </div>

                                                </div>
                                            </div>

                                        ))}


                                    </div>



                                </div>
                            )} */}
                        </div>
                    ))}



                    <div className=" hidden md:flex   items-center  ">
                        <button className="inline-block w-auto text-center min-w-[100px] px-4 py-2 text-white transition-all rounded-md sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b dark:shadow-blue-900 shadow-blue-200 hover:shadow-2xl hover:shadow-blue-400 hover:-tranneutral-y-px">
                            Get Started
                        </button>
                    </div>
                </div>



                <Menu
                    onClick={openSideMenu}
                    className="cursor-pointer text-4xl lg:hidden text-white"
                />
            </section>


        </div>
    );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
    return (
        <div className="fixed left-0 z-20 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 lg:hidden">
            <div className=" h-full w-[65%] bg-black px-4 py-4">
                <section className="flex justify-end text-white">
                    <X
                        onClick={closeSideMenu}
                        className="cursor-pointer text-4xl "
                    />
                </section>
                <div className=" flex flex-col text-base bg-black gap-2 transition-all">
                    {navItems.map((d, i) => (
                        <SingleNavItem
                            key={i}
                            label={d.label}
                            link={d.link}
                        >
                            {/* {d.children} */}
                        </SingleNavItem>
                    ))}
                </div>

                <section className="  flex  flex-col   gap-8  mt-4 items-center">
                    <button className="inline-block w-auto text-center min-w-[200px] py-4 text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b dark:shadow-blue-900 shadow-blue-200 hover:shadow-2xl hover:shadow-blue-400 hover:-tranneutral-y-px">
                        Get Started
                    </button>
                </section>
            </div>
        </div>
    );
}

function SingleNavItem(d: any) {

    const [isItemOpen, setItem] = useState(false);

    function toggleItem() {
        return setItem(!isItemOpen);
    }

    return (
        <Link

            onClick={toggleItem}
            href={d.link ?? "#"}
            className="relative   px-2 py-3 transition-all "
        >
            <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-gray-300 ">
                <span>{d.label}</span>
                {d.children && (
                    <ChevronDown
                        className={`text-xs transition-all  ${isItemOpen && " rotate-180"}`}
                    />
                )}
            </p>

            {isItemOpen && d.children && (
                <div className="  w-auto  flex-col gap-1   rounded-lg bg-black py-3   transition-all flex ">
                    {d.children.map((ch: any, i: any) => (
                        <Link
                            key={i}
                            href={ch.link ?? "#"}
                            className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-gray-300  "
                        >
                            {ch.iconImage}

                            <span className="whitespace-nowrap   pl-3 ">{ch.label}</span>
                        </Link>
                    ))}
                </div>
            )}
        </Link>
    );
}