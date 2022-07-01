import { useTheme } from 'next-themes'
import { FaGraduationCap } from 'react-icons/fa'
import React, { useEffect, useState } from 'react'

const index = () => {
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme, theme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    const journeyData = [
        {
            title: 'Education',
            subHeading: 'Vellore Institute of Technology (VIT), Vellore',
            smallText1: `B.Tech in Computer Science with specialization in Bioinformatics 2018 - 2022 (Present)`,
            smallText2: `Winner of various national and international hacks`,
            imageUrl: '/images/vit.jpg',
            icon: <GraduationIcon />,
            pattern: 'imageToText'
        },
        {
            title: 'Education',
            subHeading: 'Vellore Institute of Technology (VIT), Vellore',
            smallText1: `B.Tech in Computer Science with specialization in Bioinformatics 2018 - 2022 (Present)`,
            smallText2: `Winner of various national and international hacks`,
            imageUrl: '/images/vit.jpg',
            icon: <GraduationIcon />,
            pattern: 'textToImage'
        },
        {
            title: 'Education',
            subHeading: 'Vellore Institute of Technology (VIT), Vellore',
            smallText1: `B.Tech in Computer Science with specialization in Bioinformatics 2018 - 2022 (Present)`,
            smallText2: `Winner of various national and international hacks`,
            imageUrl: '/images/vit.jpg',
            icon: <GraduationIcon />,
            pattern: 'imageToText'
        },
        {
            title: 'Education',
            subHeading: 'Vellore Institute of Technology (VIT), Vellore',
            smallText1: `B.Tech in Computer Science with specialization in Bioinformatics 2018 - 2022 (Present)`,
            smallText2: `Winner of various national and international hacks`,
            imageUrl: '/images/vit.jpg',
            icon: <GraduationIcon />,
            pattern: 'textToImage'
        },
    ]
    return (
        <div className='container'>
            <div className="flex flex-col space-y-8">
                <div className="flex items-center space-x-4">
                    <h1 className='pl-4 font-semibold text-xl lg:text-3xl'>
                        My Journey
                    </h1>
                    <div className="bg-[#1d263a] mt-2 h-[1px] w-full max-w-[20rem]"></div>
                </div>
                <div className="flex flex-col w-full space-y-8">

                    {/* {journeyData.map(({ imageUrl, pattern, smallText1, smallText2, icon, subHeading, title, }) => (
                    pattern === 'imageToText' ? (
                        <div className="grid grid-cols-7">
                            <div

                                className="col-span-4 z-10 relative">
                                <img
                                    src={imageUrl} />
                                <div
                                    style={{
                                        backgroundImage: 'linear-gradient(rgba(12,38,67,0.7),rgba(12,38,67,0.7))'
                                    }}
                                    className="absolute inset-0 w-full h-full">

                                </div>
                            </div>
                            <div className="col-span-3 pt-12 space-y-5 relative">
                                <div className="w-full flex justify-end">
                                    <div className="w-16 h-16 border-2 ml-auto flex items-center justify-center rounded-full">
                                        {icon}
                                    </div>
                                </div>
                                <h1 className="text-right font-semibold text-xl lg:text-3xl">{title}</h1>
                                <h1 className="text-right font-semibold text-base lg:text-lg">{subHeading}</h1>
                                <div
                                    style={{
                                        backgroundImage: 'linear-gradient(rgba(11,36,58, 1),   rgba(11,36,58, 1))'
                                    }}
                                    className="p-5 min-w-[120%] shadow-lg rounded-sm absolute ml-[-20%] z-30">
                                    <p className='text-right lg:max-w-[90%] text-white ml-auto mb-2'>{smallText1}</p>
                                    <p className='text-right lg:max-w-[90%] text-white ml-auto mb-2'>{smallText2}</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-7">

                            <div className="col-span-3 pt-12 space-y-5 relative">
                                <div className="w-full flex justify-end">
                                    <div className="w-16 h-16 border-2 mr-auto flex items-center justify-center rounded-full">
                                        {icon}
                                    </div>
                                </div>
                                <h1 className="text-left font-semibold text-xl lg:text-3xl">{title}</h1>
                                <h1 className="text-left font-semibold text-base lg:text-lg">{subHeading}</h1>
                                <div
                                    style={{
                                        backgroundImage: 'linear-gradient(rgba(11,36,58, 1),   rgba(11,36,58, 1))'
                                    }}
                                    className="p-5 min-w-[120%] shadow-lg rounded-sm absolute mr-[-20%] z-30">
                                    <p className='text-left lg:max-w-[90%] text-white mr-auto mb-2'>{smallText1}</p>
                                    <p className='text-left lg:max-w-[90%] text-white mr-auto mb-2'>{smallText2}</p>
                                </div>
                            </div>
                            <div

                                className="col-span-4 z-10 relative">
                                <img
                                    src={imageUrl} />
                                <div
                                    style={{
                                        backgroundImage: 'linear-gradient(rgba(12,38,67,0.7),rgba(12,38,67,0.7))'
                                    }}
                                    className="absolute inset-0 w-full h-full">

                                </div>
                            </div>
                        </div>
                    )
                ))} */}
                    {journeyData.map(({ imageUrl, pattern, smallText1, smallText2, icon, subHeading, title }, i) => (
                        // <div
                        //     // style={{
                        //     //     backgroundImage: 'linear-gradient(rgba(11,36,58, 1),   rgba(11,36,58, 1))'
                        //     // }}
                        //     className="relative my-8 max-w-[30rem] min-h-[15rem]">
                        //     <div
                        //         style={{
                        //             background: `url(${imageUrl})`
                        //         }}
                        //         className="absolute top-[-20%] left-[-20%] w-[15rem] h-[10rem] rounded-lg shadow-md !bg-no-repeat !bg-cover" >
                        //     </div>
                        //     {/* <div className="text-right max-w-[70%] ml-auto">
                        //         <h1 className="text-right font-semibold text-xl lg:text-3xl">{title}</h1>
                        //         <h1 className="text-right font-semibold text-base lg:text-lg">{subHeading}</h1>
                        //         <p className='text-right lg:max-w-[90%] text-white ml-auto mb-2'>{smallText1}</p>
                        //         <p className='text-right lg:max-w-[90%] text-white ml-auto mb-2'>{smallText2}</p>
                        //     </div> */}
                        //     <div className="col-span-3 pt-12 space-y-5 relative">
                        //         <div className="w-full flex justify-end">
                        //             <div className="w-16 h-16 border-2 ml-auto flex items-center justify-center rounded-full">
                        //                 {icon}
                        //             </div>
                        //         </div>
                        //         <h1 className="text-right font-semibold text-xl lg:text-3xl">{title}</h1>
                        //         <h1 className="text-right font-semibold text-base lg:text-lg">{subHeading}</h1>
                        //         <div
                        //             style={{
                        //                 backgroundImage: 'linear-gradient(rgba(11,36,58, 1),   rgba(11,36,58, 1))'
                        //             }}
                        //             className="p-5 min-w-[120%] shadow-lg rounded-sm absolute ml-[-20%] z-30">
                        //             <p className='text-right lg:max-w-[90%] text-white ml-auto mb-2'>{smallText1}</p>
                        //             <p className='text-right lg:max-w-[90%] text-white ml-auto mb-2'>{smallText2}</p>
                        //         </div>
                        //     </div>
                        // </div>
                        <>
                            {pattern === 'imageToText' ?
                                <>
                                    <div className="w-full relative">
                                        <div className="z-20 p-4 bg-white dark:bg-darkColor flex relative overflow-hidden  flex-col max-w-[32rem] my-6 ">
                                            <div
                                                data-aos="fade-right"
                                                data-aos-delay={`200`}
                                                data-aos-duration="800"
                                                style={{
                                                    backgroundImage: `linear-gradient(rgba(11,36,58, 0.3), rgba(11,36,58, 0.3)),url(${imageUrl})`
                                                }}
                                                className="absolute w-[12rem] md:w-[16rem] h-[8rem] md:h-[10rem] shadow-md !bg-no-repeat !bg-cover" >
                                            </div>
                                            <div className="col-span-3 pt-12 space-y-3 relative">
                                                <div className="w-full flex justify-end">
                                                    <div
                                                        data-aos="fade-left"
                                                        data-aos-delay={`300`}
                                                        data-aos-duration="500"
                                                        className="w-16 h-16 border-2 ml-auto flex items-center justify-center rounded-full">
                                                        {icon}
                                                    </div>
                                                </div>
                                                <h1
                                                    data-aos="fade-left"
                                                    data-aos-delay={`400`}
                                                    data-aos-duration="500"
                                                    className="text-right font-semibold text-xl lg:text-3xl">{title}</h1>
                                                <h1
                                                    data-aos="fade-left"
                                                    data-aos-delay={`500`}
                                                    data-aos-duration="500"
                                                    className="text-right font-semibold text-base lg:text-lg">{subHeading}</h1>
                                                <div
                                                    data-aos="fade-left"
                                                    data-aos-delay={`500`}
                                                    data-aos-duration="500"
                                                    style={{
                                                        backgroundImage: 'linear-gradient(rgba(11,36,58, 1),   rgba(11,36,58, 1))'
                                                    }}
                                                    className="p-5 shadow-lg rounded-sm  z-30">
                                                    <p
                                                        data-aos="fade-left"
                                                        data-aos-delay={`700`}
                                                        data-aos-duration="500"
                                                        className='text-right lg:max-w-[90%] text-white ml-auto mb-2'>{smallText1}</p>
                                                    <p
                                                        data-aos="fade-left"
                                                        data-aos-delay={`800`}
                                                        data-aos-duration="500"
                                                        className='text-right lg:max-w-[90%] text-white ml-auto mb-2'>{smallText2}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="right-border-white hidden dark:flex z-10 w-[80%] absolute left-8 bottom-[-20%] py-32 "></div>
                                        <div
                                            className="right-border-dark  dark:hidden flex z-10 w-[80%] absolute left-8 bottom-[-20%] py-32 "></div>
                                    </div>
                                </>
                                :
                                <>
                                    <div className="w-full relative">
                                        <div className="flex p-4 bg-white dark:bg-darkColor z-20 overflow-hidden relative ml-auto flex-col max-w-[32rem] my-6 ">

                                            <div className="col-span-3 pt-12 space-y-3 relative">
                                                <div className="w-full flex justify-end">
                                                    <div
                                                        data-aos="fade-right"
                                                        data-aos-delay={`300`}
                                                        data-aos-duration="500"
                                                        className="w-16 h-16 border-2 mr-auto flex items-center justify-center rounded-full">
                                                        {icon}
                                                    </div>
                                                </div>
                                                <h1
                                                    data-aos="fade-right"
                                                    data-aos-delay={`400`}
                                                    data-aos-duration="500"
                                                    className="text-left font-semibold text-xl lg:text-3xl">{title}</h1>
                                                <h1
                                                    data-aos="fade-right"
                                                    data-aos-delay={`500`}
                                                    data-aos-duration="500"
                                                    className="text-left font-semibold text-base lg:text-lg">{subHeading}</h1>
                                                <div
                                                    data-aos="fade-right"
                                                    data-aos-delay={`600`}
                                                    data-aos-duration="500"

                                                    style={{
                                                        backgroundImage: 'linear-gradient(rgba(11,36,58, 1),   rgba(11,36,58, 1))'
                                                    }}
                                                    className="p-5 shadow-lg rounded-sm  z-30">
                                                    <p
                                                        data-aos="fade-right"
                                                        data-aos-delay={`700`}
                                                        data-aos-duration="500"
                                                        className='text-left lg:max-w-[90%] text-white mr-auto mb-2'>{smallText1}</p>
                                                    <p
                                                        data-aos="fade-right"
                                                        data-aos-delay={`800`}
                                                        data-aos-duration="500"
                                                        className='text-left lg:max-w-[90%] text-white mr-auto mb-2'>{smallText2}</p>
                                                </div>
                                            </div>

                                            <div
                                                data-aos="fade-left"
                                                data-aos-delay={`200`}
                                                data-aos-duration="800"
                                                style={{
                                                    backgroundImage: `linear-gradient(rgba(11,36,58, 0.3), rgba(11,36,58, 0.3)),url(${imageUrl})`
                                                }}
                                                className="absolute right-4 w-[12rem] md:w-[16rem] h-[8rem] md:h-[10rem] shadow-md !bg-no-repeat !bg-cover" >
                                            </div>
                                        </div>
                                        {i + 1 != journeyData.length &&
                                            <>
                                                <div
                                                    className="left-border-white hidden dark:flex z-10 w-[80%] absolute right-8 bottom-[-20%] py-32 "></div>
                                                <div
                                                    className="left-border-dark dark:hidden flex z-10 w-[80%] absolute right-8 bottom-[-20%] py-32 "></div>
                                            </>

                                        }
                                    </div>
                                </>
                            }
                        </>
                    ))}
                </div>
            </div>
            <div className="flex space-x-4">

            </div>
        </div>
    )
}

const GraduationIcon = () => {
    return (
        <>
            <FaGraduationCap className='text-4xl text-[#0B243A] dark:text-white' />
        </>
    )
}
export default index